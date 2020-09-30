import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class EmployeeSkill extends Model {}

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
