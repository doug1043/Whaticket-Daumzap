#!/bin/sh

# Lê a variável de ambiente REACT_APP_BACKEND_URL do arquivo .env
REACT_APP_BACKEND_URL=$(grep REACT_APP_BACKEND_URL .env | cut -d '=' -f2)

# URL da API do GitHub para obter a última release
GITHUB_REPO="doug1043/Whaticket-Daumzap"  # Altere para o seu repositório
GITHUB_API_URL="https://api.github.com/repos/$GITHUB_REPO/releases/latest"

# Obtém a última release
echo "Obtendo a última release do GitHub..."
LATEST_RELEASE_URL=$(curl -s "$GITHUB_API_URL" | jq -r '.assets[] | select(.name | test("build.zip")) | .url')

# Verifica se a URL foi obtida com sucesso
if [ -z "$LATEST_RELEASE_URL" ]; then
  echo "Erro ao obter a URL da última release."
  exit 1
fi

# Define o nome do arquivo para salvar
FILE_NAME="novo_build.zip"

echo "Baixando arquivo .zip da última release do GitHub..."
curl -L -H "Accept: application/octet-stream" -o /tmp/$FILE_NAME "$LATEST_RELEASE_URL"

# Verifica se o download foi bem-sucedido
if [ -f /tmp/$FILE_NAME ]; then
  echo "Baixado com sucesso: $FILE_NAME"
else
  echo "Erro ao baixar o arquivo."
  exit 1
fi

echo "Removendo a pasta build antiga e o package.json..."
rm -rf /usr/src/app/build
rm /usr/src/app/package.json

echo "Descompactando o arquivo .zip..."
unzip -o /tmp/$FILE_NAME -d /usr/src/app

# Verifica se a descompactação foi bem-sucedida
if [ $? -eq 0 ]; then
  echo "Descompactado com sucesso."
else
  echo "Erro ao descompactar o arquivo."
  exit 1
fi

echo "Instalando novas dependências..."
cd /usr/src/app
npm install

# Substitui a URL pelo valor da variável de ambiente
echo "Substituindo a URL no conteúdo dos arquivos..."
find /usr/src/app/build -type f -exec sed -i "s|https://api.daumzap.com.br|${REACT_APP_BACKEND_URL}|g" {} +

echo "Atualização do build completa."