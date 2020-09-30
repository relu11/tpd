import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class ResourceRequestSkills extends Model {}

ResourceRequestSkills.init(
  {
    skillId: { type: DataTypes.INTEGER, primaryKey: true },
    requestReferenceNumber: { type: DataTypes.INTEGER, primaryKey: true },
    category: { type: DataTypes.STRING(64) },
    subCategory: { type: DataTypes.STRING(64) },
  },
  {
    sequelize,
    modelName: 'ResourceRequestSkills',
    freezeTableName: true,
    timestamps: false,
  }
);

export default ResourceRequestSkills;
