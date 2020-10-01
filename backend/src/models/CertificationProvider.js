import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class CertificationProvider extends Model {}

CertificationProvider.init(
  {
    certificatoinProviderId: { type: DataTypes.INTEGER, primaryKey: true },
    certificationProviderName: { type: DataTypes.STRING(128) },
  },
  {
    sequelize,
    modelName: 'CertificationProviders',
    freezeTableName: true,
    timestamps: false,
  }
);

export default CertificationProvider;
