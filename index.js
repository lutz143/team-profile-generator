const questions = require("./lib/questions");
const employees = require("./lib/employee");
// console.log(questions.internQuestions);

const inquirer = require("inquirer");



const promptManagerGate = () => {
  return inquirer.prompt(questions.managerGate)
  .then(managerVal => {
    let manager = new employees.Manager(managerVal.managerName, managerVal.managerEmployeeId, managerVal.managerEmployeeEmail, managerVal.managerOfficeNumber)
    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();
    if (managerVal) {      
      return promptAddTeamQuestion()
    }
  })
}

const promptAddEngineer = () => {
  return inquirer.prompt(questions.engineerQuestions)
  .then(engineerVal => {
    let engineer = new employees.Engineer(engineerVal.engineerName, engineerVal.engineerEmployeeId, engineerVal.engineerEmployeeEmail, engineerVal.engineerGitHub)
    engineer.getName();
    engineer.getId();
    engineer.getEmail();
    engineer.getGitHub();
    engineer.getRole();
    if (engineerVal) {
      return promptAddTeamQuestion()
    }
  }) 
}

const promptAddIntern = () => {
  return inquirer.prompt(questions.internQuestions)
  .then(internVal => {
    let intern = new employees.Intern(internVal.internName, internVal.internEmployeeId, internVal.internEmployeeEmail, internVal.internSchool)
    intern.getName();
    intern.getId();
    intern.getEmail();
    intern.getSchool();
    intern.getRole();
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
  
}

init();


// logs process complete and exits the node app
const quit = () => {
  console.log("\nProcess Complete.");
  process.exit(0);
}