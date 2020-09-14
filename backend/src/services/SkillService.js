class SkillService {
  /**
   * Adds a new skill
   * @param {Object} _skillData - New skill data
   * @returns {Object} Skill Data
   */
  static addSkill(_skillData) { /* */ }

  /**
   * Updates skill data
   * @param {Object} _skillData - New Skill Data
   * @param {Number} _skillData.id - The ID of the skill to update
   * @returns {Object} Skill Data After Modification
   */
  static updateSkill(_skillData) { /* */ }

  /**
   * Deletes a skill
   * @param {Number} _skillId - The Id of the skill
   * @returns {Number} Deleted Skill ID
   */
  static deleteSkill(_skillId) { /* */ }

  /**
   * Gets skill data
   * @param {Number} _skillId - The ID of the skill
   * @returns {Object} Skill Data
   */
  static getSkill(_skillId) { /* */ }

  /**
   * Gets all skills
   * @param {Object} [_filters] - Filters for retireved data
   * @returns {Object[]} All Skills
   */
  static getAllSkills(_filters) { /* */ }
}

export default SkillService;
