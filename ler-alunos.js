const fs = require("node:fs");

let conteudo = fs.readFileSync("./alunos.json", "utf8");

let conteudoConvertido = JSON.parse(conteudo);

console.log(conteudoConvertido[2].nome, conteudoConvertido[2].nota);
