import express from 'express';
import ReleaseRequest from '../models/ReleaseRequest';
const Json2csvParser = require('json2csv').Parser;
/**
 * Gets all release requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllReleaseRequests = (req, res) => {
  ReleaseRequest.getReleaseRequests(requests => {
    res.send({ requests });
  });
};

/**
 * Exports release requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportReleaseRequests = (req, res) => {
  const user = ReleaseRequest.getReleaseRequests(function (data) {
    const jsonCustomers = JSON.parse(JSON.stringify(data));
    const csvFields = [
      'reference_number',
      'manager_name',
      'employee_name',
      'employee_id',
      'employee_title',
      'function',
      'release_date',
      'propability',
      'release_percentage',
      'release_reason',
      'leaving',
      'request_status',
    ];
    const json2csvParser = new Json2csvParser({ csvFields });
    const csv = json2csvParser.parse(jsonCustomers);

    res.attachment('ReleaseRequests.csv');
    res.type('csv');
    res.download(csv, 'ReleaseRequests.csv');
    res.status(200);
    res.send(csv);
  });
};

/**
 * Adds a new release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.releaseRequest - Release Request Data
 * @param {express.Response} res - Response Object
 */
export const addReleaseRequest = (req, res) => {
  const releaseRequest = new ReleaseRequest(
    req.body.manager_name,
    req.body.employee_name,
    req.body.employee_id,
    req.body.employee_title,
    req.body.function,
    req.body.release_date,
    req.body.probability,
    req.body.release_percentage,
    req.body.release_reason,
    req.body.leaving
  );
  releaseRequest.addReleaseRequest(() => {
    res.status(200);
    res.send('done');
  });
};

/**
 * Gets a release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.requestId - The ID of the release request
 * @param {express.Response} res - Response Object
 */
export const getReleaseRequest = (req, res) => {
  ReleaseRequest.getReleaseRequest(req.params.requestId, request => {
    res.send({ request });
  });
};

/**
 * Edits a release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.releaseRequest - Modified Release Request Data
 * @param {express.Response} res - Response Object
 */
export const editReleaseRequest = (req, res) => {
  const releaseRequest = new ReleaseRequest(
    req.body.manager_name,
    req.body.employee_name,
    req.body.employee_id,
    req.body.employee_title,
    req.body.function,
    req.body.release_date,
    req.body.probability,
    req.body.release_percentage,
    req.body.release_reason,
    req.body.leaving,
    req.body.release_status
  );
  releaseRequest.referenceNumber = req.params.requestId;
  releaseRequest.editReleaseRequest(() => {
    console.log(req.body.actionChanged);
    if (req.body.actionChanged) {
      releaseRequest.updateActionTaken(
        req.body.action_taken,
        req.body.comments,
        () => {
          res.status(200);
          res.send('done');
        }
      );
    } else {
      res.status(200);
      res.send('done');
    }
  });
};

/**
 * Gets release requests actions
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getReleaseRequestsActions = (req, res) => {
  res.send('Get All Release Requests Actions');
};
