const minimist = require('minimist'); // chama o modulo minimist

const args = minimist(process.argv.slice(2)); // pega os argumentos do terminal

console.log(args);

const nome = args['nome'];

const profissao = args['profissao'];

console.log("Seu nome é: " + nome + " e a profissão é: " + profissao);