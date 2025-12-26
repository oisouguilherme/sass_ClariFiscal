# 📁 Central de Documentos & Prazos Contábeis

## Documentação Técnica — MVP

---

## 1. Visão Geral

A Central de Documentos & Prazos Contábeis é uma plataforma web simples e escalável para organizar o envio de documentos contábeis e o acompanhamento de prazos entre **contadores** e **clientes**.

O sistema resolve o problema de:

- documentos espalhados (WhatsApp, e-mail)
- cobranças manuais
- falta de clareza para o cliente
- retrabalho do contador

O foco do MVP é **processo**, não cálculo contábil.

---

## 2. Objetivo do MVP

- Organizar documentos por cliente e mês
- Mostrar claramente o que está pendente
- Reduzir comunicação fora de contexto
- Permitir cobrança recorrente do contador

---

## 3. Stack Tecnológica

### Frontend

- React
- Tailwind CSS
- React Router
- Axios
- Context API ou Zustand

### Backend

- Node.js
- Express
- JWT (Autenticação)
- ORM: Prisma ou Sequelize
- Banco de dados relacional (PostgreSQL / MySQL)

### Infraestrutura

- Storage de arquivos: S3 compatível
- Deploy backend: VPS / Render / Railway
- Deploy frontend: Vercel / Netlify

---

## 4. Tipos de Usuário

### CONTADOR

- Gerencia clientes e empresas
- Define checklists
- Visualiza documentos
- Marca status
- Comenta pendências

### CLIENTE

- Visualiza checklist mensal
- Envia documentos
- Acompanha status
- Lê comentários

---

## 5. Módulos do Sistema

---

## 5.1 Autenticação & Usuários

### Funcionalidades

- Cadastro
- Login
- Logout
- Recuperação de senha
- Controle de acesso por papel

### Entidade: User

- id (UUID)
- name
- email (unique)
- password_hash
- role (CONTADOR | CLIENTE)
- created_at

---

## 5.2 Empresas / Clientes

### Funcionalidades

- Cadastro de empresa
- Associação:
  - empresa ↔ cliente
  - empresa ↔ contador
- Status da empresa

### Entidade: Company

- id
- razao_social
- nome_fantasia
- cnpj
- status (ATIVA | INATIVA)
- contador_id
- created_at

---

## 5.3 Checklist Mensal (CORE DO SISTEMA)

### Objetivo

Definir claramente quais documentos devem ser enviados em cada mês.

### Funcionalidades

- Checklist por empresa e competência (YYYY-MM)
- Itens padrão:
  - Notas fiscais
  - Extratos bancários
  - Outros
- Status por item:
  - PENDENTE
  - ENVIADO
  - APROVADO
- Comentário por item

### Entidades

#### Checklist

- id
- company_id
- competence (YYYY-MM)
- due_date
- created_at

#### ChecklistItem

- id
- checklist_id
- title
- status
- comment

---

## 5.4 Documentos

### Funcionalidades

- Upload de arquivos
- Associação ao:
  - checklist
  - item do checklist
- Visualização e download
- Histórico

### Regras

- Cliente só envia documentos
- Contador pode aprovar ou rejeitar
- Documento não pode ser apagado após aprovado

### Entidade: Document

- id
- checklist_item_id
- uploaded_by (user_id)
- file_name
- file_url
- created_at

---

## 5.5 Comunicação Contextual

### Objetivo

Eliminar mensagens soltas fora de contexto.

### Funcionalidades

- Comentários por:
  - item do checklist
- Histórico simples
- Comunicação assíncrona

### Entidade: Comment

- id
- checklist_item_id
- user_id
- content
- created_at

---

## 5.6 Lembretes & Prazos

### Funcionalidades (MVP)

- Data limite por checklist
- Destaque visual para atraso

### Evolução futura

- E-mail automático
- WhatsApp automático

---

## 5.7 Dashboard

### Contador visualiza

- Empresas em atraso
- Empresas em dia
- Quantidade de pendências

### Cliente visualiza

- Status do mês atual
- Itens pendentes
- Itens aprovados

---

## 6. Regras de Negócio

- Cliente só acessa sua empresa
- Contador só acessa empresas vinculadas
- Checklist é gerado mensalmente
- Documento aprovado não pode ser removido
- Comentários ficam vinculados ao item

---

## 7. Rotas da API (Exemplo)

### Auth

- POST /auth/login
- POST /auth/register

### Companies

- POST /companies
- GET /companies
- GET /companies/:id

### Checklist

- POST /checklists
- GET /checklists/:companyId/:competence

### Checklist Items

- PATCH /checklist-items/:id/status
- POST /checklist-items/:id/comment

### Documents

- POST /documents/upload
- GET /documents/:checklistItemId

---

## 8. Ordem de Desenvolvimento (Recomendada)

### Fase 1

1. Autenticação
2. Empresas
3. Checklist
4. Itens do checklist

### Fase 2

5. Upload de documentos
6. Dashboard

### Fase 3

7. Comentários
8. Ajustes de UX

---

## 9. Fora do Escopo do MVP

- OCR
- Integração fiscal
- Emissão de impostos
- Pagamentos
- White label
- Multi-idioma

---

## 10. Critério de Sucesso do MVP

- Contador consegue organizar clientes sem WhatsApp
- Cliente entende o que precisa enviar
- Redução de mensagens repetidas
- Produto vendável com poucos ajustes

---

## 11. Observações Finais

Este sistema deve ser:

- simples
- rápido
- claro

Evoluções devem ser guiadas por uso real, não por suposição.

---
