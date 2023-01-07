const questions = require("./lib/questions");
const employees = require("./lib/employee");

const inquirer = require("inquirer");



const promptManagerGate = () => {
  return inquirer.prompt(questions.managerGate)
  .then(managerVal => {
    let manager = new employees.Manager(managerVal.managerName, managerVal.managerEmployeeId, managerVal.managerEmployeeEmail, managerVal.managerOfficeNumber)

    let name = manager.getName();
    let id = manager.getId();
    let email = manager.getEmail();
    let officeNumber = manager.getOfficeNumber();
    let title = manager.getRole();

    let htmlEmployeeContent = new employees.HTML(name, title, id, email, officeNumber);
    htmlEmployeeContent.generateEmployeeHtml();
    // console.log(htmlEmployeeContent);

    if (managerVal) {
      return promptAddTeamQuestion()
    }
  })
}

const promptAddEngineer = () => {
  return inquirer.prompt(questions.engineerQuestions)
  .then(engineerVal => {
    
    let engineer = new employees.Engineer(engineerVal.engineerName, engineerVal.engineerEmployeeId, engineerVal.engineerEmployeeEmail, engineerVal.engineerGitHub)

    let name = engineer.getName();
    let id = engineer.getId();
    let email = engineer.getEmail();
    let gitHub = engineer.getGitHub();
    let title = engineer.getRole();

    let htmlEmployeeContent = new employees.HTML(name, title, id, email, gitHub);
    htmlEmployeeContent.generateEmployeeHtml();

    if (engineerVal) {
      return promptAddTeamQuestion()
    }
  }) 
}

const promptAddIntern = () => {
  return inquirer.prompt(questions.internQuestions)
  .then(internVal => {
    let intern = new employees.Intern(internVal.internName, internVal.internEmployeeId, internVal.internEmployeeEmail, internVal.internSchool)

    let name = intern.getName();
    let id = intern.getId();
    let email = intern.getEmail();
    let school = intern.getSchool();
    let title = intern.getRole();

    let htmlEmployeeContent = new employees.HTML(name, title, id, email, school);
    htmlEmployeeContent.generateEmployeeHtml();

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