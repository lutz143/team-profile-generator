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

let title = 'Employee';

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;    
  }

  getName() {
    console.log(`Employee\'s name is ${this.name}`);
  }
  
  getId() {
    console.log(`Employee\'s id is ${this.id}`);
  }

  getEmail() {
    console.log(`Employee\'s email is ${this.email}`);
  }

  getRole() {    
    console.log(title);
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    title = 'Manager';
  }
  getOfficeNumber() {
    console.log(`Manager\'s office number is ${this.officeNumber}`);
  }
}

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    title = 'Engineer';
  }
  getGitHub() {
    console.log(`Engineer\'s GitHub account is ${this.gitHub}`);
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    title = 'Intern';
  }
  getSchool() {
    console.log(`Student\'s school is ${this.school}`);
  }
}

const josh = new Employee ('Josh', 1, 'test@yahoo.com');
josh.getName();
josh.getId();
josh.getEmail();
josh.getRole();

const manager = new Manager ('Josh2', 2, 'manager@yahoo.com', 3010);
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();

const engineer = new Engineer ('Josh3', 3, 'engineer@yahoo.com', 'lutz143');
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGitHub();
engineer.getRole();

const intern = new Intern ('Josh4', 4, 'intern@yahoo.com', 'THE Ohio State');
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();