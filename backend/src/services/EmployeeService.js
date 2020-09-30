import Employee from '../models/Employee';
class EmployeeService {
  /**
   * Gets all employee data
   * @param {String} _employeeId The ID of the employee
   */
  static async getEmployee(_employeeId) {
    const employeeProfile = await Employee.getEmployeeProfile(_employeeId);
    return employeeProfile;
  }

  /**
   * Gets all the employees
   * @param {Object} _filters - Filters for retireved data
   * @returns {Object[]} All employees data
   */
  static getEmployeesList(_filters) {
    /* */
  }

  /**
   * Gets the skills history of an employee
   * @param {Number} _employeeId - The ID of the employee
   */
  static getEmployeeSkillsHistory(_employeeId) {
    /* */
  }

  /**
   * Gets the certificates of the employee
   * @param {Number} _employeeId - The ID of the employee
   */
  static getEmployeeCertificates(_employeeId) {
    /* */
  }

  /**
   * Gets the trainings of the employee
   * @param {Number} _employeeId -The ID of the employee
   */
  static getEmployeeTrainings(_employeeId) {
    /* */
  }
}

export default EmployeeService;
