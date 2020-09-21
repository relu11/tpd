import express from "express";
import Manger from "../models/Manager";
/**
 * Gets all employees
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */

export const getAllManagers = (req, res) => {
  const manager = Manger.getManagers(function (data) {
    res.send(data);
  });
};
/**
 * Gets all employees
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.params.employeeId - Employee ID
 * @param {express.Response} res - Response Object
 */
export const getManager = (req, res) => {
  const manager = Manger.getManager(req.body.id, function (data) {
    res.send(data);
  });
};
