const prompt = require("prompt-sync")();

function validarNota(nota) {
  let novaNota = nota;
  if (typeof novaNota === "string" && novaNota.trim() === "") {
    console.log("Você não digitou uma nota.");
    return false;
  } else {
    let numero = Number(novaNota);
    if (Number.isFinite(numero)) {
      if (numero >= 0) {
        if (numero <= 10) {
          if (numero != "") {
            console.log(" Numero validado! ");
            return true;
          } else {
            console.log(" nao houve entrada ");
            return false;
          }
        } else {
          console.log("Nota eh maior que dez : ");
          return false;
        }
      } else {
        console.log("Nota eh menor que zero : ");
        return false;
      }
    } else {
      console.log("Nota nao eh um numero finito");
      return false;
    }
  }
}
function revalidarResposta(nota) {
  let novaResposta = nota;
  while (!validarNota(novaResposta)) {
    novaResposta = prompt(" Digite um novo valor valido para a nota: ");
  }
  return novaResposta;
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
