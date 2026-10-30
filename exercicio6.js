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

function mediaTurma(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota;
  }
  let media = soma / alunos.length;

  return media;
}

function listarAprovados(alunos) {
  let i = 0;
  let aprovados = [];
  while (i < alunos.length) {
    if (alunos[i].nota >= 7) {
      aprovados.push(alunos[i]);
    }
    i += 1;
  }
  return aprovados;
}

let turma = cadastrarAlunos(2);

console.log("Os alunos da turma são:", turma);
let mediaAlunos = mediaTurma(turma);
console.log(" A media da turma: ", mediaAlunos);
let aprov = listarAprovados(turma);
console.log("Os alunos aprovados: ", aprov);
