import Model from "./Model";

class ReleaseRequest extends Model {
  constructor(referenceNumber, managerName, employeeName, employeeID, employeeTitle,
    employeeFunction, releaseDate, propability, releasePercentage, releaseReason,
    leaving, requestStatus) {
    super('release_requests')

    this.referenceNumber = referenceNumber;
    this.managerName = managerName;
    this.employeeName = employeeName;
    this.employeeID = employeeID;
    this.employeeTitle = employeeTitle;
    this.employeeFunction = employeeFunction;
    this.releaseDate = releaseDate;
    this.propability = propability;
    this.releasePercentage = releasePercentage;
    this.releaseReason = releaseReason;
    this.leaving = leaving;
    this.requestStatus = requestStatus;
  }
}

export default ReleaseRequest;
