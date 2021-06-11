import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Assignment extends Model {}

Assignment.init(
  {
    assignmentId: { type: DataTypes.INTEGER, primaryKey: true },
    employeeId: { type: DataTypes.STRING(36) },
    workgroup: { type: DataTypes.STRING(128) },
    costCenter: { type: DataTypes.STRING(128) },
    sdmReportingManager: { type: DataTypes.STRING },
    allocationPercentage: { type: DataTypes.INTEGER },
    startDate: { type: DataTypes.DATE },
    releaseDate: { type: DataTypes.DATE },
  },
  {
    sequelize,
    modelName: 'Assignment',
    freezeTableName: true,
    timestamps: false,
  }
);

export default Assignment;
