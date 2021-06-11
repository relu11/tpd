import Employee from '../models/Employee';
import EmployeeTraining from '../models/EmployeeTraining';
import EmployeeCertificate from '../models/EmployeeCertificates';

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
  static getEmployeesList() {
    const employees = Employee.getAllEmployees();
    return employees;
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
  static async getEmployeeCertificates(_employeeId) {
    const certificate = await EmployeeCertificate.findAll({
      where: {
        employeeId: _employeeId,
      },
    });
    return trainings;
  }

  /**
   * Gets the trainings of the employee
   * @param {Number} _employeeId -The ID of the employee
   */
  static async getEmployeeTrainings(_employeeId) {
    const trainings = await EmployeeTraining.findAll({
      where: {
        employeeId: _employeeId,
      },
    });
    return trainings;
  }
}

export default EmployeeService;
