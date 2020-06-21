FROM node:lts-alpine

# instala um servidor http simples para servir conte�do est�tico
RUN npm install -g http-server

# faz da pasta 'app' o diret�rio atual de trabalho
WORKDIR /app

# copia os arquivos 'package.json' e 'package-lock.json' (se dispon�vel)
COPY package*.json ./

# instala depend�ncias do projeto
RUN npm install
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

# copia arquivos e pastas para o diret�rio atual de trabalho (pasta 'app')
COPY . .

# compila a aplica��o de produ��o com minifica��o
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]