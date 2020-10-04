import Certification from '../models/Certification';
import CertificationProvider from '../models/CertificationProvider';

class CertificationProviderService {
  /**
   * Gets all certification providers
   * @param {Object} [_filters] - Filters for retireved data
   * @returns {Object[]} All Certificate Providers
   */
  static async getAllCertificationProviders(_filters) {
    const certificationProvider = await CertificationProvider.findAll();
    return certificationProvider;
  }

  /**
   * Creates new certificate provider
   * @param {Object} _providerData - New Provider data
   */
  static async addCertificateProvider(_providerData) {
    const certificationProvider = await CertificationProvider.create({
      certificationProviderName: _providerData,
    });
    return certificationProvider;
  }

  /**
   * Deltes a certificate provider
   * @param {Number} _providerId - Provider ID
   */
  static async deleteCertificateProvider(_providerId) {
    const certificationProvider = await CertificationProvider.destroy({
      where: {
        certificatoinProviderId: _providerId,
      },
    });
    return certificationProvider;
  }

  /**
   * Gets certificate provider
   * @param {Number} _providerId - Provider ID
   * @returns {Object} Provider Data
   */
  static async getCertificateProvider(_providerId) {
    const certificationProvider = await CertificationProvider.findOne({
      where: {
        certificatoinProviderId: _providerId,
      },
    });
    return certificationProvider;
  }

  /**
   * Updates provider data
   * @param {Object} _providerData - Provider Data
   * @param {Number} _providerData.id - Provider ID
   * @returns {Object} Provider data after modification
   */
  static async updateCertificateProvider(_providerData) {
    const certificationProvider = await CertificationProvider.findOne({
      certificationProviderName: _providerData.name,
      where: {
        certificatoinProviderId: _providerData.id,
      },
    });
    return certificationProvider;
  }
}

export default CertificationProviderService;
