import express from 'express';
import { getEmployeeTraining } from '../controllers/trainings';
import { loggedIn, tpdOnly, managerOnly } from '../services/Authorization';

const router = express.Router();

/**
 * Your Trainings - Returns the trainings of the employee
 * @Authorization [Employee]
 * @Response Trainings List
 */
router.get('/my/', loggedIn);

/**
 * Employees Trainings History
 * @Authorization [TPD]
 * @Response List of history of employees' trainings
 */
router.get('/tracking/history');

export default router;
