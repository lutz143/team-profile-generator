// The application must have these classes: Employee, Manager, Engineer, and Intern.

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

// The application must have these classes: Employee, Manager, Engineer, and Intern.

/* 
employee is a parent class with the following properties and methods:
  1. name
  2. id
  3. email
  4. getName()
  5. getId()
  6. getEmail()
  7. getRole() [Returns Employee]

the other 3 classes will extend the employee class

manager: in addition to employee props & methods
  1. officeNumber
  2. getRole() [Overridden to return Manager]

engineer: in addition to employee props & methods
  1. github
  2. getGitHub()
  3. getRole() [Overriden to return Engineer]

intern: in addition to employee props & methods
  1. school
  2. getSchool()
  3. getRole() [Overridden to return Intern]
*/

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(`Employee\'s name is ${this.name}`)
  }
}

const josh = new Employee ('Josh', 1, 'test@yahoo.com');