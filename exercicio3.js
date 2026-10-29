function calcularDesconto(preco, percentual) {
  let desconto = preco * (percentual / 100);

  return desconto;
}
let p = 200;
let perc = 10;

let desconto = calcularDesconto(p, perc);

let precoFinal = p - desconto;

console.log(" O preço final é: ", precoFinal);
