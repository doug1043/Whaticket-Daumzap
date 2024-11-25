#!/bin/sh

# Lê as variáveis de ambiente do arquivo .env
REACT_APP_BACKEND_URL=$(grep REACT_APP_BACKEND_URL .env | cut -d '=' -f2)
NODE_ENV=$(grep NODE_ENV .env | cut -d '=' -f2)

# URL da API do GitHub para obter a última release
GITHUB_REPO="doug1043/Whaticket-Daumzap"  
GITHUB_API_URL="https://api.github.com/repos/$GITHUB_REPO/releases/latest"

# Caminho temporário para o arquivo .zip
FILE_NAME="build.zip"
TMP_FILE="/tmp/frontend_$FILE_NAME"
TMP_MANIFEST="/tmp/frontend_manifest.json"

# Define o diretório base baseado no ambiente
if [ "$NODE_ENV" = "docker" ]; then
    BASE_DIR="/usr/src/app"
else
    # Procura pelo diretório frontend em /home/deploy/*/frontend
    FRONTEND_DIR=$(find /home/deploy -maxdepth 2 -type d -name "frontend" | head -n 1)
    if [ -z "$FRONTEND_DIR" ]; then
        echo "Nenhum diretório frontend encontrado em /home/deploy/*/frontend"
        exit 1
    fi
    BASE_DIR="$FRONTEND_DIR"
    echo "Diretório frontend encontrado: $BASE_DIR"
fi

# Remove o build.zip antigo se existir
if [ -f "$TMP_FILE" ]; then
  echo "Removendo arquivo .zip antigo..."
  rm -f "$TMP_FILE"
fi
if [ -f "$TMP_MANIFEST" ]; then
  echo "Removendo manifest.json temporário antigo..."
  rm -f "$TMP_MANIFEST"
fi

# Obtém a última release
echo "Obtendo a última release do GitHub..."
LATEST_RELEASE_URL=$(curl -s "$GITHUB_API_URL" | jq -r '.assets[] | select(.name | test("build.zip")) | .url')

# Verifica se a URL foi obtida com sucesso
if [ -z "$LATEST_RELEASE_URL" ]; then
  echo "Erro ao obter a URL da última release."
  exit 1
fi

echo "Baixando arquivo .zip da última release do GitHub..."
curl -L -H "Accept: application/octet-stream" -o "$TMP_FILE" "$LATEST_RELEASE_URL"

# Verifica se o download foi bem-sucedido
if [ -f "$TMP_FILE" ]; then
  echo "Baixado com sucesso: $FILE_NAME"
else
  echo "Erro ao baixar o arquivo."
  exit 1
fi

# Extrai apenas o arquivo manifest.json do build.zip para comparação
unzip -p "$TMP_FILE" "build/manifest.json" > "$TMP_MANIFEST"

if [ ! -f "$TMP_MANIFEST" ]; then
  echo "Manifest.json não encontrado no arquivo .zip."
  exit 1
fi

# Lê a versão do manifest baixado
DOWNLOADED_VERSION=$(jq -r '.version' "$TMP_MANIFEST")
if [ -z "$DOWNLOADED_VERSION" ]; then
  echo "Erro ao ler a versão do manifest baixado."
  exit 1
fi
echo "Versão do manifest baixado: $DOWNLOADED_VERSION"

# Lê a versão do manifest do projeto atual
CURRENT_MANIFEST="$BASE_DIR/build/manifest.json"
if [ -f "$CURRENT_MANIFEST" ]; then
  CURRENT_VERSION=$(jq -r '.version' "$CURRENT_MANIFEST")
else
  CURRENT_VERSION="0.0.0"  # Assume uma versão inicial se não existir
fi
echo "Versão do manifest atual: $CURRENT_VERSION"

# Compara as versões
if [ "$(printf '%s\n' "$DOWNLOADED_VERSION" "$CURRENT_VERSION" | sort -V | tail -n 1)" = "$CURRENT_VERSION" ]; then
  echo "A versão atual ($CURRENT_VERSION) é igual ou superior à versão baixada ($DOWNLOADED_VERSION). Nenhuma atualização necessária."
  exit 0
fi

echo "Versão baixada ($DOWNLOADED_VERSION) é maior que a atual ($CURRENT_VERSION). Atualizando..."

# Remove o build antigo e arquivos relacionados
echo "Removendo a pasta build antiga e os arquivos de configuração antigos..."
rm -rf "$BASE_DIR/build"
rm -f "$BASE_DIR/package.json" "$BASE_DIR/package-lock.json"

# Descompacta o arquivo .zip baixado
echo "Descompactando o arquivo .zip..."
unzip -o "$TMP_FILE" -d "$BASE_DIR"

# Verifica se a descompactação foi bem-sucedida
if [ $? -eq 0 ]; then
  echo "Descompactado com sucesso."
else
  echo "Erro ao descompactar o arquivo."
  exit 1
fi

# Instala novas dependências
echo "Instalando novas dependências..."
cd "$BASE_DIR"
npm install

# Substitui a URL pelo valor da variável de ambiente
echo "Substituindo a URL no conteúdo dos arquivos..."
find "$BASE_DIR/build" -type f -exec sed -i "s|https://api.daumzap.com.br|${REACT_APP_BACKEND_URL}|g" {} +

# Limpeza no final do script
rm -f "$TMP_FILE" "$TMP_MANIFEST"

# Verifica o ambiente e executa as ações apropriadas
if [ "$NODE_ENV" = "docker" ]; then
    echo "Ambiente Docker detectado. Reiniciando o sistema..."
    reboot
else
    echo "Ambiente PM2 detectado. Reiniciando o serviço frontend..."
    # Extrai o nome da pasta pai do frontend para usar como base do nome do processo PM2
    PM2_BASE_NAME=$(basename "$(dirname "$BASE_DIR")")
    echo "Nome base do processo PM2 detectado: $PM2_BASE_NAME"
    sudo su - deploy -c "pm2 restart $PM2_BASE_NAME-frontend"
fi

echo "Atualização completa com sucesso!"