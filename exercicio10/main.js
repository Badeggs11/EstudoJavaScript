//const { validarNota, revalidarResposta } = require("./validacao");
const { cadastrarAlunos } = require("./alunos");

let turmaA = cadastrarAlunos(2);

console.log(turmaA);
