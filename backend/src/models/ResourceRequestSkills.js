import Model from "./Model";

class ResourceRequestSkills extends Model {
  constructor(skillID, requestReferenceNumber, category, subCategory) {
    super("");

    this.skillID = skillID;
    this.requestReferenceNumber = requestReferenceNumber;
    this.category = category;
    this.subCategory = subCategory;
  }
}

export default ResourceRequestSkills;
