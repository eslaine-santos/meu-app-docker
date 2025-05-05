
```markdown
# 🚀 Meu App com Docker e Node.js

Este é um projeto de exemplo usando **Node.js** com **Docker**, preparado para diferentes ambientes como **desenvolvimento**, **UAT** (teste com usuários) e **produção**.

## 📦 Tecnologias utilizadas

- Node.js
- Express
- Docker

## 📁 Estrutura do projeto

```

meu-app/
├── app.js
├── package.json
└── Dockerfile

````

## 🐳 Como usar com Docker

### 1. Build da imagem

```bash
docker build -t meu-app .
````

### 2. Rodar em diferentes ambientes

#### Modo desenvolvimento (padrão):

```bash
docker run -p 3000:3000 meu-app
```

#### Modo UAT:

```bash
docker run -p 3000:3000 -e NODE_ENV=uat meu-app
```

#### Modo produção:

```bash
docker run -p 3000:3000 -e NODE_ENV=production meu-app
```

## 🌐 Acessando a aplicação

Abra o navegador em [http://localhost:3000](http://localhost:3000)

---

Feito com ❤️ por Eslaine Santos

```

---

