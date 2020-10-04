import express from 'express';
import { getAllEmployees, getEmployee } from '../controllers/employees';
import { loggedIn, tpdOnly, managerOnly } from '../services/Authorization';

const router = express.Router();

/**
 * Employee List - return list of all employees
 * @Authorization [TPD]
 * @RequestQueryParameters [filters]
 * @Response Employee List
 */
router.get('/', getAllEmployees);

/**
 * Get employee data
 * @Authorization [TPD, Employee: Profile Owner]
 * @RequestParameters Employee ID
 * @Response Employee data
 */
router.get('/:employeeId', getEmployee);

/**
 * Edit employee assignment
 * @Authorization [TPD]
 * @RequestParameters [Employee ID, Assignment ID]
 * @RequestBody Updated Data
 * @Response Employee profile after modification
 */
router.patch('/:employeeId/assignments/:assignmentId');

/**
 * Add employee assignment
 * @Authorization [TPD]
 * @RequestParameters Employee ID
 * @RequestBody Updated Data
 * @Response Employee profile after modification
 */
router.post('/:employeeId/assignments');

/**
 * Delete employee assignment
 * @Authorization [TPD]
 * @RequestParameters [Employee ID, Assignment ID]
 * @Response Employee profile after modification
 */
router.delete('/:employeeId/assignments/:assignmentId');

/**
 * Export employee list
 * @Authorization [TPD]
 * @RequestQueryParameters [filters]
 * @Response All employee list List
 */
router.get('/export');

export default router;
