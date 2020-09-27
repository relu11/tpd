import Model from "./Model";

class EmployeeSkills extends Model {
  constructor(employeeID, skillId, experienceLevel, lastDateUsed) {
    super("employee_skills");

    this.employeeID = employeeID;
    this.skillId = skillId;
    this.experienceLevel = experienceLevel;
    this.lastDateUsed = lastDateUsed;
  }

  static async getSkills(employeeID) {
    const sql = `select * from employee_skills,skills where employee_id = "${employeeID}" and employee_skills.skill_id = skills.skill_id`;
    const result = await this.query(sql);
    return result;
  }
}

export default EmployeeSkills;
