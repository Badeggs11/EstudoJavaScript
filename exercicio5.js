const prompt = require("prompt-sync")();

let notas = [];

for (let i = 0; i < 5; i++) {
  notas.push(Number(prompt("Digite a nota: ")));
}

function media(n) {
  let soma = 0;
  let i = 0;
  while (i < n.length) {
    soma += n[i];
    i += 1;
  }
  let m = soma / n.length;
  console.log("a media eh: ", m);
  return m;
}

function aprovados(n) {
  let qtdAprovados = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= 7) {
      console.log("Aluno ", i + 1, "aprovado com nota ", n[i]);
      qtdAprovados = qtdAprovados + 1;
    }
  }
  console.log("Numero de alunos aprovados =  ", qtdAprovados);
}

media(notas);
aprovados(notas);
