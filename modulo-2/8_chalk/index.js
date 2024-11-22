const chalk = require('chalk');

const nota = 4 ; 


if (nota >= 7) {
    console.log(chalk.green('Parabéns, você tirou nota ' + nota + ' !'));
} else {
    console.log(chalk.bgRed('Você precisa melhorar, sua nota foi ' + nota + ' !'));
}