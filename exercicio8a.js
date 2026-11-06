const prompt = require("prompt-sync")();

function validarNota(entrada) {
  if (typeof entrada === "string" && entrada.trim() === "") {
    console.log("Você não digitou uma nota.");
    return false;
  }

  let nota = Number(entrada);

  return Number.isFinite(nota) && nota >= 0 && nota <= 10;
}
console.log(validarNota(-8));
console.log(validarNota(8));
console.log(validarNota("bc"));
console.log(validarNota(""));

function revalidarResposta(entrada) {
  while (true) {
    if (validarNota(entrada)) {
      return Number(entrada);
    }

    console.log("Nota inválida! Digite um número entre 0 e 10.");

    entrada = prompt("Digite uma nova nota: ");
  }
}

function cadastrarAlunos(numeroDeAlunos) {
  let alunos = [];
  for (let i = 0; i < numeroDeAlunos; i++) {
    alunos.push({
      nome: prompt(`Digite o nome do aluno ${i + 1}: `),
      nota: revalidarResposta(prompt(`Digite nota do aluno ${i + 1}: `)),
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
    nomeBuscado.nota = revalidarResposta(novaNota);
    console.log(" Nota alterada!");
    return nomeBuscado;
  }
  console.log(" Aluno não encontrado!");
  return null;
}

const turmaB = cadastrarAlunos(1);
const alunoEncontrado = buscarAlunos(turmaB, "Rui");
console.log(alunoEncontrado);
const notaAlterada = alterarNota(turmaB, "Rui", 10);
console.log(notaAlterada);
