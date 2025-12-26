# 📊 Plataforma de Serviços Combinados (Contabilidade + Tecnologia)

## Documentação Técnica — MVP

## 1. Visão Geral

Esta plataforma tem como objetivo centralizar a comunicação, documentos e informações financeiras entre **clientes (MEIs e microempresas)** e **contadores**, reduzindo trabalho manual, aumentando automação e permitindo um modelo de serviço digital escalável.

O sistema será desenvolvido inicialmente como um **MVP (Minimum Viable Product)**, priorizando simplicidade, clareza e rapidez de entrega.

---

## 2. Stack Tecnológica

### Frontend

- React
- Tailwind CSS
- Axios (requisições HTTP)
- React Router
- Context API ou Zustand (estado global simples)

### Backend

- Node.js
- Express.js
- JWT (autenticação)
- ORM (Prisma ou Sequelize)
- Banco de dados relacional (PostgreSQL ou MySQL)

### Infraestrutura (sugestão)

- Storage de arquivos: S3 compatível
- Deploy backend: VPS / Render / Railway
- Deploy frontend: Vercel / Netlify

---

## 3. Tipos de Usuários

### Cliente

- Representa uma empresa (CNPJ)
- Envia documentos
- Visualiza impostos, tarefas e relatórios
- Comunica-se com o contador

### Contador

- Gerencia múltiplas empresas
- Visualiza documentos de clientes
- Apura impostos
- Envia mensagens e tarefas

### Admin

- Gerencia usuários
- Gerencia planos
- Visualiza métricas gerais

---

## 4. Módulos do Sistema

---

## 4.1 Autenticação & Usuários

### Funcionalidades

- Cadastro de usuário
- Login
- Logout
- Recuperação de senha
- Controle de permissões por papel

### Entidades

- User
  - id
  - name
  - email
  - password_hash
  - role (ADMIN | CONTADOR | CLIENTE)
  - created_at

---

## 4.2 Empresas (CNPJ)

### Funcionalidades

- Cadastro de empresa
- Associação empresa ↔ cliente
- Associação empresa ↔ contador
- Status da empresa

### Entidade

- Company
  - id
  - razao_social
  - nome_fantasia
  - cnpj
  - regime_tributario
  - cnae
  - status
  - created_at

---

## 4.3 Documentos

### Funcionalidades

- Upload de documentos
- Organização por tipo e competência
- Download e visualização
- Controle de permissões

### Tipos de documentos

- Nota fiscal
- Extrato bancário
- Contrato
- Outros

### Entidade

- Document
  - id
  - company_id
  - uploaded_by
  - type
  - competence (YYYY-MM)
  - file_url
  - created_at

---

## 4.4 Financeiro Simplificado

> **Obs:** Não é um ERP. Apenas visão financeira básica.

### Funcionalidades

- Cadastro manual de receitas
- Cadastro manual de despesas
- Visão mensal consolidada

### Entidades

- Revenue

  - id
  - company_id
  - description
  - amount
  - date

- Expense
  - id
  - company_id
  - description
  - amount
  - date

---

## 4.5 Impostos & Obrigações

### Funcionalidades

- Cadastro de impostos por empresa
- Status por competência
- Upload de comprovante
- Observações do contador

### Status

- PENDENTE
- APURADO
- PAGO

### Entidade

- Tax
  - id
  - company_id
  - name
  - competence
  - amount
  - status
  - notes

---

## 4.6 Tarefas & Prazos

### Funcionalidades

- Criação de tarefas
- Associação a empresa
- Datas de vencimento
- Controle de status

### Entidade

- Task
  - id
  - company_id
  - title
  - description
  - due_date
  - status

---

## 4.7 Comunicação (Mensagens)

### Funcionalidades

- Envio de mensagens internas
- Histórico por empresa
- Comunicação cliente ↔ contador

### Entidade

- Message
  - id
  - company_id
  - sender_id
  - content
  - created_at

---

## 4.8 Relatórios

### Funcionalidades

- Relatório mensal simples
- Exportação em PDF

### Dados apresentados

- Total de receitas
- Total de despesas
- Impostos pagos
- Resultado estimado

---

## 4.9 Planos & Cobrança (Manual no MVP)

### Funcionalidades

- Cadastro de planos
- Associação plano ↔ empresa
- Controle manual de pagamento

### Entidade

- Plan
  - id
  - name
  - price
  - description

---

## 4.10 Admin

### Funcionalidades

- Dashboard geral
- Gestão de usuários
- Gestão de empresas
- Gestão de planos

---

## 5. Rotas da API (Exemplo)

### Auth

- POST /auth/login
- POST /auth/register

### Empresas

- GET /companies
- POST /companies
- GET /companies/:id

### Documentos

- POST /documents
- GET /documents/:companyId

### Impostos

- POST /taxes
- GET /taxes/:companyId

### Mensagens

- POST /messages
- GET /messages/:companyId

---

## 6. Regras de Negócio Importantes

- Cliente só acessa dados da própria empresa
- Contador acessa apenas empresas associadas
- Admin acessa tudo
- Documentos não podem ser apagados pelo cliente após validação
- Tarefas vencidas ficam em destaque

---

## 7. Ordem de Desenvolvimento (MVP)

1. Autenticação
2. Empresas
3. Documentos
4. Impostos
5. Comunicação
6. Admin básico

---

## 8. Fora do Escopo do MVP

- Integração bancária
- Emissão automática de impostos
- Pagamento recorrente
- OCR de documentos
- App mobile

---

## 9. Objetivo do MVP

Validar:

- Aceitação do modelo digital
- Redução de trabalho manual
- Facilidade de uso pelo cliente
- Viabilidade de escala

---

## 10. Observações Finais

Este MVP prioriza **processo e clareza**, não complexidade técnica.  
Evoluções devem ser guiadas pelo uso real dos clientes.

---
