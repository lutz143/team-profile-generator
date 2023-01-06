// array of questions with detailed instructions to the user in order to prompt for inputs
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
  {
  name: 'addTeammateOption',
  message: 'Please select option to proceed:',
  type: 'list',
  choices: ['Add Engineer', 'Add Intern', 'I\'m Finished'],
  },
];

module.exports = managerGate;