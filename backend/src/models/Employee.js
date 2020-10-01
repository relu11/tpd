import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Employee extends Model {
  static async getAllEmployees() {
    const employees = await Employee.findAll();
    return employees;
  }
  static async getEmployee(id) {
    const employee = await Employee.findByPk(id);
    return employee;
  }
}

Employee.init(
  {
    id: { type: DataTypes.STRING(36), primaryKey: true },
    name: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING(128) },
    hiringDate: { type: DataTypes.DATE },
    function: { type: DataTypes.STRING(128) },
    directManager: { type: DataTypes.STRING(36) },
    workgroup: { type: DataTypes.STRING(128) },
    employmentType: { type: DataTypes.STRING(64) },
    allocationPercentage: { type: DataTypes.INTEGER },
    skillsLastUpdateDate: { type: DataTypes.DATE },
    employeeEmail: { type: DataTypes.STRING },
    employeeProfilePicture: { type: DataTypes.STRING(45) },
    mobileNumber: { type: DataTypes.STRING(20) },
    costCenter: { type: DataTypes.STRING(128) },
  },
  {
    sequelize,
    modelName: 'Employee',
    tableName: 'EmployeesProfiles',
    timestamps: false,
  }
);

export default Employee;
