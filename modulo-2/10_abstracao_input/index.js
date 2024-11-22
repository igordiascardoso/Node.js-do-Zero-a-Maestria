const inquirer = require('inquirer');

inquirer.prompt([
  {
    name: 'nome',
    message: 'Qual é o seu nome?',
  },
  {
    name: 'idade',
    message: 'Qual é a sua idade?',
  },
])
.then((answers) => {
  console.log(answers); // Exibe as respostas fornecidas pelo usuário
})
.catch((err) => console.log(err)); // Exibe qualquer erro
