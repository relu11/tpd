import express from "express";

import SkillService from "../services/SkillService";
import EmployeeSkillsService from "../services/EmployeeSkillsService";
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
export const editSkill = (req, res) => {
  const skill = SkillService.updateSkill(req.body);
  res.send({ skill });
};

/**
 * Deltes a skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const deleteSkill = (req, res) => {
  const skill = SkillService.deleteSkill(req.params.skillId);
  res.send({ skill });
};

/**
 * Gets all skills of an employee
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getEmployeeSkills = async (req, res) => {
  const skills = await EmployeeSkillsService.getAllEmployeesSkills(req.user.id);
  res.send({ skills });
};

/**
 * Adds an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.skill - Skill Data
 * @param {express.Response} res - Response Object
 */
export const addEmployeeSkill = (req, res) => {
  res.send("Adds an employee skill");
};

/**
 * Edits an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const editEmployeeSkill = (req, res) => {
  res.send("Edits an employee skill");
};

/**
 * Adds an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const deleteEmployeeSkill = (req, res) => {
  res.send("Adds an employee skill");
};

/**
 * Gets the tracking list of employees skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getSkillsTracking = (req, res) => {
  res.send("Gets the tracking list of employees skills");
};

/**
 * Gets the tracking list of employees skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getSkillsHistory = (req, res) => {
  res.send("Gets the tracking list of employees skills");
};
