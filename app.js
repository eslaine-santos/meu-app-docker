const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  if (env === "development") {
    res.send("🛠️ Ambiente de desenvolvimento");
  } else if (env === "uat") {
    res.send("👤 Ambiente de testes com usuários (UAT)");
  } else if (env === "production") {
    res.send("🚀 Ambiente de produção");
  } else {
    res.send("🌍 Ambiente desconhecido");
  }
});

app.listen(port, () => {
  console.log(\`Servidor rodando em http://localhost:\${port} no modo \${env}\`);
});
