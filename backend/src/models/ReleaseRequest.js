import Model from "./Model";
import dbConnection from "../db";

class ReleaseRequest extends Model {
  constructor(
    managerName,
    employeeName,
    employeeID,
    employeeTitle,
    employeeFunction,
    releaseDate,
    propability,
    releasePercentage,
    releaseReason,
    leaving,
    requestStatus
  ) {
    super("release_requests");

    this.referenceNumber = this.assignRefrenceNumber;
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
  addReleaseRequest(callback) {
    var sql = `insert into release_requests
    (reference_number,manager_name,employee_name,employee_id,employee_title,function,release_date,propability,release_percentage,release_reason,leaving,request_status)
    values (
      "${this.referenceNumber}",
     "${this.managerName}",
     "${this.employeeName}",
     "${this.employeeID}",
     "${this.employeeTitle}",
     "${this.employeeFunction}",
     "${this.releaseDate}",
     "${this.propability}",
     "${this.releasePercentage}",
     "${this.releaseReason}",
     "${this.leaving}",
     "${this.requestStatus}") `;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(true);
    });
  }
  assignRefrenceNumber() {
    return 235;
  }
  static getReleaseRequests(callback) {
    var sql = `select * from release_requests`;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback();
    });
  }
}

export default ReleaseRequest;
