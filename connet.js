import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "sua senha",
  database: "dbtest",
});

conexao.connect();

export default conexao;
