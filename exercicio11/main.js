const {
  cadastrarAlunos,
  alterarNota,
  buscarAlunos,
  removerAluno,
  relatorioTurma,
  resumoAprovados,
  menu,
} = require("./alunos");
const { revalidarOpcao } = require("./validacao");
const { salvarTurma, carregarTurma } = require("./persistencia");
const prompt = require("prompt-sync")();

let turma;
let alteracoesPendentes = false;
let salvou = true;

try {
  turma = carregarTurma("./alunos.json");
} catch (erro) {
  console.log("Falha no carregamento da turma.");
  console.log(erro.message);
  process.exit(1);
}
let encerrar = false;
while (encerrar === false) {
  menu();
  let opcao = Number(prompt("Digite a opção: "));

  switch (opcao) {
    case 0:
      if (alteracoesPendentes === true) {
        console.log("Existem alterações não salvas!");
        break;
      }
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
      salvou = salvarTurma(turma);
      alteracoesPendentes = !salvou;

      if (salvou) {
        console.log("Turma salva");
      }

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
        salvou = salvarTurma(turma);
        alteracoesPendentes = !salvou;

        if (salvou) {
          console.log("Turma salva");
        }
        break;
      }

    case 4:
      console.log(" Listar alunos ");
      console.log(turma);
      break;

    case 5:
      console.log(" Remover aluno ");
      let nomeRemover = prompt("Digite o nome do aluno que quer remover: ");
      let alunoRemovido = removerAluno(turma, nomeRemover);

      if (alunoRemovido) {
        salvou = salvarTurma(turma);
        alteracoesPendentes = !salvou;

        if (salvou) {
          console.log("Turma salva");
        }
        console.log(`aluno ${nomeRemover} removido`);
      } else {
        console.log("aluno não existente na lista");
      }
      break;
    case 6:
      console.log(" Relatório da Turma ");
      let relatorio = relatorioTurma(turma);
      if (relatorio === null) {
        break;
      } else {
        console.log("Quantidade total de alunos: ", relatorio.quantidadeAlunos);
        console.log("Media geral das notas: ", relatorio.mediaT);
        console.log("Maior nota da turma: ", relatorio.notaMaior);
        console.log("Menor nota da turma: ", relatorio.notaMenor);
        console.log(
          "Quantidade de aprovados e reprovados: ",
          relatorio.aprovadosEreprovados,
        );
        break;
      }
    case 7:
      console.log(" Resumo dos Aprovados ");
      let resumo = resumoAprovados(turma);
      console.log(resumo);
      break;

    case 8:
      console.log(" Gravando arquivo ");
      salvou = salvarTurma(turma);
      alteracoesPendentes = !salvou;

      if (salvou) {
        console.log("Turma salva");
      }
      break;

    case 9:
      console.log(" Lendo arquivo ");
      if (alteracoesPendentes) {
        console.log("Há salvamentos pendentes");
        break;
      }
      try {
        let caminho = "./alunos.json";
        turma = carregarTurma(caminho);
      } catch (erro) {
        console.log(erro.message);
      }

      console.log(turma);
      break;

    default:
      console.log("opção invalida");
      break;
  }
}
