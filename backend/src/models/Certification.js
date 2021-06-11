import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';
import CertificationProvider from './CertificationProvider';

class Certification extends Model {
  static async getAllCertification() {
    Certification.belongsTo(CertificationProvider, {
      foreignKey: 'certificationProviderId',
    });
    const certifications = await Certification.findAll({
      include: [
        {
          model: CertificationProvider,
          required: true,
          attributes: ['certificationProviderName'],
        },
      ],
    });
    return certifications;
  }
}

Certification.init(
  {
    certificationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
