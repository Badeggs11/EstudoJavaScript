const { revalidarResposta } = require("./validacao");
const prompt = require("prompt-sync")();

function cadastrarAlunos(qtdAlunos) {
  let sala = [];
  for (let i = 0; i < qtdAlunos; i++) {
    sala.push({
      nome: prompt(`Digite o nome do aluno ${i + 1}:`),
      nota: revalidarResposta(prompt(`Digite a nota do aluno ${i + 1}:`)),
    });
  }
  console.log(" Alunos cadastrados ");
  return sala;
}

module.exports = { cadastrarAlunos };
