import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Certification extends Model {}

Certification.init(
  {
    certificationId: { type: DataTypes.INTEGER, primaryKey: true },
    certificationProviderId: { type: DataTypes.INTEGER },
    certificationName: { type: DataTypes.STRING(128) },
  },
  {
    sequelize,
    modelName: 'Certifications',
    freezeTableName: true,
    timestamps: false,
  }
);

export default Certification;
