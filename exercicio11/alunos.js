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
};
