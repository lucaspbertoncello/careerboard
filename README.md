# CareerBoard

## Introdução

CareerBoard é uma aplicação web full-stack desenvolvida para auxiliar profissionais no gerenciamento e acompanhamento de suas candidaturas e processos seletivos. A plataforma oferece uma interface intuitiva e moderna para organizar informações de entrevistas, monitorar status de aplicações e analisar padrões através de visualizações gráficas e estatísticas detalhadas.

O sistema permite que usuários cadastrem suas entrevistas com informações como empresa, cargo, data de aplicação, salário e descrição, categorizando cada processo em três status principais: PENDENTE, APROVADO ou REJEITADO. Através de um dashboard interativo, é possível visualizar métricas importantes como total de entrevistas realizadas, taxa de aprovação, análise temporal e histórico recente de candidaturas.

Desenvolvido com tecnologias modernas e seguindo boas práticas de desenvolvimento de software, o CareerBoard implementa uma arquitetura modular e escalável, com separação clara entre frontend e backend, autenticação segura via JWT, validação robusta de dados e design responsivo que garante uma experiência consistente em diferentes dispositivos.

## Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: NestJS 11.0.1
- **Linguagem**: TypeScript
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma 6.16.2
- **Autenticação**: JWT (JSON Web Tokens)
- **Criptografia**: bcryptjs
- **Documentação API**: Swagger/OpenAPI
- **Testes**: Jest
- **Code Quality**: ESLint, Prettier

### Frontend

- **Framework**: React 19.1.1
- **Linguagem**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.7
- **UI Components**: Radix UI
- **Estilização**: Tailwind CSS 4.1.13
- **Gerenciamento de Formulários**: React Hook Form
- **Validação de Schemas**: Zod
- **Cliente HTTP**: Axios
- **Gerenciamento de Estado**: React Context API (AuthProvider, DashboardProvider)
- **Data Fetching**: TanStack React Query 5.90.2
- **Roteamento**: React Router DOM 7.9.3
- **Gráficos e Visualizações**: Recharts 2.15.4
- **Notificações**: React Hot Toast
- **Ícones**: Lucide React 0.544.0
- **Utilitários de Data**: date-fns 4.1.0

### DevOps e Infraestrutura

- **Containerização**: Docker
- **Orquestração**: Docker Compose
- **Gerenciador de Pacotes**: Yarn

## Guia de Instalação e Uso

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **Yarn** (gerenciador de pacotes)
- **Docker** e **Docker Compose** (para o banco de dados PostgreSQL)
- **Git** (para clonar o repositório)

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/lucaspbertoncello/careerboard.git
cd careerboard
```

### Passo 2: Configurar o Backend

#### 2.1 Instalar Dependências

```bash
cd api
yarn install
```

#### 2.2 Configurar Variáveis de Ambiente

Crie um arquivo `.env` na pasta `api/` com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://root:root@localhost:5432/careerboard?schema=public"
JWT_SECRET="a8f5f167f44f4964e6c998dee827110c"
PORT=3000
```

**Importante**: Em produção, altere o `JWT_SECRET` para uma chave segura e única.

#### 2.3 Iniciar o Banco de Dados PostgreSQL

Na pasta `api/`, execute:

```bash
docker-compose up -d
```

Este comando irá criar e iniciar um container Docker com PostgreSQL na porta 5432.

#### 2.4 Executar Migrações do Banco de Dados

```bash
npx prisma migrate dev
```

Este comando irá criar todas as tabelas necessárias no banco de dados.

#### 2.5 Popular o Banco de Dados (Opcional)

Para adicionar 500 entrevistas de exemplo:

```bash
npx prisma db seed
```

#### 2.6 Iniciar o Servidor Backend

Para desenvolvimento:

```bash
yarn start:dev
```

O servidor estará disponível em `http://localhost:3000`.

Para visualizar a documentação da API (Swagger), acesse: `http://localhost:3000/docs`

### Passo 3: Configurar o Frontend

#### 3.1 Instalar Dependências

Abra um novo terminal e execute:

```bash
cd fe
yarn install
```

#### 3.2 Configurar Variáveis de Ambiente

Crie um arquivo `.env` na pasta `fe/` com o seguinte conteúdo:

```env
VITE_APP_BASE_URL=http://localhost:3000
```

#### 3.3 Iniciar o Servidor de Desenvolvimento

```bash
yarn dev
```

O frontend estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

### Passo 4: Acessar a Aplicação

1. Abra seu navegador e acesse `http://localhost:5173`
2. Crie uma nova conta através da página de registro
3. Faça login com suas credenciais
4. Comece a gerenciar suas entrevistas!

## Scripts Disponíveis

### Backend (pasta `api/`)

```bash
# Desenvolvimento
yarn start:dev          # Inicia o servidor em modo de desenvolvimento com hot-reload

# Build
yarn build              # Compila o projeto TypeScript

# Produção
yarn start:prod         # Inicia o servidor em modo de produção

# Testes
yarn test               # Executa os testes unitários
yarn test:watch         # Executa os testes em modo watch
yarn test:cov           # Executa os testes com cobertura de código
yarn test:e2e           # Executa os testes end-to-end

# Code Quality
yarn lint               # Executa o ESLint e corrige problemas automaticamente
yarn format             # Formata o código com Prettier

# Banco de Dados
npx prisma migrate dev  # Cria e aplica migrações
npx prisma studio       # Abre interface visual do banco de dados
npx prisma db seed      # Popula o banco com dados de exemplo
```

### Frontend (pasta `fe/`)

```bash
# Desenvolvimento
yarn dev                # Inicia o servidor de desenvolvimento do Vite

# Build
yarn build              # Compila o projeto para produção

# Preview
yarn preview            # Visualiza a build de produção localmente

# Code Quality
yarn lint               # Executa o ESLint
```

## Funcionalidades Implementadas

### Autenticação e Autorização

- Registro de novos usuários com validação de dados
- Login com email e senha
- Autenticação via JWT com expiração de 7 dias
- Proteção de rotas privadas com guards
- Hash de senhas com bcryptjs

### Gerenciamento de Entrevistas

- Criação de novas entrevistas com informações detalhadas
- Edição de entrevistas existentes
- Exclusão de entrevistas com confirmação
- Filtragem por status (PENDENTE, APROVADO, REJEITADO)
- Visualização em formato de cards responsivos

### Dashboard e Análises

- Cards de resumo com estatísticas principais
- Gráficos de visualização de dados
- Exibição das últimas 3 entrevistas
- Contador de entrevistas por ano
- Indicadores de aprovação, rejeição e processos pendentes

### Interface e Experiência do Usuário

- Design responsivo para mobile, tablet e desktop
- Suporte a tema claro e escuro
- Notificações toast para feedback de ações
- Estados de carregamento com skeletons
- Estados vazios informativos
- Validação de formulários em tempo real
- Componentes acessíveis (ARIA)

## API Endpoints

### Autenticação

- `POST /auth/signup` - Registrar novo usuário
- `POST /auth/signin` - Fazer login

### Entrevistas

- `POST /interviews` - Criar nova entrevista
- `GET /interviews` - Listar todas as entrevistas do usuário
- `GET /interviews?status=PENDING` - Filtrar entrevistas por status
- `GET /interviews/summary` - Obter resumo estatístico
- `PUT /interviews/:interviewId` - Atualizar entrevista completa
- `PATCH /interviews/:interviewId/status` - Atualizar apenas o status
- `DELETE /interviews/:interviewId` - Excluir entrevista

### Usuários

- `GET /users/me` - Obter informações do usuário autenticado

## Arquitetura e Padrões

### Backend

- **Arquitetura Modular**: Organização por features e entidades
- **Repository Pattern**: Camada de abstração para acesso a dados
- **Dependency Injection**: Injeção de dependências nativa do NestJS
- **DTOs e Validação**: Validação de dados com class-validator
- **Guards e Decorators**: Proteção de rotas e cross-cutting concerns
- **Exception Filters**: Tratamento centralizado de erros

### Frontend

- **Component-Based Architecture**: Componentes reutilizáveis e composáveis
- **Context API**: Gerenciamento de estado global
- **React Query**: Cache e sincronização de estado do servidor
- **Custom Hooks**: Lógica reutilizável encapsulada
- **Atomic Design**: Organização de componentes por complexidade
- **Type-Safe Forms**: Formulários tipados com Zod e React Hook Form

## Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.

## Contato

Para dúvidas ou sugestões, abra uma issue no repositório do projeto.
