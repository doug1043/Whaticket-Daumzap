#!/bin/sh

# Define o repositório e o nome do arquivo
GITHUB_REPO="doug1043/Whaticket-Daumzap"
FILE_NAME="dist.zip"
TMP_FILE="/tmp/$FILE_NAME"
TMP_MANIFEST="/tmp/manifest.json"

# URL da API do GitHub para obter a última release
GITHUB_API_URL="https://api.github.com/repos/$GITHUB_REPO/releases/latest"

# Remove o dist.zip antigo se existir
if [ -f "$TMP_FILE" ]; then
  echo "Removendo arquivo dist.zip antigo..."
  rm -f "$TMP_FILE"
fi
if [ -f "$TMP_MANIFEST" ]; then
  echo "Removendo manifest.json temporário antigo..."
  rm -f "$TMP_MANIFEST"
fi

# Obtém a última release
echo "Obtendo a última release do GitHub..."
LATEST_RELEASE_URL=$(curl -s "$GITHUB_API_URL" | jq -r '.assets[] | select(.name | test("dist.zip")) | .url')

# Verifica se a URL foi obtida com sucesso
if [ -z "$LATEST_RELEASE_URL" ]; then
  echo "Erro ao obter a URL da última release."
  exit 1
fi

echo "Baixando arquivo dist.zip da última release do GitHub..."
curl -L -H "Accept: application/octet-stream" -o "$TMP_FILE" "$LATEST_RELEASE_URL"

# Verifica se o download foi bem-sucedido
if [ -f "$TMP_FILE" ]; then
  echo "Baixado com sucesso: $FILE_NAME"
else
  echo "Erro ao baixar o arquivo."
  exit 1
fi

# Extrai apenas o arquivo manifest.json do dist.zip para comparação
TMP_MANIFEST="/tmp/manifest.json"
unzip -p "$TMP_FILE" "manifest.json" > "$TMP_MANIFEST"

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
CURRENT_MANIFEST="/usr/src/app/manifest.json"
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

# Remove o dist antigo e arquivos relacionados
echo "Removendo a pasta dist antiga..."
rm -rf /usr/src/app/dist

# Descompacta o arquivo .zip baixado
echo "Descompactando o arquivo .zip..."
unzip -o "$TMP_FILE" -d /usr/src/app

if [ $? -ne 0 ]; then
  echo "Erro ao descompactar o arquivo."
  exit 1
fi
echo "Arquivo descompactado com sucesso."

# Instala novas dependências
echo "Instalando novas dependências..."
cd /usr/src/app
npm install

# Substitui o manifest.json na pasta /usr/src/app/public
echo "Substituindo o manifest.json na pasta /usr/src/app/public..."
cp "$TMP_MANIFEST" "$CURRENT_MANIFEST"

# Executa a migração do banco de dados
echo "Executando migrações do banco de dados..."
npx sequelize db:migrate

if [ $? -eq 0 ]; then
  echo "Migrações executadas com sucesso."
else
  echo "Erro ao executar migrações do banco de dados."
  exit 1
fi

echo "Atualização do backend completa."
