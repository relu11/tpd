import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class ReleaseRequestActions extends Model {}

ReleaseRequestActions.init(
  {
    actionId: { type: DataTypes.INTEGER, primaryKey: true },
    action: { type: DataTypes.STRING(32) },
    actionNote: { type: DataTypes.STRING(64) },
  },
  {
    sequelize,
    modelName: 'ReleaseRequestActions',
    freezeTableName: true,
    timestamps: false,
  }
);

export default ReleaseRequestActions;
