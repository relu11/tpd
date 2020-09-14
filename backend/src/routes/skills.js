import express from 'express';
import {
  getAllSkills, addSkill, editSkill, deleteSkill, getEmployeeSkills, addEmployeeSkill,
  editEmployeeSkill, deleteEmployeeSkill, getSkillsTracking, getSkillsHistory
} from '../controllers/skills';

const router = express.Router();

/**
 * Skills List
 * @Authorization [TPD]
 * @Response Skills List
 */
router.get('/', getAllSkills)

/**
 * Add Skill
 * @Authorization [TPD]
 * @RequestBody Skill Data
 * @Response Added Skill
 */
router.post('/', addSkill)

/**
 * Ediit Skill
 * @Authorization [TPD]
 * @RequestParams Skill ID
 * @RequestBody New Skill Data
 * @Response Modified Skill Data
 */
router.patch('/:skillId', editSkill)

/**
 * Delete Skill
 * @Authorization [TPD]
 * @RequestParams Skill ID
 * @Response Deleted Skill ID
 */
router.delete('/:skillId', deleteSkill)

/**
 * Your Skills - Returns the skills of the employee
 * @Authorization [Employee]
 * @Response Skills List
 */
router.get('/my/', getEmployeeSkills)

/**
 * Add Employee Skill
 * @Authorization [Employee]
 * @RequestBody New Skill Data
 * @Response Added Skill
 */
router.post('/my/', addEmployeeSkill)

/**
 * Edit Employee Skill
 * @Authorization [Employee]
 * @RequestParameters skillId - The id of the skill to edit
 * @Response Skills List
 */
router.patch('/my/:skillId', editEmployeeSkill)

/**
 * Delete Employee Skill
 * @Authorization [Employee]
 * @RequestParameters skillId - The id of the skill to edit
 * @Response Skills List
 */
router.delete('/my/:skillId', deleteEmployeeSkill)

/**
 * Employees Skills Tracking
 * @Authorization [TPD]
 * @Response List of current employees' skills
 */
router.get('/tracking/current', getSkillsTracking)

/**
 * Employees Skills History
 * @Authorization [TPD]
 * @Response List of history of employees' skills
 */
router.get('/tracking/history', getSkillsHistory)

export default router;
