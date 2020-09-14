import express from 'express';

/**
 * Gets all skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllSkills = (req, res) => {
  res.send('Get All Skills');
}

/**
 * Adds a new skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.skill - Skill Data
 * @param {express.Response} res - Response Object
 */
export const addSkill = (req, res) => {
  res.send('Adds a new skill');
}

/**
 * Edits a skill
 * @param {express.Request} req - Request Object
 * @param {Number} req.params.skillId - Skill ID
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const editSkill = (req, res) => {
  res.send('Edits a skill');
}

/**
 * Deltes a skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const deleteSkill = (req, res) => {
  res.send('Deltes a skill');
}

/**
 * Gets all skills of an employee
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getEmployeeSkills = (req, res) => {
  res.send('Gets all skills of an employee');
}

/**
 * Adds an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.skill - Skill Data
 * @param {express.Response} res - Response Object
 */
export const addEmployeeSkill = (req, res) => {
  res.send('Adds an employee skill');
}

/**
 * Edits an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const editEmployeeSkill = (req, res) => {
  res.send('Edits an employee skill');
}

/**
 * Adds an employee skill
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.skillId - Skill ID
 * @param {express.Response} res - Response Object
 */
export const deleteEmployeeSkill = (req, res) => {
  res.send('Adds an employee skill');
}

/**
 * Gets the tracking list of employees skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getSkillsTracking = (req, res) => {
  res.send('Gets the tracking list of employees skills');
}

/**
 * Gets the tracking list of employees skills
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getSkillsHistory = (req, res) => {
  res.send('Gets the tracking list of employees skills');
}
