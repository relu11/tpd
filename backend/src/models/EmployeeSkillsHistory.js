import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class EmployeeSkillsHistory extends Model {}

EmployeeSkillsHistory.init(
  {
    employeeId: { type: DataTypes.STRING(36), primaryKey: true },
    skillId: { type: DataTypes.INTEGER, primaryKey: true },
    experienceLevel: { type: DataTypes.STRING },
    lastUsedDate: { type: DataTypes.DATE },
    createdOn: { type: DataTypes.DATE },
    managerName: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING(128) },
    function: { type: DataTypes.STRING(128) },
  },
  {
    sequelize,
    modelName: 'EmployeeSkillsHistory',
    freezeTableName: true,
    timestamps: false,
  }
);

export default EmployeeSkillsHistory;
