class CertificationProviderService {
  /**
   * Gets all certification providers
   * @param {Object} [_filters] - Filters for retireved data
   * @returns {Object[]} All Certificate Providers
   */
  static getAllCertificationProviders(_filters) { /* */ }

  /**
   * Creates new certificate provider
   * @param {Object} _providerData - New Provider data
   */
  static addCertificateProvider(_providerData) { /* */ }

  /**
   * Deltes a certificate provider
   * @param {Number} _providerId - Provider ID
   */
  static deleteCertificateProvider(_providerId) { /* */ }

  /**
   * Gets certificate provider
   * @param {Number} _providerId - Provider ID
   * @returns {Object} Provider Data
   */
  static getCertificateProvider(_providerId) { /* */ }

  /**
   * Updates provider data
   * @param {Object} _providerData - Provider Data
   * @param {Number} _providerData.id - Provider ID
   * @returns {Object} Provider data after modification
   */
  static updateCertificateProvider(_providerData) { /* */ }
}

export default CertificationProviderService;
