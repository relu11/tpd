import Certification from '../models/Certification';

class CertificationService {
  /**
   * Gets all certifications
   * @param {Object} [_filters] - Filters for retireved data
   * @returns {Object[]} All certifications
   */
  static async getAllCertifications(_filters) {
    const certifications = await Certification.getAllCertification();
    return certifications;
  }

  /**
   * Creates new certification
   * @param {Object} _certificationData New certification data
   * @returns {Object} New certification data
   */
  static addCertification(_certificationData) {
    /* */
  }

  /**
   * Updates certification data
   * @param {Object} _certificationData Updated certification data
   * @returns {Object} Certification data after modification
   */
  static updateCertification(_certificationData) {
    /* */
  }

  /**
   * Deletes a certification
   * @param {Number} _certificationID - ID of the certification to delete
   */
  static deleteCertification(_certificationID) {
    /* */
  }

  /**
   * Gets certificate provider
   * @param {Number} _providerId - Provider ID
   * @returns {Object} Provider Data
   */
  static async getCertification(certificationId) {
    const certification = await Certification.findOne({
      where: {
        certificationId,
      },
    });
    return certification;
  }
}

export default CertificationService;
