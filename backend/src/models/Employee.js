import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Employee extends Model {
  constructor(
    id,
    name,
    title,
    hiringDate,
    employeeFunction,
    directManager,
    workgroup,
    employmentType,
    allocationPercentage,
    skillsLastUpdateDate,
    employeeEmail,
    employeeProfilePicture,
    mobileNumber,
    costCenter
  ) {
    super('employees_profiles');

    this.id = id;
    this.name = name;
    this.title = title;
    this.hiringDate = hiringDate;
    this.employeeFunction = employeeFunction;
    this.directManager = directManager;
    this.workgroup = workgroup;
    this.employmentType = employmentType;
    this.allocationPercentage = allocationPercentage;
    this.skillsLastUpdateDate = skillsLastUpdateDate;
    this.employeeEmail = employeeEmail;
    this.employeeProfilePicture = employeeProfilePicture;
    this.mobileNumber = mobileNumber;
    this.costCenter = costCenter;
    }
  static async getAllEmployees() {
    const employees = await Employee.findAll();
    return employees;
  }
  static async getEmployee(id) {
    const employee = await Employee.findByPk(id);
    return employee;
  }
  static async getEmployeeProfile(id) {
    const sql = `select * from employees_profiles where id = "${id}"`;
    const result = await this.query(sql);

    return result[0];
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
