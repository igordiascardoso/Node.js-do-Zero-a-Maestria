const fs = require('fs'); // file system - nome do módulo = nome da variáve é a melhor abordagem

fs.readFile('arquivo.txt', 'utf-8', (err, data) => { // data é o arquivo
   
    if (err){
        console.log(err)
        
    }

    console.log(data)
});