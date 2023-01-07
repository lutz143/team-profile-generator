let title = "";

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    title = 'Employee';
  }
  getName() {
    // console.log(`Employee\'s name is ${this.name}`);    
    const htmlEmployeeName = `<h4 class="employee-name">${this.name}</h4>`;
    console.log(htmlEmployeeName);
  }  
  getId() {
    const htmlEmployeeId = `<div>ID: ${this.id}</div>`
    console.log(htmlEmployeeId);
  }
  getEmail() {
    const htmlEmployeeEmail = `<div>Email: ${this.email}</div>`
    console.log(htmlEmployeeEmail);
  }
  getRole() {
    const htmlEmployeeRole = `<h6 class="employee-title">${title}</h4>`;
    console.log(htmlEmployeeRole);
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    title = 'Manager';
  }
  getOfficeNumber() {
    const htmlManagerOfficeNumber = `<div>Office Number: ${this.officeNumber}</div>`;
    console.log(htmlManagerOfficeNumber);
  }
}

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    title = 'Engineer';
  }
  getGitHub() {
    const htmlEngineerGitHub = `<div>GitHub Account: ${this.gitHub}</div>`;
    console.log(htmlEngineerGitHub);
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    title = 'Intern';
  }
  getSchool() {
    const htmlInternSchool = `<div>Intern School: ${this.school}</div>`;
    console.log(htmlInternSchool);
  }
}

module.exports.Employee = Employee;
module.exports.Manager = Manager;
module.exports.Engineer = Engineer;
module.exports.Intern = Intern;