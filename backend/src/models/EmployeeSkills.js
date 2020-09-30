import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import Skill from '../models/Skill';

class EmployeeSkill extends Model {
  static async getSkills(id) {
    EmployeeSkill.belongsTo(Skill, { foreignKey: 'SkillId' });

    const employeeSkills = await EmployeeSkill.findAll({
      where: {
        employeeId: id,
      },
      include: [{ model: Skill, required: true, attributes: ['skillName'] }],
    });
    console.log(employeeSkills);
    return employeeSkills;
  }
}

EmployeeSkill.init(
  {
    employeeId: { type: DataTypes.STRING(36), primaryKey: true },
    skillId: { type: DataTypes.INTEGER, primaryKey: true },
    experienceLevel: { type: DataTypes.STRING(32) },
    lastUsedDate: { type: DataTypes.DATE },
  },
  {
    sequelize,
    modelName: 'EmployeeSkill',
    tableName: 'EmployeeSkills',
    timestamps: false,
  }
);

export default EmployeeSkill;
