import express from 'express';
import Employee from '../models/Employee';
import EmployeeService from '../services/EmployeeService';
import EmployeeSkillsService from '../services/EmployeeSkillsService';
/**
 * Gets all employees
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllEmployees = async (req, res) => {
  const employees = await EmployeeService.getEmployeesList();
  res.send({ employees });
};

/**
 * Gets all employees
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {express.Response} res - Response Object
 */
export const getEmployee = async (req, res) => {
  const employeeProfile = await EmployeeService.getEmployee(
    '00376965-8F0E-4272-98AA-052DA616E8C1'
  );

  res.send(employeeProfile);
};

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
};

/**
 * Adds an Employee Assignment
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {express.Response} res - Response Object
 */
export const addAssignment = (req, res) => {
  res.send('Add an Employees');
};

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
};

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
};
