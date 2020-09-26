import Model from "./Model";

class Skill extends Model {
  constructor(skillID, skillName) {
    super("skills");

    this.skillID = skillID;
    this.skillName = skillName;
  }

  static async getAllSkills() {
    const sql = `select * from skills`;
    const result = await this.query(sql);
    return result;
  }

  static async getSkill(id) {
    const sql = `select * from skills where skill_id = "${id}"`;
    const result = await this.query(sql);
    return result;
  }

  async addSkill() {
    const sql = `insert into skills(skill_name , skill_id) values("${this.skillName}" ,"${this.skillID}")`;
    const result = await this.query(sql);

    return result;
  }

  async editSkill() {
    const sql = `update skills set skill_name = "${this.skillName}" where skill_id = "${this.skillID}"`;
    const result = await this.query(sql);

    return result;
  }

  static async deleteSkill(id) {
    const sql = `delete FROM skills where skill_id = "${id}"`;
    const result = await this.query(sql);

    return result;
  }
}

export default Skill;
