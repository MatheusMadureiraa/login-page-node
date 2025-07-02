# 🛒 Sistema de Login com Node.js, Express, MongoDB e Handlebars

Este projeto é um sistema simples de autenticação com página de login, acesso restrito, cadastro de usuários e integração com o MongoDB.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- Um terminal (CMD, Git Bash, Terminal do VSCode, etc)

---

### 📁 1. Clone o repositório ou baixe os arquivos

```bash
git clone https://github.com/MatheusMadureiraa/login-page-node
cd login-page-node
```

### 📦 2. Instale as dependências
``` bash
npm install
```
### 🧩 3. Estrutura esperada
``` bash
📦 login-page-node/
├── app.js
├── database.js
├── logs/
├── └── logger.js
├── models/
│   └── Usuario.js
├── controllers/
│   └── usuarioController.js
├── views/
│   ├── login.hbs
│   └── index.hbs
└── usuarios.json  ← (arquivo de exportação da collection)
```

### 🛢️ 4. Inicie o MongoDB
Certifique-se de que o serviço do MongoDB está ativo:

``` bash
mongod
```

### 💾 5. Importe a collection de usuários (opcional)
Se quiser usar os usuários de exemplo:

``` bash
mongoimport --db ecommerce --collection usuarios --file usuarios.json
```

### ▶️ 6. Rode a aplicação
``` bash
node app.js
```

### 🌐 7. Acesse no navegador
``` bash
http://localhost:3000
```

### 👤 Usuário de teste
Você pode usar um dos usuários já cadastrados no MongoDB (veja no arquivo usuarios.json) OU: 
``` bash
Usuário: matheus
Senha: senha
```
