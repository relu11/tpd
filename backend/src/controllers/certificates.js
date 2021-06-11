import express from 'express';
import CertificationService from '../services/CertificationService';
import CertificationProviderService from '../services/CertificationProviderService';
import Certification from '../models/Certification';
import EmployeeCertificate from '../models/EmployeeCertificates';

/**
 * Gets all certificates
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllCertificates = async (req, res) => {
  const certifications = await CertificationService.getAllCertifications();
  console.log({ certifications });
  res.send({ certifications });
};

/**
 * Adds a new certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.certificate - Certificate Data
 * @param {express.Response} res - Response Object
 */
export const addCertificate = async (req, res) => {
  const { certificationProviderId, certificationName } = req.body;
  const certification = await Certification.create({
    certificationProviderId,
    certificationName,
  });
  res.send({ certification });
};

/**
 * Edits a certificate
 * @param {express.Request} req - Request Object
 * @param {Number} req.params.certificateId - Certificate ID
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const editCertificate = async (req, res) => {
  const { certificationProviderId, certificationName } = req.body;
  const certification = await Certification.update(
    {
      certificationProviderId,
      certificationName,
    },
    {
      where: {
        certificationId: req.params.certificationId,
      },
    }
  );
  res.send({ certification });
};

/**
 * Deltes a certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.certificateId - Certificate ID
 * @param {express.Response} res - Response Object
 */
export const deleteCertificate = async (req, res) => {
  const certification = await Certification.findByPk(
    req.params.certificationId
  );
  await certification.destroy();
  res.send({ certificationId: req.params.certificationId });
};

/**
 * Gets all certificates of an employee
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getEmployeeCertificates = async (req, res) => {
  EmployeeCertificate.belongsTo(Certification, {
    foreignKey: 'certificationId',
  });

  console.log('here');

  const employeeCertificates = await EmployeeCertificate.findAll({
    where: {
      employeeId: req.user.employeeId,
    },
    include: [
      {
        model: Certification,
        required: true,
        attributes: ['certificationProviderId', 'certificationName'],
      },
    ],
  });

  console.log({ employeeCertificates });

  res.send({ certifications: employeeCertificates });
};

/**
 * Adds an employee certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.certificate - Certificate Data
 * @param {express.Response} res - Response Object
 */
export const addEmployeeCertificate = async (req, res) => {
  const {
    certificationProviderId,
    certificationName,
    expirationDate,
    isNew,
    reqCertificationId,
  } = req.body;
  const { employeeId } = req.user;
  let certificationId;
  console.log({ certificationProviderId });
  if (isNew) {
    const certification = await Certification.create({
      certificationProviderId,
      certificationName,
    });
    certificationId = certification.certificationId;
    console.log(certificationId);
  } else {
    certificationId = reqCertificationId;
  }

  const employeeCertification = await EmployeeCertificate.create({
    employeeId,
    certificationId,
    expirationDate,
    certificationProviderId,
  });
  res.send({ certification: employeeCertification });
};

export const getEmployeeCertificate = async (req, res) => {
  EmployeeCertificate.belongsTo(Certification, {
    foreignKey: 'certificationId',
  });

  const employeeCertificate = await EmployeeCertificate.findOne({
    where: {
      employeeId: req.user.employeeId,
      certificationId: req.params.certificationId,
    },
    include: [
      {
        model: Certification,
        required: true,
        attributes: ['certificationProviderId', 'certificationName'],
      },
    ],
  });

  res.send({ certification: employeeCertificate });
};

/**
 * Edits an employee certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.certificationId - Certificate ID
 * @param {express.Response} res - Response Object
 */
export const editEmployeeCertificate = async (req, res) => {
  const { expirationDate } = req.body;
  console.log({ expirationDate });
  const certification = await EmployeeCertificate.update(
    {
      expirationDate,
    },
    {
      where: {
        employeeId: req.user.employeeId,
        certificationId: req.params.certificationId,
      },
    }
  );
  res.send({ certification });
};

/**
 * Adds an employee certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.certificateId - Certificate ID
 * @param {express.Response} res - Response Object
 */
export const deleteEmployeeCertificate = async (req, res) => {
  await EmployeeCertificate.destroy({
    where: { certificationId: req.params.certificationId },
  });
  res.send({ certificationId: req.params.certificationId });
};

/**
 * Gets the tracking list of employees certificates
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getCertificatesHistory = (req, res) => {
  res.send('Gets the tracking list of employees certificates');
};

/**
 * Gets the tracking list of employees certificates
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getCertificateProviders = async (req, res) => {
  const providers = await CertificationProviderService.getAllCertificationProviders();
  res.send({ providers });
};

/**
 * Gets a certificate
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getCertification = async (req, res) => {
  const certification = await CertificationService.getCertification(
    req.params.certificationId
  );
  res.send({ certification });
};
