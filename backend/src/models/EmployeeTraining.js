import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class EmployeeTraining extends Model {}

EmployeeTraining.init(
  {
    employeeId: { type: DataTypes.STRING(36), primaryKey: true },
    trainingActivityName: { type: DataTypes.STRING },
    trainingEventName: { type: DataTypes.STRING },
    eventFromDate: { type: DataTypes.DATE },
    eventToDate: { type: DataTypes.DATE },
    totalTrainingHours: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: 'EmployeeTraining',
    freezeTableName: true,
    timestamps: false,
  }
);

export default EmployeeTraining;
