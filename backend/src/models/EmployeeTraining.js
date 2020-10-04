import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import Employee from '../models/Employee';

class EmployeeTraining extends Model {
  static async getEmployeeTraining(id) {
    const trainings = await EmployeeTraining.findAll({
      where: {
        employeeId: id,
      },
    });
    return trainings;
  }

  static async getTrainings() {
    EmployeeTraining.belongsTo(Employee, { foreignKey: 'id' });
    const trainings = await EmployeeTraining.findAll({
      include: [{ model: Employee, required: true, attributes: ['name'] }],
    });
    return trainings;
  }
}

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
