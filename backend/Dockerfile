FROM node:20-alpine AS build-deps

# Instalação de dependências necessárias
RUN apk add --no-cache wget postgresql-client git openssh curl unzip

# Configuração de trabalho
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .


# ENV NODE_ENV=docker
# ENV PORT=3000

# script de migrate e seed
COPY check-and-seed.sh ./
RUN chmod +x check-and-seed.sh
RUN chmod +x upgrade_backend.sh

# EXPOSE 3000

CMD sh ./check-and-seed.sh && node dist/server.js
