const employeeTest = require('../lib/employee');
const { internQuestions } = require('../lib/questions');

describe('Manager', () => {
  describe("getName", () => {
    it("returns an html element of header for employee name", () => {
      const employee = new employeeTest.Manager('Josh').getName()
      const expected = '<h4 class="employee-name">Josh</h4>'

      expect(employee).toEqual(expected);
    });
  });

  describe("getId", () => {
    it("returns an html element of div for employee id", () => {
      const id = new employeeTest.Manager('Josh', 1).getId()
      const expected = '<div>ID: 1</div>'

      expect(id).toEqual(expected);
    });
  });

  describe("getEmail", () => {
    it("returns an html element of div for employee Email", () => {
      const email = new employeeTest.Manager('Josh', 1, 'josh@fake.com').getEmail()
      const expected = '<div>Email: <a href="mailto:josh@fake.com">josh@fake.com</a></div>'

      expect(email).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("returns an html element of h6 for employee title", () => {
      const title = new employeeTest.Manager('Josh', 1, 'josh@fake.com').getRole()
      const expected = '<h6 class="employee-title">Manager</h4>'

      expect(title).toEqual(expected);
    });
  });

  describe("getOfficeNumber", () => {
    it("returns an html element of div for manager office number", () => {
      const office = new employeeTest.Manager('Josh', 1, 'josh@fake.com', 13).getOfficeNumber()
      const expected = '<div>Office Number: 13</div>'

      expect(office).toEqual(expected);
    });
  });
});