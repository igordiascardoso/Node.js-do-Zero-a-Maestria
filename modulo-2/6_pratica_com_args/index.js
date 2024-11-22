const minimist = require('minimist'); // chama o modulo minimist

//externo
const args = minimist(process.argv.slice(2)); // pega os argumentos do terminal


//interno
const soma = require('./soma').soma;



const a = parseInt(args['a']) 
const b = parseInt(args['b'])

soma(a,b)