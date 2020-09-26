import Skill from "../models/Skill";

class SkillService {
  /**
   * Adds a new skill
   * @param {Object} _skillData - New skill data
   * @returns {Object} Skill Data
   */
  static addSkill(_skillData) {
    const skill = new Skill(_skillData.skill_id, _skillData.skill_name);
    return skill.addSkill();
  }

  /**
   * Updates skill data
   * @param {Object} _skillData - New Skill Data
   * @param {Number} _skillData.id - The ID of the skill to update
   * @returns {Object} Skill Data After Modification
   */
  static updateSkill(_skillData) {
    const skill = new Skill(_skillData.skill_id, _skillData.skill_name);
    return skill.editSkill();
  }

  /**
   * Deletes a skill
   * @param {Number} _skillId - The Id of the skill
   * @returns {Number} Deleted Skill ID
   */
  static deleteSkill(_skillId) {
    return Skill.deleteSkill(_skillId);
  }

  /**
   * Gets skill data
   * @param {Number} _skillId - The ID of the skill
   * @returns {Object} Skill Data
   */
  static async getSkill(_skillId) {
    const skill = await Skill.getSkill(_skillId);
    return skill;
  }

  /**
   * Gets all skills
   * @param {Object} [_filters] - Filters for retireved data
   * @returns {Object[]} All Skills
   */
  static async getAllSkills(_filters) {
    const skills = await Skill.getAllSkills();
    return skills;
  }
}

export default SkillService;
