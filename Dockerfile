FROM node:20-alpine

WORKDIR /app

# Instala dependências da raiz (Prisma + dotenv)
COPY package.json ./
RUN npm install

# Instala dependências do Next.js
COPY fsw-barber/package.json ./fsw-barber/
RUN cd fsw-barber && npm install

# Copia todo o código fonte
COPY . .

EXPOSE 3000
