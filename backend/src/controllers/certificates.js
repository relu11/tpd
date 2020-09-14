import express from 'express';

/**
 * Gets all certificates
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllCertificates = (req, res) => {
  res.send('Get All Certificates');
}

/**
 * Adds a new certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.certificate - Certificate Data
 * @param {express.Response} res - Response Object
 */
export const addCertificate = (req, res) => {
  res.send('Adds a new certificate');
}

/**
 * Edits a certificate
 * @param {express.Request} req - Request Object
 * @param {Number} req.params.certificateId - Certificate ID
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const editCertificate = (req, res) => {
  res.send('Edits a certificate');
}

/**
 * Deltes a certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.certificateId - Certificate ID
 * @param {express.Response} res - Response Object
 */
export const deleteCertificate = (req, res) => {
  res.send('Deltes a certificate');
}

/**
 * Gets all certificates of an employee
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getEmployeeCertificates = (req, res) => {
  res.send('Gets all certificates of an employee');
}

/**
 * Adds an employee certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.certificate - Certificate Data
 * @param {express.Response} res - Response Object
 */
export const addEmployeeCertificate = (req, res) => {
  res.send('Adds an employee certificate');
}

/**
 * Edits an employee certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.certificateId - Certificate ID
 * @param {express.Response} res - Response Object
 */
export const editEmployeeCertificate = (req, res) => {
  res.send('Edits an employee certificate');
}

/**
 * Adds an employee certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.certificateId - Certificate ID
 * @param {express.Response} res - Response Object
 */
export const deleteEmployeeCertificate = (req, res) => {
  res.send('Adds an employee certificate');
}

/**
 * Gets the tracking list of employees certificates
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getCertificatesTracking = (req, res) => {
  res.send('Gets the tracking list of employees certificates');
}

/**
 * Gets the tracking list of employees certificates
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getCertificatesHistory = (req, res) => {
  res.send('Gets the tracking list of employees certificates');
}
