import { Model, DataTypes, Op } from 'sequelize';
import sequelize from '../db';

class User extends Model {
  static async logIn(email, pass) {
    try {
      const user = await User.findOne({
        where: {
          [Op.or]: [{ id: email }, { username: email }],
          password: pass,
        },
      });
      console.log(user);
      return user;
    } catch (err) {
      return err;
    }
  }
}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: { type: DataTypes.STRING(32) },
    password: { type: DataTypes.STRING(32) },
    email: { type: DataTypes.STRING },
    role: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false,
  }
);

export default User;
