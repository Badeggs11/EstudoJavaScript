const prompt = require("prompt-sync")();

function validarNota(nota) {
  if (typeof nota === "string" && nota.trim() === "") {
    console.log("não foi digitado uma nota");
    return false;
  } else if (typeof Number(nota) === NaN) {
    console.log(" nota em formato de string ");
    return false;
  } else {
    let notas = Number(nota);
    return Number.isFinite(notas) && notas >= 0 && notas <= 10;
  }
}

function revalidarResposta(nota) {
  let entrada = nota;
  while (true) {
    if (validarNota(entrada)) {
      return entrada;
    }

    console.log("Nota não valida");
    entrada = prompt("Digite uma nova nota valida: ");
  }
}

module.exports = { validarNota, revalidarResposta };
