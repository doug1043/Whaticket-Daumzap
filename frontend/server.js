require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000; // Porta definida pela variável de ambiente ou 3000

// Serve os arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html")); // Serve o index.html para qualquer rota
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
