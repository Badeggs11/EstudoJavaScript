const fs = require("node:fs");

let alunos = [
  { nome: "Pablo", nota: 7 },
  { nome: "Elden", nota: 8 },
  { nome: "Smith", nota: 9 },
];

let dados = JSON.stringify(alunos);

console.log(typeof dados);
console.log(dados);

let alunoDados = JSON.parse(dados);

console.log(typeof alunoDados);
console.log(alunoDados[1]);

fs.writeFileSync("./alunos.json", dados, "utf8");
