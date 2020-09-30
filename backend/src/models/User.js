import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: { type: DataTypes.STRING(32) },
    password: { type: DataTypes.STRING(32) },
    email: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false,
  }
);

export default User;
