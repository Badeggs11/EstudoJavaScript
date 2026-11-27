const fs = require("node:fs");

function salvarTurma(alunos) {
  try {
    let converte = JSON.stringify(alunos);
    fs.writeFileSync("./alunos.json", converte, "utf-8");
    console.log("Arquivo gravado com sucesso");

    return true;
  } catch (erro) {
    console.log("erro ao salvar");
    console.log(erro.message);
    return false;
  }
}

function carregarTurma(caminho) {
  if (!fs.existsSync(caminho)) {
    return [];
  }
  try {
    let conteudo = fs.readFileSync(caminho, "utf-8");

    let convertido = JSON.parse(conteudo);
    return convertido;
  } catch (erro) {
    console.log(erro.message);
    throw erro;
  }
}

module.exports = { salvarTurma, carregarTurma };
