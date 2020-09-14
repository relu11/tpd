import Model from "./Model";

class Skill extends Model {
  constructor(skillID, skillName) {
    super('');

    this.skillID = skillID;
    this.skillName = skillName;
  }
}

export default Skill;
