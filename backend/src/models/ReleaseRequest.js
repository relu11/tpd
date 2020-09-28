import Model from './Model';
import dbConnection from '../db';

class ReleaseRequest extends Model {
  constructor(
    managerName,
    employeeName,
    employeeID,
    employeeTitle,
    employeeFunction,
    releaseDate,
    probability,
    releasePercentage,
    releaseReason,
    leaving,
    requestStatus
  ) {
    super('release_requests');

    this.referenceNumber = this.assignRefrenceNumber();
    this.managerName = managerName;
    this.employeeName = employeeName;
    this.employeeID = employeeID;
    this.employeeTitle = employeeTitle;
    this.employeeFunction = employeeFunction;
    this.releaseDate = releaseDate;
    this.probability = probability;
    this.releasePercentage = releasePercentage;
    this.releaseReason = releaseReason;
    this.leaving = leaving ? 'y' : 'n';
    this.requestStatus = requestStatus || 'open';
  }

  assignRefrenceNumber() {
    return Math.floor(Math.random() * 10000);
  }

  addReleaseRequest(callback) {
    const sql = `insert into release_requests
    (\`reference_number\`,\`manager_name\`,\`employee_name\`,\`employee_id\`,\`employee_title\`,\`function\`,\`release_date\`,\`propability\`,\`release_percentage\`,\`release_reason\`,\`leaving\`,\`request_status\`)
    values (
      "${this.referenceNumber}",
     "${this.managerName}",
     "${this.employeeName}",
     "${this.employeeID}",
     "${this.employeeTitle}",
     "${this.employeeFunction}",
     "${this.releaseDate}",
     "${this.probability}",
     "${this.releasePercentage}",
     "${this.releaseReason}",
     "${this.leaving}",
     "${this.requestStatus}") `;

    dbConnection.query(sql, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }

  editReleaseRequest(callback) {
    const sql = `update release_requests set \`manager_name\` = "${this.managerName}",\`employee_name\` = "${this.employeeName}",
    \`employee_id\` = "${this.employeeID}" ,\`employee_title\` = "${this.employeeTitle}" ,\`function\` = "${this.employeeFunction}",
    \`release_date\` = "${this.releaseDate}", \`propability\` = "${this.probability}", \`release_percentage\` = "${this.releasePercentage}",
    \`release_reason\` = "${this.releaseReason}", \`leaving\` = "${this.leaving}", \`request_status\` = "${this.requestStatus}"
    where reference_number = "${this.referenceNumber}" `;

    dbConnection.query(sql, (err, result) => {
      if (err) throw err;
      callback(true);
    });
  }

  updateActionTaken(action, comments, callback) {
    const sql = `INSERT INTO release_requests_actions (\`action_id\`, \`release_request_reference_number\`, \`action\`, \`action_note\`) VALUES ("${
      this.referenceNumber
    }", "${this.referenceNumber}", "${action}", "${comments || ''}")`;
    dbConnection.query(sql, err => {
      if (err) callback(false);
      callback(true);
    });
  }

  static getReleaseRequests(callback) {
    const sql = `select * from release_requests`;

    dbConnection.query(sql, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }

  static getReleaseRequest(id, callback) {
    let sql = `select * from release_requests where reference_number = "${id}" `;

    dbConnection.query(sql, (err, result) => {
      if (err) throw err;
      sql = `SELECT * FROM release_requests_actions WHERE release_request_reference_number = ${id}`;
      dbConnection.query(sql, (err1, result1) => {
        if (err1) throw err1;
        const releaseRequest = result[0];
        if (result1[0]) {
          releaseRequest.action_taken = result1[0].action;
          releaseRequest.comments = result1[0].action_note;
        }
        callback(releaseRequest);
      });
    });
  }
}

export default ReleaseRequest;
