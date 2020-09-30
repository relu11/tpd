import Model from './Model';

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

  static async getEmployeeId(email) {
    const sql = `select id from employees_profiles where employee_email = "${email}"`;
    const result = await this.query(sql);

    return result[0].id;
  }
  static async getEmployeeProfile(id) {
    const sql = `select * from employees_profiles where id = "${id}"`;
    const result = await this.query(sql);

    return result[0];
  }
}

export default Employee;
