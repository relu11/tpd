import express from 'express';
import TrainingService from '../services/TrainingService';
/**
 * Gets all trainings of an employee
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getEmployeeTrainings = (req, res) => {
  const trainings = TrainingService.getEmployeeTraining(req.user.employeeId);
  res.send({ trainings });
};

/**
 * Gets the tracking list of employees trainings
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllTrainings = (req, res) => {
  const trainings = TrainingService.getAllTrainings();
  res.send({ trainings });
};
