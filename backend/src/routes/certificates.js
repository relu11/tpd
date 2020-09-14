import express from 'express';
import {
  getAllCertificates, addCertificate, editCertificate, deleteCertificate, getEmployeeCertificates,
  addEmployeeCertificate, editEmployeeCertificate, deleteEmployeeCertificate,
  getCertificatesTracking, getCertificatesHistory
} from '../controllers/certificates';

const router = express.Router();

/**
 * Certificates List
 * @Authorization [TPD]
 * @Response Certificates List
 */
router.get('/', getAllCertificates)

/**
 * Add Certificate
 * @Authorization [TPD]
 * @RequestBody Certificate Data
 * @Response Added Certificate
 */
router.post('/', addCertificate)

/**
 * Ediit Certificate
 * @Authorization [TPD]
 * @RequestParams Certificate ID
 * @RequestBody New Certificate Data
 * @Response Modified Certificate Data
 */
router.patch('/:certificateId', editCertificate)

/**
 * Delete Certificate
 * @Authorization [TPD]
 * @RequestParams Certificate ID
 * @Response Deleted Certificate ID
 */
router.delete('/:certificateId', deleteCertificate)

/**
 * Your Certificates - Returns the certificates of the employee
 * @Authorization [Employee]
 * @Response Certificates List
 */
router.get('/my/', getEmployeeCertificates)

/**
 * Add Employee Certificate
 * @Authorization [Employee]
 * @RequestBody New Certificate Data
 * @Response Added Certificate
 */
router.post('/my/', addEmployeeCertificate)

/**
 * Edit Employee Certificate
 * @Authorization [Employee]
 * @RequestParameters certificateId - The id of the certificate to edit
 * @Response Certificates List
 */
router.patch('/my/:certificateId', editEmployeeCertificate)

/**
 * Delete Employee Certificate
 * @Authorization [Employee]
 * @RequestParameters certificateId - The id of the certificate to edit
 * @Response Certificates List
 */
router.delete('/my/:certificateId', deleteEmployeeCertificate)

/**
 * Employees Certificates Tracking
 * @Authorization [TPD]
 * @Response List of current employees' certificates
 */
router.get('/tracking/current', getCertificatesTracking)

/**
 * Employees Certificates History
 * @Authorization [TPD]
 * @Response List of history of employees' certificates
 */
router.get('/tracking/history', getCertificatesHistory)

export default router;
