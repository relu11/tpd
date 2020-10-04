import express from 'express';
import {
  getAllSkills,
  addSkill,
  editSkill,
  deleteSkill,
  getEmployeeSkills,
  addEmployeeSkill,
  editEmployeeSkill,
  deleteEmployeeSkill,
  getSkillsTracking,
  getSkillsHistory,
  getSkill,
  getEmployeeSkill,
} from '../controllers';
import { loggedIn, tpdOnly, managerOnly } from '../services/Authorization';

const router = express.Router();

/**
 * Skills List
 * @Authorization [TPD]
 * @Response Skills List
 */
router.get('/', loggedIn, tpdOnly, getAllSkills);

/**
 * Your Skills - Returns the skills of the employee
 * @Authorization [Employee]
 * @Response Skills List
 */
router.get('/my', loggedIn, getEmployeeSkills);
/**
 * Skill
 * @Authorization [TPD]
 * @Response Skill
 */
router.get('/:skillId', loggedIn, getSkill);

/**
 * Add Skill
 * @Authorization [TPD]
 * @RequestBody Skill Data
 * @Response Added Skill
 */
router.post('/', loggedIn, addSkill);

/**
 * Ediit Skill
 * @Authorization [TPD]
 * @RequestParams Skill ID
 * @RequestBody New Skill Data
 * @Response Modified Skill Data
 */
router.patch('/:skillId', loggedIn, editSkill);

/**
 * Delete Skill
 * @Authorization [TPD]
 * @RequestParams Skill ID
 * @Response Deleted Skill ID
 */
router.delete('/:skillId', loggedIn, deleteSkill);

/**
 * Add Employee Skill
 * @Authorization [Employee]
 * @RequestBody New Skill Data
 * @Response Added Skill
 */
router.post('/my', loggedIn, addEmployeeSkill);

/**
 * get Employee Skill
 * @Authorization [Employee]
 * @RequestParameters skillId - The id of the skill to get
 * @Response Skills List
 */
router.get('/my/:skillId', loggedIn, getEmployeeSkill);
/**
 * Edit Employee Skill
 * @Authorization [Employee]
 * @RequestParameters skillId - The id of the skill to edit
 * @Response Skills List
 */
router.patch('/my/:skillId', loggedIn, editEmployeeSkill);

/**
 * Delete Employee Skill
 * @Authorization [Employee]
 * @RequestParameters skillId - The id of the skill to edit
 * @Response Skills List
 */
router.delete('/my/:skillId', loggedIn, deleteEmployeeSkill);

/**
 * Employees Skills Tracking
 * @Authorization [TPD]
 * @Response List of current employees' skills
 */
router.get('/tracking/current', loggedIn, getSkillsTracking);

/**
 * Employees Skills History
 * @Authorization [TPD]
 * @Response List of history of employees' skills
 */
router.get('/tracking/history', loggedIn, getSkillsHistory);

export default router;
