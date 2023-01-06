const managerGate = require("./lib/questions");

// console.log(managerGate);

/*
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
*/

const inquirer = require("inquirer");

const generateManagerGate = ({managerName, managerEmployeeId, managerEmployeeEmail, addTeammateOption}) =>
`The manager is ${managerName} and their employee ID is ${managerEmployeeId} with an email of ${managerEmployeeEmail}.\nThe add teammate option selected was ${addTeammateOption}`;

const promptUser = () => {
  return inquirer.prompt(managerGate);
}

const init = () => {
  promptUser()
    // .then((answers) => writeFile('index.html', generateHtml(answers)))
    .then((answers) => console.log(generateManagerGate(answers)))
    .catch((err) => console.error(err));
}

init();