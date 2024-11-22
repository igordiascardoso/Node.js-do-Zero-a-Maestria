
const fs = require('fs');

// Sincrono
console.log('Início Síncrono');
const dados = fs.readFileSync('./13_sync_async/arquivo.txt');
console.log(dados.toString());
console.log('Fim Síncrono');

// Assincrono
console.log('Início Assíncrono');
fs.readFile('./13_sync_async/arquivo.txt', (err, dados) => {
    if (err) throw err;
    console.log(dados.toString());
});
console.log('Fim Assíncrono');
