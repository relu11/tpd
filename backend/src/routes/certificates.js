import express from 'express';
import {
  getAllCertificates,
  addCertificate,
  editCertificate,
  deleteCertificate,
  getEmployeeCertificates,
  addEmployeeCertificate,
  editEmployeeCertificate,
  deleteEmployeeCertificate,
  getCertificatesHistory,
  getCertificateProviders,
  getEmployeeCertificate,
  getCertification,
} from '../controllers';
import { loggedIn } from '../services/Authorization';

const router = express.Router();

/**
 * Certificates List
 * @Authorization [TPD]
 * @RequestQueryParameters [filters]
 * @Response Certificates List
 */
router.get('/', loggedIn, getAllCertificates);

/**
 * Add Certificate
 * @Authorization [TPD]
 * @RequestBody Certificate Data
 * @Response Added Certificate
 */
router.post('/', loggedIn, addCertificate);

/**
 * Employees Certificate Providers List
 * @Authorization [TPD]
 * @RequestQueryParameters [filters]
 * @Response List of Certificate Providers
 */
router.get('/providers', loggedIn, getCertificateProviders);
/**
 * Ediit Certificate
 * @Authorization [TPD]
 * @RequestParams Certificate ID
 * @RequestBody New Certificate Data
 * @Response Modified Certificate Data
 */
router.patch('/:certificationId', loggedIn, editCertificate);

/**
 * Delete Certificate
 * @Authorization [TPD]
 * @RequestParams Certificate ID
 * @Response Deleted Certificate ID
 */
router.delete('/:certificationId', loggedIn, deleteCertificate);

/**
 * Your Certificates - Returns the certificates of the employee
 * @Authorization [Employee]
 * @Response Certificates List
 */
router.get('/my/', loggedIn, getEmployeeCertificates);

/**
 * Add Employee Certificate
 * @Authorization [Employee]
 * @RequestBody New Certificate Data
 * @Response Added Certificate
 */
router.post('/my/', loggedIn, addEmployeeCertificate);

/**
 * Edit Employee Certificate
 * @Authorization [Employee]
 * @RequestParameters certificationId - The id of the certificate to edit
 * @Response Certificates List
 */
router.patch('/my/:certificationId', loggedIn, editEmployeeCertificate);

/**
 * Get Employee Certificate
 * @Authorization [Employee]
 * @RequestParameters certificationId - The id of the certificate to edit
 * @Response Certificates List
 */
router.get('/my/:certificationId', loggedIn, getEmployeeCertificate);

/**
 * Delete Employee Certificate
 * @Authorization [Employee]
 * @RequestParameters certificationId - The id of the certificate to edit
 * @Response Certificates List
 */
router.delete('/my/:certificationId', loggedIn, deleteEmployeeCertificate);

/**
 * Employees Certificates History
 * @Authorization [TPD]
 * @RequestQueryParameters [filters]
 * @Response List of history of employees' certificates
 */
router.get('/tracking/history', loggedIn, getCertificatesHistory);

/**
 * Gets a Certificate
 * @Authorization [TPD]
 * @RequestParams Certificate ID
 * @RequestBody New Certificate Data
 * @Response Modified Certificate Data
 */
router.get('/:certificationId', loggedIn, getCertification);

export default router;
