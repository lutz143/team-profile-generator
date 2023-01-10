// require the js files to grab employee classes, html template, and prompt questions
const employees = require("./lib/employee");
const htmlGenerate = require("./lib/template");
const questions = require("./lib/questions");

// load fs and inquirer
const fs = require('fs');
const inquirer = require("inquirer");

// establish global variables to be house employee html content to be altered by user inputs
let engineerPageContent = [];
let internPageContent = [];
let managerPageContent = "";
let webpage = "";

/* creates a gate function that requires manager info prior to requesting if new teammates (engineer/intern)
should be added. prompts for manager info via inquirer and calls the HTML class to generate common 
employee html elements and extends Employee class to include manager's office number
*/
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
    managerPageContent = htmlEmployeeContent.generateEmployeeHtml()

    if (managerVal) {
      return promptAddTeamQuestion()
    }
  })
}

/* creates a function to prompt engineer employee info by extending employee class, generates HTML elements
to render engineer employee card
*/
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
    engineerPageContent.push(htmlEmployeeContent.generateEmployeeHtml());

    if (engineerVal) {
      return promptAddTeamQuestion()
    }
  }) 
}

/* creates a function to prompt intern employee info by extending employee class, generates HTML elements
to render intern employee card
*/
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
    internPageContent.push(htmlEmployeeContent.generateEmployeeHtml());

    if (internVal) {
      return promptAddTeamQuestion()
    }
  })  
}

/* create a function to prompt user if another team member should be added or if they are finished. calls
the quit function to build the final HTML output
*/
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

/* initialization function that calls the promptManagerGate function to prompt manager questions and 
request if a teammember should be added
*/
const init = () => {
  promptManagerGate()  
}

init();


// logs process complete and exit the node app, writes the final HTML file
const quit = () => {
  webpage = htmlGenerate.beginningHTML + managerPageContent + engineerPageContent + internPageContent + htmlGenerate.endingHTML;
  console.log("\nProcess Complete.");
  fs.writeFile('index.html', webpage, function(err) {
    if(err) {
      return console.log(err);
      process.exit(0);
    }
    console.log('Process saved successfully');
    process.exit(0);
  });
}