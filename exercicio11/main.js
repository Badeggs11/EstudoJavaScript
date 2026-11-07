const { cadastrarAlunos, alterarNota, buscarAlunos } = require("./alunos");
const { revalidarOpcao } = require("./validacao");
const prompt = require("prompt-sync")();

console.log(" 1 - Cadastrar alunos ");
console.log(" 2 - Buscar aluno ");
console.log(" 3 - Alterar nota ");
console.log(" 4 - Listar alunos ");
console.log(" 0 - Sair ");

let turma = [];
let encerrar = false;
while (encerrar === false) {
  let opcao = Number(prompt("Digite a opção: "));

  switch (opcao) {
    case 0:
      console.log(" Até a próxima! ");
      encerrar = true;
      break;

    case 1:
      console.log(" 1 - Cadastro de alunos ");
      let qtdAlunos = revalidarOpcao(
        prompt("Digite a quantidade de alunos a cadastrar: "),
      );
      turma = cadastrarAlunos(qtdAlunos, turma);
      console.log("Turma cadastrada: ", turma);
      break;

    case 2:
      console.log(" 2 - Busca Aluno ");
      let nomeAluno = prompt("Digite o nome do aluno: ");
      let alunoEncontrado = buscarAlunos(turma, nomeAluno);
      console.log("Aluno encontrado: ", alunoEncontrado);
      break;

    case 3:
      console.log(" 3 - Alterar nota");
      let alunoAlterar = prompt(" Digite o nome do aluno pra alterar a nota: ");
      if (buscarAlunos(turma, alunoAlterar) === null) {
        console.log("Aluno não encontrado");
        break;
      } else {
        let novaNota = prompt("Digite a nova nota: ");
        let resultado = alterarNota(turma, alunoAlterar, novaNota);
        console.log("Nota do aluno alterado: ", resultado);
        break;
      }

    case 4:
      console.log(" Listar alunos ");
      console.log(turma);
      break;

    default:
      console.log("opção invalida");
  }
}
