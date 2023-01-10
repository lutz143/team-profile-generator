const employeeTest = require('../lib/employee');
const { internQuestions } = require('../lib/questions');

describe('Employee', () => {
  describe("getName", () => {
    it("returns an html element of header for employee name", () => {
      const employee = "Josh"
      const expected = '<h4 class="employee-name">Josh</h4>'

      const result = new employeeTest.Employee().getName(expected);
    });
  });
});