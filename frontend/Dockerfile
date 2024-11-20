# Etapa de build do frontend
FROM node:20-alpine AS build-deps

# Instala dependências adicionais antes do build
RUN apk add --no-cache jq curl unzip git

# Configuração de trabalho
WORKDIR /usr/src/app

# Copia os arquivos package*.json e instala as dependências
COPY package*.json ./
RUN npm install

# Certifique-se de que o dotenv seja instalado
RUN npm install dotenv

# Copia os arquivos necessários para o build
COPY . .

# Substitui a URL nos arquivos da pasta build
RUN REACT_APP_BACKEND_URL=$(grep REACT_APP_BACKEND_URL .env | cut -d '=' -f2) && \
    find ./build -type f -exec sed -i "s|https://api.daumzap.com.br|${REACT_APP_BACKEND_URL}|g" {} +

# Etapa final
FROM node:20-alpine

# Instala dependências adicionais (se precisar de pacotes extras no runtime)
RUN apk add --no-cache jq curl unzip git

# Configuração de trabalho
WORKDIR /usr/src/app

# Copia os arquivos construídos da etapa de build
COPY --from=build-deps /usr/src/app/build ./build
COPY --from=build-deps /usr/src/app/public ./public
COPY --from=build-deps /usr/src/app/index.html ./
COPY --from=build-deps /usr/src/app/server.js ./server.js
COPY --from=build-deps /usr/src/app/.env ./
COPY --from=build-deps /usr/src/app/upgrade_frontend.sh ./
COPY --from=build-deps /usr/src/app/change_url.sh ./

# Se `express` é uma dependência do projeto, descomente a linha abaixo
RUN npm install express

# Instalar dotenv no runtime
RUN npm install dotenv

# Certifica-se de que o script de atualização seja executável
RUN chmod +x upgrade_frontend.sh
RUN chmod +x change_url.sh

# Expõe a porta para o servidor
# EXPOSE 3250

# Comando para iniciar o servidor
CMD ["node", "server.js"]