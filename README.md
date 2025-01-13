# 🚗 Vehicle Management System

O **Vehicle Management System** é um sistema desenvolvido em **NestJS** para cadastro e gerenciamento de veículos. O projeto está em fase inicial de desenvolvimento e segue boas práticas de arquitetura e organização de código.

---

## 📚 Descrição

Este projeto permite o cadastro, atualização e gerenciamento de informações relacionadas a veículos. Ele utiliza uma estrutura modular baseada em **NestJS**, combinando tecnologias modernas como **TypeORM** e **PostgreSQL** para armazenamento de dados.

---

## 🛠️ Tecnologias Utilizadas

- **NestJS** - Framework principal
- **TypeScript** - Linguagem utilizada no projeto
- **TypeORM** - ORM para manipulação de banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Passport** - Biblioteca de autenticação
- **JWT** - Autenticação baseada em tokens
- **Bcrypt** - Hash de senhas
- **Nodemailer** - Envio de e-mails
- **Husky** - Hooks de git para controle de qualidade
- **Jest** - Testes unitários

---

## 📂 Estrutura do Projeto

```bash
src/
├── app.module.ts
├── main.ts
├── modules/
│   └── vehicles/
│       ├── vehicles.controller.ts
│       ├── vehicles.service.ts
│       └── vehicles.module.ts
└── shared/
    └── database/
```

## 🚀 Como Executar o Projeto

🐳 Utilizando Docker

1. Certifique-se de que o Docker está instalado no seu sistema.
2. Execute os seguintes comandos:

# Build da imagem Docker
```bash
docker-compose build
```

# Subir o container
```bash
docker-compose up
```

## 📦 Instalando Dependências

Certifique-se de ter o pnpm instalado globalmente no seu sistema.

# Instalar dependências
pnpm install

▶️ Executar o Projeto

# Rodar o projeto em modo desenvolvimento
pnpm run start:dev

⚙️ Configuração de Variáveis de Ambiente

As variáveis de ambiente devem ser configuradas em um arquivo .env.

Exemplo de arquivo .env:

DATABASE_URL=postgresql://user:password@localhost:5432/vehicle_management
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

## 🧪 Testes

Os testes são realizados utilizando o framework Jest.

# Executar os testes
pnpm run test

# Testes Adicionais

    Cobertura de Testes: pnpm run test:cov
    Testes de Integração: pnpm run test:e2e

## 🛠️ Scripts Disponíveis

    pnpm run build - Compila o projeto
    pnpm run start - Inicia o projeto
    pnpm run start:dev - Inicia o projeto em modo de desenvolvimento
    pnpm run lint - Executa o ESLint
    pnpm run format - Formata o código com Prettier
    pnpm run test - Executa os testes unitários
    pnpm run seed - Roda o seed inicial do banco de dados

## 📋 Roadmap

Configuração inicial do projeto
Módulo de veículos
Implementar autenticação com JWT
Configurar envio de e-mails com Nodemailer
Criar módulo de usuários
Adicionar logs de auditoria

    Documentação da API com Swagger

## 📖 Documentação da API

A documentação da API estará disponível em /api utilizando Swagger assim que implementada.
🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar PRs com melhorias, sugestões ou correções.
📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

Desenvolvido por David Augusto.