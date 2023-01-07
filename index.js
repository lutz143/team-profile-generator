const questions = require("./lib/questions");
// console.log(questions.internQuestions);


const inquirer = require("inquirer");


const generateManagerGate = ({managerName, managerEmployeeId, managerEmployeeEmail}) =>
`The manager is ${managerName} and their employee ID is ${managerEmployeeId} with an email of ${managerEmployeeEmail}.`;


class Team {
  constructor() {
    this.teammates = 0;
  }
}

const promptManagerGate = () => {
  return inquirer.prompt(questions.managerGate)
  .then(managerVal => {
    if (managerVal) {
      return promptAddTeamQuestion()
    }
  })
}

const promptAddEngineer = () => {
  return inquirer.prompt(questions.engineerQuestions)
  .then(engineerVal => {
    if (engineerVal) {
      return promptAddTeamQuestion()
    }
  }) 
}

const promptAddIntern = () => {
  return inquirer.prompt(questions.internQuestions)
  .then(internVal => {
    if (internVal) {
      return promptAddTeamQuestion()
    }
  })  
}

const promptAddTeamQuestion = () => {
  return inquirer.prompt(questions.addTeamQuestion)
  .then(addVal => {
    if (addVal.addTeammateOption === 'Finished') {
      quit();
    } else if (addVal.addTeammateOption === 'Add Engineer') {
      return promptAddEngineer()
    } else {
      return promptAddIntern()
    }
  })
}

const init = () => {
  promptManagerGate()
  // promptAddTeamQuestion()
}

init();

// const init = () => {
//   promptManagerGate()
//     .then(val => {
//       console.log(val);
//       if (val.addTeammateOption === 'Finished') {
//         quit();
//       } else {
//         promptAddTeamQuestion()
//           .then(engVal => {
//             console.log(engVal);
//             if (engVal.addTeammateOption === 'Finished') {
//               quit();
//             }
//           })
//       } 
//     });
    // .then((answers) => console.log(generateManagerGate(answers)))
    // .catch((err) => console.error(err));
// }



// logs process complete and exits the node app
const quit = () => {
  console.log("\nProcess Complete.");
  process.exit(0);
}