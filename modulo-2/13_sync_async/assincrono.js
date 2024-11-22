const fs = require("fs")

console.log("Início")

fs.writeFile("arquivo.txt", "Testando OI!", () => {
    setTimeout(() => {
        console.log("Arquivo escrito com sucesso!")
    }, 2000)
    
})

console.log("Fim")  