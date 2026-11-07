const prompt = require("prompt-sync")();

function validarNota(nota) {
  if (typeof nota === "string" && nota.trim() === "") {
    console.log("não foi digitado uma nota");
    return false;
  } else {
    let notas = Number(nota);
    return Number.isFinite(notas) && notas >= 0 && notas <= 10;
  }
}

function validarOpcao(opcao) {
  if (typeof opcao === "string" && opcao.trim() === "") {
    console.log("não foi digitado uma opção");
    return false;
  } else {
    let opcoes = Number(opcao);
    return Number.isInteger(opcoes) && opcoes > 0;
  }
}

function revalidarResposta(nota) {
  let entrada = nota;
  while (true) {
    if (validarNota(entrada)) {
      return Number(entrada);
    }

    console.log("Nota não valida");
    entrada = prompt("Digite uma nova nota valida: ");
  }
}

function revalidarOpcao(opcao) {
  let entrada = opcao;
  while (true) {
    if (validarOpcao(entrada)) {
      return Number(entrada);
    }

    console.log("Opção não valida");
    entrada = prompt("Digite uma opção valida: ");
  }
}

module.exports = {
  validarNota,
  revalidarResposta,
  validarOpcao,
  revalidarOpcao,
};
