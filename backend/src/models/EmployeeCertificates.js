import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class EmployeeCertificate extends Model {}

EmployeeCertificate.init(
  {
    employeeId: { type: DataTypes.STRING(36), primaryKey: true },
    certificationId: { type: DataTypes.INTEGER, primaryKey: true },
    expirationDate: { type: DataTypes.DATE },
  },
  {
    sequelize,
    modelName: 'EmployeeCertificate',
    tableName: 'EmployeeCertifications',
    timestamps: false,
  }
);

export default EmployeeCertificate;
