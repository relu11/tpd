import express from 'express';
import { getEmployeeTrainings, getTrainingsHistory } from '../controllers';

const router = express.Router();

/**
 * Your Trainings - Returns the trainings of the employee
 * @Authorization [Employee]
 * @Response Trainings List
 */
router.get('/my/', getEmployeeTrainings)

/**
 * Employees Trainings History
 * @Authorization [TPD]
 * @Response List of history of employees' trainings
 */
router.get('/tracking/history', getTrainingsHistory)

export default router;
