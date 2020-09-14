import express from 'express';

/**
 * Gets all employees
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllEmployees = (req, res) => {
  res.send('Get All Employees');
}

/**
 * Gets all employees
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {express.Response} res - Response Object
 */
export const getEmployee = (req, res) => {
  res.send('Get Employee');
}

/**
 * Edits an Employee Assignment
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {Object} req.params.assignmentId - Assignment ID
 * @param {express.Response} res - Response Object
 */
export const editEmployeeAssignment = (req, res) => {
  res.send('Edit an Employees');
}

/**
 * Adds an Employee Assignment
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {express.Response} res - Response Object
 */
export const addAssignment = (req, res) => {
  res.send('Add an Employees');
}

/**
 * Deletes an Employee Assignment
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {Object} req.params.assignmentId - Assignment ID
 * @param {express.Response} res - Response Object
 */
export const deleteEmployeeAssignment = (req, res) => {
  res.send('Delete an Employees');
}

/**
 * Exports Employees List
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {Object} req.params.assignmentId - Assignment ID
 * @param {express.Response} res - Response Object
 */
export const exportEmployeesList = (req, res) => {
  res.send('Export Employees List');
}
