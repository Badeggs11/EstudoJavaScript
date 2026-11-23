const fs = require("node:fs");

function salvarTurma(alunos) {
  let converte = JSON.stringify(alunos);
  fs.writeFileSync("./alunos.json", converte, "utf-8");
}

function carregarTurma(caminho) {
  if (!fs.existsSync(caminho)) {
    return [];
  }
  let conteudo = fs.readFileSync(caminho, "utf-8");

  let convertido = JSON.parse(conteudo);
  return convertido;
}

module.exports = { salvarTurma, carregarTurma };
