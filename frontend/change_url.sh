#!/bin/bash

# Solicita ao usuário que insira a nova URL do backend
read -p "Digite a nova URL do backend: " new_backend_url

# Exibe a URL que será usada para substituição
echo "Substituindo todas as ocorrências do backend com a nova URL: $new_backend_url"

# Faz a substituição em todos os arquivos dentro da pasta /usr/src/app/build
find /usr/src/app/build -type f -exec sed -i "s|${REACT_APP_BACKEND_URL}|$new_backend_url|g" {} +

echo "Substituição concluída!"