const fs = require("node:fs");

let frase = [
  {
    nome: "Gaby",
    nota: 7,
  },
  {
    nome: "Falco",
    nota: 9.3,
  },
];
console.log(frase);

let converte = JSON.stringify(frase);

console.log(converte);

try {
  let linha = JSON.parse("um teste");

  console.log(linha);
} catch (erro) {
  console.log(" Não foi possível converter o JSON ");
  console.log(erro.message);
}

console.log("programa continua funcionando");
