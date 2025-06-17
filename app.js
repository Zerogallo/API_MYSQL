import express from "express";
import conexao from "./connet.js";

const app = express();
app.use(express.json());

//criar uma rota

app.get("/tabela", (req, res) => {
  const sql = "SELECT * FROM usuario;";
  conexao.query(sql, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(404).json({ erro: "Dados nao localisado", erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.get("/tabela/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM usuario WHERE id=?;";
  conexao.query(sql, id, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(404).json({ erro: "Dados nao localisado", erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.post("/tabela", (req, res) => {
  const dados = req.body;
  const sql = "INSERT INTO usuario SET ?;";
  conexao.query(sql, dados, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(404).json({ erro: "Dados nao localisado", erro });
    } else {
      res.status(201).json(resultado);
    }
  });
});

app.delete("/tabela/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM usuario WHERE id=? ;";
  conexao.query(sql, id, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(404).json({ erro: "Dados nao localisado", erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.put("/tabela/:id", (req, res) => {
  const id = req.params.id;
  const dados = req.body;
  const sql = "UPDATE usuario SET ? WHERE id=?;";
  conexao.query(sql, [dados, id], (erro, resultado) => {
    if (erro) {
      console.log(erro);
      res.status(404).json({ erro: "Dados nao localisado", erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

export default app;
