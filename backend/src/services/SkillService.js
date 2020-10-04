import Skill from '../models/Skill';

class SkillService {
  /**
   * Adds a new skill
   * @param {Object} _skillData - New skill data
   * @returns {Object} Skill Data
   */
  static async addSkill(_skillData) {
    const skill = await Skill.create({
      skillName: _skillData.skillName,
    });
    console.log({ skill });
    return skill;
  }

  /**
   * Updates skill data
   * @param {Number} skillId - The ID of the skill to update
   * @param {Object} _skillData - New Skill Data
   * @returns {Object} Skill Data After Modification
   */
  static async updateSkill(skillId, _skillData) {
    const skill = await Skill.update(
      {
        skillName: _skillData.skillName,
      },
      {
        where: { skillId },
      }
    );
    return skill;
  }

  /**
   * Deletes a skill
   * @param {Number} _skillId - The Id of the skill
   * @returns {Number} Deleted Skill ID
   */
  static async deleteSkill(_skillId) {
    const skillId = await Skill.deleteSkill(_skillId);
    return skillId;
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
