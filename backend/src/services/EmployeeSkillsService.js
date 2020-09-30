import Employee from '../models/Employee';
import EmployeeSkills from '../models/EmployeeSkills';
class EmployeeSkillsService {
  /**
   * Adds a new employee skill
   * @param {Object} _skillData - The data of the new skill
   * @param {String} _employeeId - The ID of the employee
   * @returns {Object} Employee skill data
   */
  static addEmployeeSkill(_skillData, _employeeId) {
    /* */
  }

  /**
   * Updates employee skill data
   * @param {Object} _skillData - Modified Skill Data
   * @param {Number} _skillData._skillId - The ID of the skill to update
   * @returns {Object} Employee skill data after modification
   */
  static updateEmployeeSkill(_skillData, _employeeId) {
    /* */
  }

  /**
   * Deletes an employee skill
   * @param {Number} _skillId - The skill id
   * @param {String} _employeeId - The ID of the employee
   * @returns {Number} ID of deleted skill
   */
  static deleteEmployeeSkill(_skillId, _employeeId) {
    /* */
  }

  /**
   * Gets an employee skill data
   * @param {Number} _skillId - The skill id
   * @param {String} _employeeId - The ID of the employee
   * @returns {Object} Skill data
   */
  static getEmployeeSkill(_skillId, _employeeId) {}

  /**
   * Gets all the skills of an employee
   * @param {Object} _filters - Filters for retireved data
   * @param {Object} _filters._employeeId - The ID of the employee
   * @returns {Object[]} All skills data
   */
  static async getAllEmployeesSkills(email) {
    const id = await Employee.getEmployeeId(email);
    const skills = await EmployeeSkills.getSkills(id);
    return skills;
  }
}

export default EmployeeSkillsService;
