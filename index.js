const questions = require("./lib/questions");
console.log(questions.internQuestions);


const inquirer = require("inquirer");


const generateManagerGate = ({managerName, managerEmployeeId, managerEmployeeEmail, addTeammateOption}) =>
`The manager is ${managerName} and their employee ID is ${managerEmployeeId} with an email of ${managerEmployeeEmail}.`;

const promptUser = () => {
  return inquirer.prompt(questions.managerGate);
}

const init = () => {
  promptUser()
    // .then((answers) => writeFile('index.html', generateHtml(answers)))
    .then((answers) => console.log(generateManagerGate(answers)))
    .catch((err) => console.error(err));
}

init();