import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import Skill from '../models/Skill';

class EmployeeSkill extends Model {
  static async getSkills(id) {
    EmployeeSkill.belongsTo(Skill, { foreignKey: 'skillId' });

    const employeeSkills = await EmployeeSkill.findAll({
      where: {
        employeeId: id,
      },
      include: [{ model: Skill, required: true, attributes: ['skillName'] }],
    });

    return employeeSkills;
  }

  static async getSkill(skillID, empId) {
    EmployeeSkill.belongsTo(Skill, { foreignKey: 'skillId' });

    const employeeSkill = await EmployeeSkill.findOne({
      where: {
        employeeId: empId,
        skillId: skillID,
      },
      include: [{ model: Skill, required: true, attributes: ['skillName'] }],
    });

    return employeeSkill;
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
