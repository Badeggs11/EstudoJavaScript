function calcularPrecoFinal(valor) {
  let precoFinal = 0;
  if (valor < 100) {
    precoFinal = valor;
  } else if (valor >= 100 && valor < 200) {
    precoFinal = valor - valor * 0.05;
  } else {
    precoFinal = valor - valor * 0.1;
  }
  console.log(" Valor final = ", precoFinal);

  return precoFinal;
}

let compra1 = 80;
let compra2 = 150;
let compra3 = 250;

calcularPrecoFinal(compra1);
calcularPrecoFinal(compra2);
calcularPrecoFinal(compra3);
