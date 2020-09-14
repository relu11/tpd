import express from 'express';

/**
 * Gets all resource requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllResourceRequests = (req, res) => {
  res.send('Get All Resource Requests');
}

/**
 * Exports resource requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportResourceRequests = (req, res) => {
  res.send('Export All Resource Requests');
}

/**
 * Adds a new resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.resourceRequest - Resource Request Data
 * @param {express.Response} res - Response Object
 */
export const addResourceRequest = (req, res) => {
  res.send('Add a Resource Request');
}

/**
 * Gets a resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.requestId - The ID of the resource request
 * @param {express.Response} res - Response Object
 */
export const getResourceRequest = (req, res) => {
  res.send('Get a Resource Request');
}

/**
 * Edits a resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.resourceRequest - Modified Resource Request Data
 * @param {express.Response} res - Response Object
 */
export const editResourceRequest = (req, res) => {
  res.send('Edit a Resource Requests');
}

/**
 * Gets resource requests actions
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getResourceRequestsActions = (req, res) => {
  res.send('Get All Resource Requests Actions');
}
