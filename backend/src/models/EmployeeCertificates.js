import Model from './Model';

class EmployeeCertificate extends Model {
  constructor(employeeID, certificateID, certificateExpirationDate) {
    super('');
    this.employeeID = employeeID;
    this.certificateID = certificateID;
    this.certificateExpirationDate = certificateExpirationDate;
  }
}

export default EmployeeCertificate;
