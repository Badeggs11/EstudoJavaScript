const { revalidarResposta } = require("./validacao");
const prompt = require("prompt-sync")();

function cadastrarAlunos(qtdAlunos, sala) {
  let i = 0;
  while (i < qtdAlunos) {
    sala.push({
      nome: prompt(`Digite o nome do aluno ${i + 1} : `),
      nota: revalidarResposta(prompt(`Digite a nota do aluno ${i + 1} : `)),
    });
    i++;
  }
  console.log(" Alunos cadastrados ");

  return sala;
}

function buscarAlunos(alunos, nomeBuscado) {
  for (let i = 0; i < alunos.length; i++) {
    if (nomeBuscado === alunos[i].nome) {
      return alunos[i];
    }
  }
  console.log("Aluno não encontrado");
  return null;
}
function alterarNota(alunos, nomeBuscado, novaNota) {
  let aluno = buscarAlunos(alunos, nomeBuscado);
  if (aluno === null) {
    return null;
  } else {
    aluno.nota = revalidarResposta(novaNota);
    console.log(`Nota do aluno ${aluno.nome} foi alterada!`);
    return aluno;
  }
}

module.exports = { cadastrarAlunos, alterarNota, buscarAlunos };
