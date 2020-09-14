import Model from "./Model";

class Employee extends Model {
  constructor(id, name, title, hiringDate, employeeFunction, directManager, workgroup,
    employmentType, allocationPercentage, skillsLastUpdateDate, employeeEmail,
    employeeProfilePicture, mobileNumber, costCenter) {
    super('');

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
}

export default Employee;
