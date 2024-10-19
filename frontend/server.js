const express = require("express");
const path = require("path");
const { exec } = require("child_process"); // Importa o módulo child_process
const app = express();
const PORT = process.env.PORT || 3250; // Porta definida pela variável de ambiente ou 3000

// Serve os arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, "build")));

// Rota para atualizar o projeto
app.get("/upgrade/upgrade-frontend", (req, res) => {
  if (process.env.NODE_ENV === "docker") {
    exec("sh /usr/src/app/upgrade_frontend.sh", (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o script: ${error.message}`);
        return res.status(500).send("Erro ao atualizar o projeto.");
      }
      if (stderr) {
        console.error(`Erro no script: ${stderr}`);
        return res.status(500).send("Erro no script de atualização.");
      }
      console.log(`Saída do script: ${stdout}`);
      res.send("Projeto atualizado com sucesso!");
    });
  } else {
    console.log("função indisponivel no momento");
    //criar logica de atualização em caso de instalação via VPS ou Servidor Local
  }
});

// Serve o index.html para qualquer rota não definida
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html")); // Serve o index.html para qualquer rota
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
