import express from 'express';

/**
 * Gets all trainings of an employee
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getEmployeeTrainings = (req, res) => {
  res.send('Gets all trainings of an employee');
}

/**
 * Gets the tracking list of employees trainings
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getTrainingsHistory = (req, res) => {
  res.send('Gets the tracking list of employees trainings');
}
