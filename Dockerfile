FROM node:latest

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package.json pnpm-lock.yaml ./

# Instala o pnpm globalmente
RUN npm install -g pnpm

# Instala o nestjs/cli globalmente
RUN npm install -g @nestjs/cli

# Instala TODAS as dependências (incluindo dev)
RUN pnpm install --frozen-lockfile

# Copia o restante do código para o container
COPY . .

# Garante que o Nest CLI esteja acessível
RUN pnpm exec nest build

# Expõe a porta 3000 para a API
EXPOSE 3000

# Comando de inicialização
CMD ["pnpm", "start:prod"]
