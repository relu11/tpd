import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Skill extends Model {
  static async getAllSkills() {
    const skills = await Skill.findAll();

    return skills;
  }

  static async getSkill(id) {
    const skills = await Skill.findByPk(id);

    return skills;
  }

  static async deleteSkill(id) {
    const skills = await Skill.destroy({
      where: {
        skillId: id,
      },
    });

    return skills;
  }

  async addSkill() {
    try {
      const skills = await Skill.create({
        skillName: this.skillName,
      });
      return skills;
    } catch (err) {
      return err;
    }
  }

  async editSkill() {
    try {
      const skills = await Skill.update(
        { skillName: this.skillName },
        {
          where: {
            skillId: this.skillId,
          },
        }
      );
      return skills;
    } catch (err) {
      return err;
    }
  }
}

Skill.init(
  {
    skillId: { type: DataTypes.INTEGER, primaryKey: true },
    skillName: { type: DataTypes.STRING(45) },
  },
  {
    sequelize,
    modelName: 'Skill',
    tableName: 'Skills',
    timestamps: false,
  }
);

export default Skill;
