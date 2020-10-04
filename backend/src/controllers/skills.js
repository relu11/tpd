import express from 'express';

import SkillService from '../services/SkillService';
import EmployeeSkillsService from '../services/EmployeeSkillsService';
import Employee from '../models/Employee';
import EmployeeSkill from '../models/EmployeeSkills';
/**
 * Gets all skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllSkills = async (req, res) => {
  const skills = await SkillService.getAllSkills();
  res.send({ skills });
};
export const getSkill = async (req, res) => {
  const skill = await SkillService.getSkill(req.params.skillId);
  res.send({ skill });
};
/**
 * Adds a new skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.skill - Skill Data
 * @param {express.Response} res - Response Object
 */
export const addSkill = async (req, res) => {
  const skill = SkillService.addSkill(req.body);
  res.send({ skill });
};

/**
 * Edits a skill
 * @param {express.Request} req - Request Object
 * @param {Number} req.params.skillId - Skill ID
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const editSkill = async (req, res) => {
  console.log(req.params.skillId, req.body);
  const skill = await SkillService.updateSkill(req.params.skillId, req.body);
  res.send({ skill });
};

/**
 * Deltes a skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const deleteSkill = async (req, res) => {
  const skill = await SkillService.deleteSkill(req.params.skillId);
  res.send({ skill });
};

/**
 * Gets all skills of an employee
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getEmployeeSkills = async (req, res) => {
  const skills = await EmployeeSkillsService.getAllEmployeesSkills(
    req.user.employeeId
  );
  res.send({ skills });
};

/**
 * Adds an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.skill - Skill Data
 * @param {express.Response} res - Response Object
 */
export const addEmployeeSkill = async (req, res) => {
  const skill = await EmployeeSkillsService.addEmployeeSkill(
    req.body,
    req.user.employeeId
  );
  res.send({ skill });
};

/**
 * Getss an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const getEmployeeSkill = async (req, res) => {
  const skill = await EmployeeSkillsService.getEmployeeSkill(
    req.params.skillId,
    req.user.employeeId
  );
  res.send({ skill });
};
/**
 * Edits an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const editEmployeeSkill = async (req, res) => {
  await EmployeeSkillsService.updateEmployeeSkill(
    req.body,
    req.user.employeeId
  );
  res.send({ skillId: req.params.skillId });
};

/**
 * Adds an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const deleteEmployeeSkill = async (req, res) => {
  const skill = await EmployeeSkillsService.deleteEmployeeSkill(
    req.params.skillId,
    req.user.employeeId
  );
  res.send({ skill });
};

/**
 * Gets the tracking list of employees skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getSkillsTracking = (req, res) => {
  res.send('Gets the tracking list of employees skills');
};

/**
 * Gets the tracking list of employees skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getSkillsHistory = (req, res) => {
  res.send('Gets the tracking list of employees skills');
};
