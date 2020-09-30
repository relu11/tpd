import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class ReleaseRequest extends Model {}

ReleaseRequest.init(
  {
    referenceNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    managerName: { type: DataTypes.STRING },
    employeeName: { type: DataTypes.STRING },
    employeeId: { type: DataTypes.STRING(36) },
    employeeTitle: { type: DataTypes.STRING(128) },
    function: { type: DataTypes.STRING(128) },
    releaseDate: { type: DataTypes.DATE },
    probability: { type: DataTypes.INTEGER },
    releasePercentage: { type: DataTypes.INTEGER },
    releaseReason: { type: DataTypes.STRING },
    leaving: { type: DataTypes.STRING(1) },
    requestStatus: { type: DataTypes.STRING(32), defaultValue: 'open' },
  },
  {
    sequelize,
    modelName: 'ReleaseRequest',
    tableName: 'ReleaseRequests',
  }
);

export default ReleaseRequest;
