const { default: Model } = require("./Model");

class Assignment extends Model {
  constructor(id, employeeID, workgroup, costCenter, SDMReportingManager, allocationPercentage,
    startDate, releaseDate) {
    super('');

    this.id = id;
    this.employeeID = employeeID;
    this.workgroup = workgroup;
    this.costCenter = costCenter;
    this.SDMReportingManager = SDMReportingManager;
    this.allocationPercentage = allocationPercentage;
    this.startDate = startDate;
    this.releaseDate = releaseDate;
  }
}

export default Assignment;
