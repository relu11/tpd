import express from 'express';

/**
 * Gets all release requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllReleaseRequests = (req, res) => {
  res.send('Get All Release Requests');
}

/**
 * Exports release requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportReleaseRequests = (req, res) => {
  res.send('Export All Release Requests');
}

/**
 * Adds a new release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.releaseRequest - Release Request Data
 * @param {express.Response} res - Response Object
 */
export const addReleaseRequest = (req, res) => {
  res.send('Add a Release Request');
}

/**
 * Gets a release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.requestId - The ID of the release request
 * @param {express.Response} res - Response Object
 */
export const getReleaseRequest = (req, res) => {
  res.send('Get a Release Request');
}

/**
 * Edits a release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.releaseRequest - Modified Release Request Data
 * @param {express.Response} res - Response Object
 */
export const editReleaseRequest = (req, res) => {
  res.send('Edit a Release Requests');
}

/**
 * Gets release requests actions
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getReleaseRequestsActions = (req, res) => {
  res.send('Get All Release Requests Actions');
}
