import Model from './Model';

class Certification extends Model {
  constructor(certificationID, certificationProviderID, certificationName) {
    super('');
    this.certificationID = certificationID;
    this.certificationProviderID = certificationProviderID;
    this.certificationName = certificationName;
  }
}

export default Certification;
