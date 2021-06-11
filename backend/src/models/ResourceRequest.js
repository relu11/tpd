import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class ResourceRequest extends Model {}

ResourceRequest.init(
  {
    referenceNumber: { type: DataTypes.INTEGER, primaryKey: true },
    managerName: { type: DataTypes.STRING },
    function: { type: DataTypes.STRING(128) },
    title: { type: DataTypes.STRING(128) },
    startDate: { type: DataTypes.DATE },
    endDate: { type: DataTypes.DATE },
    probability: { type: DataTypes.INTEGER },
    percentage: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING(32) },
    coreTeamMember: { type: DataTypes.STRING(1) },
    replacement: { type: DataTypes.STRING(1) },
    replacementFor: { type: DataTypes.STRING },
    requestsCount: { type: DataTypes.INTEGER },
    relatedOpportunity: { type: DataTypes.STRING(128) },
    comments: { type: DataTypes.STRING },
    assignedResource: { type: DataTypes.STRING },
    actualPercentage: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: 'ResourceRequest',
    tableName: 'ResourceRequests',
  }
);

export default ResourceRequest;
