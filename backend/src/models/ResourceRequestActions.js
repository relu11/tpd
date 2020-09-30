import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class ResourceRequestActions extends Model {}

ResourceRequestActions.init(
  {
    actionId: { type: DataTypes.INTEGER, primaryKey: true },
    action: { type: DataTypes.STRING(32) },
    actionNote: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'ResourceRequestActions',
    freezeTableName: true,
    timestamps: false,
  }
);

export default ResourceRequestActions;
