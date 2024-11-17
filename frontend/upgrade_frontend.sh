#!/bin/sh

# Lê a variável de ambiente REACT_APP_BACKEND_URL do arquivo .env
REACT_APP_BACKEND_URL=$(grep REACT_APP_BACKEND_URL .env | cut -d '=' -f2)

# URL da API do GitHub para obter a última release
GITHUB_REPO="doug1043/Whaticket-Daumzap"  # Altere para o seu repositório
GITHUB_API_URL="https://api.github.com/repos/$GITHUB_REPO/releases/latest"

# Caminho temporário para o arquivo .zip
FILE_NAME="build.zip"
TMP_FILE="/tmp/$FILE_NAME"
TMP_MANIFEST="/tmp/manifest.json"

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
TMP_MANIFEST="/tmp/manifest.json"
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
CURRENT_MANIFEST="/usr/src/app/build/manifest.json"
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
rm -rf /usr/src/app/build
rm -f /usr/src/app/package.json /usr/src/app/package-lock.json

# Descompacta o arquivo .zip baixado
echo "Descompactando o arquivo .zip..."
unzip -o "$TMP_FILE" -d /usr/src/app

# Verifica se a descompactação foi bem-sucedida
if [ $? -eq 0 ]; then
  echo "Descompactado com sucesso."
else
  echo "Erro ao descompactar o arquivo."
  exit 1
fi

# Instala novas dependências
echo "Instalando novas dependências..."
cd /usr/src/app
npm install

# Substitui a URL pelo valor da variável de ambiente
echo "Substituindo a URL no conteúdo dos arquivos..."
find /usr/src/app/build -type f -exec sed -i "s|https://api.daumzap.com.br|${REACT_APP_BACKEND_URL}|g" {} +

# Substitui o manifest.json na pasta public
echo "Substituindo o manifest.json na pasta /usr/src/app/public..."
cp "$TMP_MANIFEST" "/usr/src/app/public/manifest.json"

# Reinicia o servidor
echo "Reiniciando o servidor..."
# systemctl restart seu_servico.service  # Substitua 'seu_servico.service' pelo nome do serviço

echo "Atualização completa com sucesso!"