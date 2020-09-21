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

    this.referenceNumber = this.assignRefrenceNumber();
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
  assignRefrenceNumber() {
    return 235;
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
  editReleaseRequest(callback) {
    var sql = `update release_requests set manager_name = "${this.managerName}",employee_name = "${this.employeeName}",
    employee_id ="${this.employeeID}" ,employee_title = "${this.employeeTitle}" ,function = "${this.employeeFunction}",
    release_date = "${this.releaseDate}",propability = "${this.propability}",release_percentage = "${this.releasePercentage}",
    release_reason = "${this.releaseReason}",leaving = "${this.leaving}",request_status = "${this.requestStatus}"
    where reference_number = "${this.referenceNumber}" `;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(true);
    });
  }

  static getReleaseRequests(callback) {
    var sql = `select * from release_requests`;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback();
    });
  }
  static getReleaseRequest(id, callback) {
    var sql = `select * from release_requests where reference_number = "${id}" `;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(result[0]);
    });
  }
}

export default ReleaseRequest;
