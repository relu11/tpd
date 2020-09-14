import Model from './Model';

class CertificationProvider extends Model {
  constructor(certificationProviderID, certificationProviderName) {
    super('');
    this.certificationProviderID = certificationProviderID;
    this.certificationProviderName = certificationProviderName;
  }
}

export default CertificationProvider;
