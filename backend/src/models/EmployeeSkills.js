import Model from "./Model";

class EmployeeSkills extends Model {
  constructor(employeeID, skillId, experienceLevel, lastDateUsed) {
    super('');

    this.employeeID = employeeID;
    this.skillId = skillId;
    this.experienceLevel = experienceLevel;
    this.lastDateUsed = lastDateUsed;
  }
}

export default EmployeeSkills;
