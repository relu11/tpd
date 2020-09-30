import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Skill extends Model {}

Skill.init(
  {
    skillId: { type: DataTypes.INTEGER, primaryKey: true },
    skillName: { type: DataTypes.STRING(45) },
  },
  {
    sequelize,
    modelName: 'Skill',
    tableName: 'Skills',
    timestamps: false,
  }
);

export default Skill;
