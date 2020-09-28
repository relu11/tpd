import Model from './Model';
import dbConnection from '../db';

class ResourceRequest extends Model {
  constructor(
    managerName,
    employeeFunction,
    title,
    startDate,
    endDate,
    propability,
    percentage,
    coreTeamMember,
    replacement,
    replecementFor,
    requestsCount,
    relatedOppoortunity,
    comments,
    assignedResource,
    actualPercentage,
    status
  ) {
    super('resource_request');
    this.referenceNumber = this.assignResourceNumber();
    this.managerName = managerName;
    this.employeeFunction = employeeFunction;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.propability = propability;
    this.relatedOppoortunity = relatedOppoortunity;
    this.percentage = percentage;
    this.status = status || 'open';
    this.coreTeamMember = coreTeamMember;
    this.replacement = replacement;
    this.replecementFor = replecementFor;
    this.requestsCount = requestsCount;
    this.comments = comments;
    this.assignedResource = assignedResource;
    this.actualPercentage = actualPercentage || 0;
  }

  setReferenceNumber(referenceNumber) {
    this.referenceNumber = referenceNumber;
  }

  assignResourceNumber() {
    return Math.floor(Math.random() * 10000);
  }

  addResourceRequest(callback) {
    const sql = `insert into resource_requests (\`reference_number\`,\`manager_name\`,\`function\`,\`title\`,\`start_date\`,\`end_date\`,\`propability\`,\`percentage\`,\`status\`,\`core_team_member\`,
    \`replacenement\`,\`replacement_for\`,\`requests_count\`,
    \`related_opportunity\`,\`comments\`)
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
     "${this.coreTeamMember ? 'y' : 'n'}",
     "${this.replacement ? 'y' : 'n'}",
     "${this.replecementFor}",
     "${this.requestsCount}",
     "${this.relatedOppoortunity}",
     "${this.comments}") `;
    dbConnection.query(sql, (err, result) => {
      console.log(result);
      if (err) throw err;
      callback(true);
    });
  }

  editResourceRequest(callback) {
    const sql = `update resource_requests set
    \`manager_name\` = "${this.managerName}",
    \`function\` =  "${this.employeeFunction}",
    \`title\`= "${this.title}",
    \`start_date\` = "${this.startDate}",
    \`end_date\` = "${this.endDate}",
    \`propability\` = "${this.propability}",
    \`percentage\` ="${this.percentage}",
    \`status\` = "${this.status}",
    \`core_team_member\` = "${this.coreTeamMember ? 'y' : 'n'}",
    \`replacenement\` = "${this.replacement ? 'y' : 'n'}",
    \`replacement_for\` = "${this.replecementFor}",
    \`requests_count\` = "${this.requestsCount}",
    \`related_opportunity\` = "${this.relatedOppoortunity}",
    \`comments\` = "${this.comments}",
    \`assigned_resource\` = "${this.assignedResource}",
    \`actual_percentage\` =  "${this.actualPercentage}"
    where \`reference_number\` = "${this.referenceNumber}" `;

    dbConnection.query(sql, (err, result) => {
      console.log(result);
      if (err) throw err;
      callback(true);
    });
  }

  updateActionTaken(action, comments, callback) {
    const sql = `INSERT INTO resource_request_actions (\`action_id\`, \`resource_request_reference_number\`, \`action\`, \`action_note\`) VALUES ("${
      this.referenceNumber
    }", "${this.referenceNumber}", "${action}", "${comments || ''}")`;
    dbConnection.query(sql, err => {
      if (err) throw err;
      callback(true);
    });
  }

  static getResourceRequests(callback) {
    const sql = `select * from resource_requests`;

    dbConnection.query(sql, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }

  static getResourceRequest(id, callback) {
    let sql = `select * from resource_requests where reference_number = "${id}" `;

    dbConnection.query(sql, (err, result) => {
      if (err) throw err;
      sql = `SELECT * FROM resource_request_actions WHERE resource_request_reference_number = ${id}`;
      dbConnection.query(sql, (err1, result1) => {
        if (err1) throw err1;
        const resourceRequest = result[0];
        if (result1[0]) {
          resourceRequest.action_taken = result1[0].action;
        }
        callback(resourceRequest);
      });
    });
  }
}

export default ResourceRequest;
