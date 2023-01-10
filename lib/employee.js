// require the template js to grab the beginning and ending html variables
const htmlGenerate = require("./template");

let employeeHtml = "";
let title = "";

/* create HTML class using template literals to generate the 
index.html employee generator based on user inputs
*/
class HTML {
  constructor(name, title, id, email, officeNumber, gitHub, school) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber
    this.gitHub = gitHub
    this.school = school
  }
  generateEmployeeHtml () {
    const html =
      `
      <div class="col-md-3">
        <div class="card-sub"> <img class="card-img-top img-fluid" id="emp-prof-pic" src="./dist/images/Josh Lutz_289635.jpg" alt="Card image cap">
          <div class="card-block">
            <div class="card-header">                
              ${this.name}
              ${this.title}            
              <div class="employee-details">
                ${this.id}
                ${this.email}
                ${this.officeNumber?`${this.officeNumber}`:""}
                ${this.gitHub?`${this.gitHub}`:""}
                ${this.school?`${this.school}`:""}
              </div>
            </div>
          </div>
        </div>
      </div>`;
    
    employeeHtml = html;
    return employeeHtml
  }
}

/* create Employee class to establish and return html elements 
that are common across employees */
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    title = 'Employee';
  }
  getName() {   
    const htmlEmployeeName = `<h4 class="employee-name">${this.name}</h4>`;
    return htmlEmployeeName
  }  
  getId() {
    const htmlEmployeeId = `<div>ID: ${this.id}</div>`
    return htmlEmployeeId
  }
  getEmail() {
    const htmlEmployeeEmail = `<div>Email: <a href="mailto:${this.email}">${this.email}</a></div>`
    return htmlEmployeeEmail
  }
  getRole() {
    const htmlEmployeeRole = `<h6 class="employee-title">${title}</h4>`;
    return htmlEmployeeRole
  }
}

/* extend Employee class to establish and return html elements 
that are unique to a manager position */
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    title = 'Manager';
  }
  getOfficeNumber() {
    const htmlManagerOfficeNumber = `<div>Office Number: ${this.officeNumber}</div>`;
    return htmlManagerOfficeNumber
  }
}

/* extend Employee class to establish and return html elements 
that are unique to an engineer position */
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    title = 'Engineer';
  }
  getGitHub() {
    const htmlEngineerGitHub = `<div>GitHub Account: <a href="https://github.com/${this.gitHub}" target="_blank">${this.gitHub}</a></div>`;
    return htmlEngineerGitHub
  }
}

/* extend Employee class to establish and return html elements 
that are unique to an intern position */
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    title = 'Intern';
  }
  getSchool() {
    const htmlInternSchool = `<div>Intern School: ${this.school}</div>`;
    return htmlInternSchool
  }
}

// export the created classes
module.exports.Employee = Employee;
module.exports.Engineer = Engineer;
module.exports.HTML = HTML;
module.exports.Intern = Intern;
module.exports.Manager = Manager;