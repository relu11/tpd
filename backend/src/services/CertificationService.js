class CertificationService {
/**
 * Gets all certifications
 * @param {Object} [_filters] - Filters for retireved data
 * @returns {Object[]} All certifications
 */
  static getAllCertifications(_filters) { /* */ }

  /**
   * Creates new certification
   * @param {Object} _certificationData New certification data
   * @returns {Object} New certification data
   */
  static addCertification(_certificationData) { /* */ }

  /**
   * Updates certification data
   * @param {Object} _certificationData Updated certification data
   * @returns {Object} Certification data after modification
   */
  static updateCertification(_certificationData) { /* */ }

  /**
   * Deletes a certification
   * @param {Number} _certificationID - ID of the certification to delete
   */
  static deleteCertification(_certificationID) { /* */ }

  /**
   * Gets a certification
   * @param {Number} _certificationID - The ID of the certification
   * @returns {Object} Certification data
   */
  static getCertification(_certificationID) { /* */ }
}

export default CertificationService;
