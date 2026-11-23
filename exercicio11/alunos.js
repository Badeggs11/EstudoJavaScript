const { revalidarResposta } = require("./validacao");
const prompt = require("prompt-sync")();
const fs = require("node:fs");

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

function removerAluno(alunos, nomeBuscado) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === nomeBuscado) {
      alunos.splice(i, 1);
      console.log(alunos);
      return true;
    }
  }
  return false;
}

function mediaTurma(alunos) {
  if (alunos.length === 0) {
    console.log("Não há alunos cadastrados");
  } else {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
      soma = soma + alunos[i].nota;
    }
    let media = soma / alunos.length;
    return media;
  }
}

function maiorNota(alunos) {
  if (alunos.length === 0) {
    console.log("Não há alunos cadastrados");
  } else {
    let maiorNota = alunos[0].nota;
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nota > maiorNota) {
        maiorNota = alunos[i].nota;
      }
    }
    return maiorNota;
  }
}

function menorNota(alunos) {
  if (alunos.length === 0) {
    console.log("Não há alunos cadastrados");
  } else {
    let menorNota = alunos[0].nota;
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nota < menorNota) {
        menorNota = alunos[i].nota;
      }
    }
    return menorNota;
  }
}
function aprovadosReprovados(alunos) {
  let aprovados = 0;
  let reprovados = 0;

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 7) {
      aprovados += 1;
    } else {
      reprovados += 1;
    }
  }
  return {
    aprovados: aprovados,
    reprovados: reprovados,
  };
}

function relatorioTurma(alunos) {
  if (alunos.length === 0) {
    console.log("Não há alunos cadastrados");
    return null;
  } else {
    let qtdAlunos = alunos.length;
    let media = mediaTurma(alunos);
    let maNota = maiorNota(alunos);
    let meNota = menorNota(alunos);
    let qtdAprovadosReprovados = aprovadosReprovados(alunos);
    return {
      quantidadeAlunos: qtdAlunos,
      mediaT: media,
      notaMaior: maNota,
      notaMenor: meNota,
      aprovadosEreprovados: qtdAprovadosReprovados,
    };
  }
}
function buscarAlunos2(alunos, nomeBuscado) {
  let aluno = alunos.find((elemento) => elemento.nome === nomeBuscado);
  if (aluno === undefined) {
    return null;
  } else {
    return aluno;
  }
}

function listarAprovados(alunos) {
  aprovados = alunos.filter((aluno) => aluno.nota >= 7);
  return aprovados;
}

function listarNomes(alunos) {
  let nomes = alunos.map((aluno) => aluno.nome);
  return nomes;
}

function situacaoAlunos(alunos) {
  let condicao = alunos.map((aluno) => {
    let estado = "";
    if (aluno.nota >= 7) {
      estado = "Aprovado";
    } else {
      estado = "Reprovado";
    }

    return {
      nome: aluno.nome,
      situacao: estado,
    };
  });
  return condicao;
}

function nomeDosAprovados(alunos) {
  let nomes = alunos
    .filter((aluno) => aluno.nota >= 7)
    .map((aluno) => aluno.nome >= 7);
  return nomes;
}

function nomeDosAprovados2(alunos) {
  let aprovados = alunos.filter((aluno) => aluno.nota >= 7);
  let nomes = aprovados.map((aluno) => aluno.nome);
  return nomes;
}

function somarNotas(alunos) {
  let soma = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota;
  }, 0);
  return soma;
}
function mediaTurma2(alunos) {
  if (alunos.length === 0) {
    console.log("A turma não tem alunos cadastrados");
    return null;
  } else {
    let soma = alunos.reduce((acc, aluno) => {
      return acc + aluno.nota;
    }, 0);
    let media = soma / alunos.length;
    return media;
  }
}

function contarAprovados(alunos) {
  let aprovados = alunos.reduce((acumulador, aluno) => {
    if (aluno.nota >= 7) {
      return acumulador + 1;
    }
    return acumulador;
  }, 0);
  return aprovados;
}

function contarAprovados2(alunos) {
  let aprovados = alunos.reduce((acumulador, aluno) => {
    return aluno.nota >= 7 ? acumulador + 1 : acumulador;
  }, 0);
  return aprovados;
}

function contarAprovadosReprovados(alunos) {
  let aprovReprov = alunos.reduce(
    (acumulador, aluno) => {
      if (aluno.nota >= 7) {
        acumulador.aprovados += 1;

        return acumulador;
      }
      acumulador.reprovados += 1;

      return acumulador;
    },
    {
      aprovados: 0,
      reprovados: 0,
    },
  );
  return aprovReprov;
}

function contarAprovadosReprovados2(alunos) {
  let aprovReprov = alunos.reduce(
    (acumulador, aluno) => {
      aluno.nota >= 7
        ? (acumulador.aprovados += 1)
        : (acumulador.reprovados += 1);
      return acumulador;
    },
    {
      aprovados: 0,
      reprovados: 0,
    },
  );
  return aprovReprov;
}

function mediaAprovados(alunos) {
  let aprovados = alunos.filter((aluno) => aluno.nota >= 7);
  if (aprovados.length === 0) {
    console.log("não houve alunos aprovados");
    return null;
  }
  let somaAprovados = aprovados.reduce((acumulador, aluno) => {
    acumulador += aluno.nota;
    return acumulador;
  }, 0);
  return somaAprovados / aprovados.length;
}

function resumoAprovados(alunos) {
  let resumo = {
    quantidade: contarAprovados(alunos),
    nomes: nomeDosAprovados2(alunos),
    media: mediaAprovados(alunos),
  };
  return resumo;
}

function menu() {
  console.log(" 1 - Cadastrar alunos ");
  console.log(" 2 - Buscar aluno ");
  console.log(" 3 - Alterar nota ");
  console.log(" 4 - Listar alunos ");
  console.log(" 5 - Remover aluno ");
  console.log(" 6 - Relatório da turma ");
  console.log(" 7 - Resumo dos Aprovados ");
  console.log(" 8 - Gravar em arquivo ");
  console.log(" 9 - Ler arquivo ");
  console.log(" 0 - Sair ");
}

module.exports = {
  cadastrarAlunos,
  alterarNota,
  buscarAlunos,
  removerAluno,
  relatorioTurma,
  buscarAlunos2,
  listarAprovados,
  listarNomes,
  situacaoAlunos,
  nomeDosAprovados,
  nomeDosAprovados2,
  somarNotas,
  mediaTurma2,
  contarAprovados,
  contarAprovados2,
  contarAprovadosReprovados,
  contarAprovadosReprovados2,
  mediaAprovados,
  resumoAprovados,
  menu,
};
