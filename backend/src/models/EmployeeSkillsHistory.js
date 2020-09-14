import Model from './Model';

class EmployeeSkillsHistory extends Model {
  constructor(employeeID, skillID, experienceLevel, lastUsedDate, createdOnDate, managerName,
    title, employeeFunction) {
    super('');
    this.employeeID = employeeID;
    this.skillID = skillID;
    this.experienceLevel = experienceLevel;
    this.lastUsedDate = lastUsedDate;
    this.createdOnDate = createdOnDate;
    this.managerName = managerName;
    this.title = title;
    this.employeeFunction = employeeFunction;
  }
}

export default EmployeeSkillsHistory;
