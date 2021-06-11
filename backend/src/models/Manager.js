import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Manager extends Model {}

Manager.init(
  {
    id: { type: DataTypes.STRING(36), primaryKey: true },
    name: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'Manager',
    tableName: 'Managers',
    timestamps: false,
  }
);

export default Manager;
