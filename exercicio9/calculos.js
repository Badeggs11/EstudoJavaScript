let n1 = 13;
let n2 = 106;
let n3 = 33;

function validarNumero(entrada) {
  if (typeof entrada === "string" && entrada.trim() === "") {
    console.log("entrada vazia");
    return false;
  } else if (typeof entrada === "string") {
    console.log("entrada não é um numero");
    return false;
  } else {
    let numero = Number(entrada);
    return Number.isFinite(numero);
  }
}

function calcularMedia(n1, n2, n3) {
  if (validarNumero(n1) && validarNumero(n2) && validarNumero(n3)) {
    let media = (n1 + n2 + n3) / 3;
    return media;
  } else {
    console.log(" numero nao valido");
    return null;
  }
}

module.exports = { calcularMedia };
