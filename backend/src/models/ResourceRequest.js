import Model from "./Model";
import dbConnection from "../db";

class ResourceRequest extends Model {
  constructor(
    managerName,
    employeeFunction,
    title,
    startDate,
    endDate,
    propability,
    percentage,
    status,
    coreTeamMember,
    replacement,
    replecementFor,
    requestsCount,
    relatedOppoortunity,
    comments,
    assignedResource,
    actualPercentage
  ) {
    super("resource_request");
    this.referenceNumber = this.assignResourceNumber();
    this.managerName = managerName;
    this.employeeFunction = employeeFunction;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.propability = propability;
    this.relatedOppoortunity = relatedOppoortunity;
    this.percentage = percentage;
    this.status = status;
    this.coreTeamMember = coreTeamMember;
    this.replacement = replacement;
    this.replecementFor = replecementFor;
    this.requestsCount = requestsCount;
    this.comments = comments;
    this.assignedResource = assignedResource;
    this.actualPercentage = actualPercentage;
  }
  setReferenceNumber(referenceNumber) {
    this.referenceNumber = referenceNumber;
  }
  assignResourceNumber() {
    return 235;
  }
  addResourceRequest(callback) {
    var sql = `insert into resource_requests (reference_number,manager_name,function,title,start_date,end_date,propability,percentage,status,core_team_member,
      replacenement,replacement_for,requests_count,
      related_opportunity,comments,assigned_resource,actual_percentage)
    values (
      "${this.referenceNumber}",
     "${this.managerName}",
     "${this.employeeFunction}",
     "${this.title}",
     "${this.startDate}",
     "${this.endDate}",
     "${this.propability}",
     "${this.percentage}",
     "${this.status}",
     "${this.coreTeamMember}",
     "${this.replacement}",
     "${this.replecementFor}",
     "${this.requestsCount}",
     "${this.relatedOppoortunity}",
     "${this.comments}",
     "${this.assignedResource}",
     "${this.actualPercentage}"
) `;
    console.log(sql);
    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(true);
    });
  }
  editResourceRequest(callback) {
    var sql = `update resource_requests set manager_name = "${this.managerName}",function =  "${this.employeeFunction}",title= "${this.title}",
    start_date = "${this.startDate}",end_date = "${this.endDate}",propability = "${this.propability}",percentage ="${this.percentage}",
    status = "${this.status}",core_team_member = "${this.coreTeamMember}",
    replacenement = "${this.replacement}",replacement_for = "${this.replecementFor}",requests_count = "${this.requestsCount}",
    related_opportunity = "${this.relatedOppoortunity}",comments = "${this.comments}",assigned_resource = "${this.assignedResource}",
    actual_percentage =  "${this.actualPercentage}"
    where reference_number = "${this.referenceNumber}" `;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(true);
    });
  }

  static getResourceRequests(callback) {
    var sql = `select * from resource_requests`;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(result);
    });
  }
  static getResourceRequest(id, callback) {
    var sql = `select * from resource_requests where reference_number = "${id}" `;

    dbConnection.query(sql, function (err, result) {
      console.log(result);
      if (err) throw err;
      callback(result[0]);
    });
  }
}

export default ResourceRequest;
