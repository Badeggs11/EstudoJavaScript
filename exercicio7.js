const prompt = require("prompt-sync")();

function cadastrarAlunos(numeroDeAlunos) {
  let alunos = [];
  for (let i = 0; i < numeroDeAlunos; i++) {
    alunos.push({
      nome: prompt(`Digite o nome do aluno ${i + 1}: `),
      nota: Number(prompt(` Digite a nota do aluno ${i + 1}: `)),
    });
  }
  return alunos;
}

function buscarAlunos(alunos, nomeBuscado) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome == nomeBuscado) {
      console.log("Aluno encontrado");
      return alunos[i];
    }
  }

  console.log("Aluno não encontrado");
  return null;
}

function alterarNota(alunos, nomeDoAluno, novaNota) {
  let nomeBuscado = buscarAlunos(alunos, nomeDoAluno);

  if (nomeBuscado != null) {
    nomeBuscado.nota = novaNota;
    console.log(" Nota alterada!");
    return nomeBuscado;
  }
  console.log(" Aluno não encontrado!");
  return null;
}

const turma_A = cadastrarAlunos(1);
const alunoEncontrado = buscarAlunos(turma_A, "Pablo");
console.log(alunoEncontrado);

const notaAlterada = alterarNota(turma_A, "Pablo", 10);
console.log(notaAlterada);
