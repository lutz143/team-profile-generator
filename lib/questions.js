// array of questions to prompt user for manager information
const managerGate = [
  {
  name: 'managerName',
  message: 'Enter the team Manager\'s name:',
  type: 'input',
  },
  {
  name: 'managerEmployeeId',
  message: 'Enter Manager employee ID:',
  type: 'number',
  },
  {
  name: 'managerEmployeeEmail',
  message: 'Enter Manager employee email:',
  type: 'input',
  },
  {
  name: 'managerOfficeNumber',
  message: 'Enter Manager office number:',
  type: 'number',
  },
];

// question user if they would like to continue adding a teammate or not
const addTeamQuestion = [
  {
    name: 'addTeammateOption',
    message: 'Please select option to proceed:',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', 'Finished'],
  },
]

// array of questions to prompt user for engineer information
const engineerQuestions = [
  {
    name: 'engineerName',
    message: 'Enter the Engineer\'s name:',
    type: 'input',
  },
  {
    name: 'engineerEmployeeId',
    message: 'Enter Engineer\'s employee ID:',
    type: 'number',
    },
    {
    name: 'engineerEmployeeEmail',
    message: 'Enter Engineer\'s employee email:',
    type: 'input',
    },
    {
    name: 'engineerGitHub',
    message: 'Enter Engineer\'s GitHub username:',
    type: 'input',
    },
]

// array of questions to prompt user for intern information
const internQuestions = [
  {
    name: 'internName',
    message: 'Enter the Intern\'s name:',
    type: 'input',
  },
  {
    name: 'internEmployeeId',
    message: 'Enter Intern\'s employee ID:',
    type: 'number',
    },
    {
    name: 'internEmployeeEmail',
    message: 'Enter Intern\'s employee email:',
    type: 'input',
    },
    {
    name: 'internSchool',
    message: 'Enter Intern\'s School:',
    type: 'input',
    },
]

// export the questions
module.exports.managerGate = managerGate;
module.exports.addTeamQuestion = addTeamQuestion;
module.exports.engineerQuestions = engineerQuestions;
module.exports.internQuestions = internQuestions;