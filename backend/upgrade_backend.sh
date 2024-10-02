#!/bin/sh

# Define o repositório
REPO="doug1043/Whaticket-Daumzap"
ASSET_NAME="dist.zip"

# Obtém a URL do último release e extrai a URL do asset
echo "Obtendo a URL do último release..."
DOWNLOAD_URL=$(curl -s "https://api.github.com/repos/$REPO/releases/latest" | grep "browser_download_url.*$ASSET_NAME" | cut -d '"' -f 4)

# Verifica se a URL foi encontrada
if [ -z "$DOWNLOAD_URL" ]; then
  echo "Erro: não foi possível encontrar o arquivo $ASSET_NAME na última release."
  exit 1
fi

echo "Baixando arquivo $ASSET_NAME da release do GitHub..."
curl -L -o /tmp/$ASSET_NAME "$DOWNLOAD_URL"

# Verifica se o download foi bem-sucedido
if [ -f /tmp/$ASSET_NAME ]; then
  echo "Baixado com sucesso: $ASSET_NAME"
else
  echo "Erro ao baixar o arquivo."
  exit 1
fi

echo "Substituindo a pasta dist e o package.json..."
rm -rf /usr/src/app/dist
rm /usr/src/app/package.json

# Descompacta o novo arquivo .zip
unzip -o /tmp/$ASSET_NAME -d /usr/src/app

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

# Executa a migração do banco de dados
echo "Executando migrações do banco de dados..."
npx sequelize db:migrate

# Verifica se a migração foi bem-sucedida
if [ $? -eq 0 ]; then
  echo "Migrações executadas com sucesso."
else
  echo "Erro ao executar migrações do banco de dados."
  exit 1
fi

echo "Atualização do backend completa."