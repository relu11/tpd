import Employee from '../models/Employee';
import SkillService from '../services/SkillService';
import EmployeeSkills from '../models/EmployeeSkills';

class EmployeeSkillsService {
  /**
   * Adds a new employee skill
   * @param {Object} _skillData - The data of the new skill
   * @param {String} _employeeId - The ID of the employee
   * @returns {Object} Employee skill data
   */
  static async addEmployeeSkill(_skillData, _employeeId) {
    let skillId;
    console.log(_skillData);
    if (_skillData.isNew) {
      const skill = await SkillService.addSkill(_skillData);
      skillId = skill.skillId;
      console.log({ skillId });
    } else {
      skillId = _skillData.skillId;
    }

    const employeeSkill = await EmployeeSkills.create({
      employeeId: _employeeId,
      skillId,
      experienceLevel: _skillData.experienceLevel,
      lastUsedDate: _skillData.lastUsedDate,
    });
    return employeeSkill;
  }

  /**
   * Updates employee skill data
   * @param {Object} _skillData - Modified Skill Data
   * @param {Number} _skillData._skillId - The ID of the skill to update
   * @returns {Object} Employee skill data after modification
   */
  static async updateEmployeeSkill(_skillData, _employeeId) {
    const skills = await EmployeeSkills.update(
      {
        experienceLevel: _skillData.experienceLevel,
        lastUsedDate: _skillData.lastUsedDate,
      },
      {
        where: {
          skillId: _skillData.skillId,
          employeeId: _employeeId,
        },
      }
    );
    return skills;
  }

  /**
   * Deletes an employee skill
   * @param {Number} _skillId - The skill id
   * @param {String} _employeeId - The ID of the employee
   * @returns {Number} ID of deleted skill
   */
  static async deleteEmployeeSkill(_skillId, _employeeId) {
    const skill = await EmployeeSkills.destroy({
      where: {
        skillId: _skillId,
        employeeId: _employeeId,
      },
    });
    return skill;
  }

  /**
   * Gets an employee skill data
   * @param {Number} _skillId - The skill id
   * @param {String} _employeeId - The ID of the employee
   * @returns {Object} Skill data
   */
  static async getEmployeeSkill(_skillId, _employeeId) {
    const skill = await EmployeeSkills.getSkill(_skillId, _employeeId);
    return skill;
  }

  /**
   * Gets all the skills of an employee
   * @param {Object} _filters - Filters for retireved data
   * @param {Object} _filters._employeeId - The ID of the employee
   * @returns {Object[]} All skills data
   */
  static async getAllEmployeesSkills(id) {
    const skills = await EmployeeSkills.getSkills(id);
    return skills;
  }
}

export default EmployeeSkillsService;
