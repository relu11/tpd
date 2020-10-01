import express from 'express';
import { Parser as Json2csvParser } from 'json2csv';
import ReleaseRequest from '../models/ReleaseRequest';
import ReleaseRequestActions from '../models/ReleaseRequestActions';

/**
 * Gets all release requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllReleaseRequests = async (req, res) => {
  const requests = await ReleaseRequest.findAll();
  res.send({ requests });
};

/**
 * Exports release requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportReleaseRequests = async (req, res) => {
  const data = await ReleaseRequest.findAll();
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
};

/**
 * Adds a new release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.releaseRequest - Release Request Data
 * @param {express.Response} res - Response Object
 */
export const addReleaseRequest = async (req, res) => {
  const {
    managerName,
    employeeName,
    employeeId,
    employeeTitle,
    releaseDate,
    probability,
    releasePercentage,
    releaseReason,
    leaving,
  } = req.body;
  // reference number is auto incremented
  const request = await ReleaseRequest.create({
    managerName,
    employeeName,
    employeeId,
    employeeTitle,
    releaseDate,
    probability,
    releasePercentage,
    releaseReason,
    leaving,
    function: req.body.function,
  });
  res.send({ request });
};

/**
 * Gets a release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.requestId - The ID of the release request
 * @param {express.Response} res - Response Object
 */
export const getReleaseRequest = async (req, res) => {
  const request = await ReleaseRequest.findByPk(req.params.requestId);
  res.send({ request });
};

/**
 * Edits a release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.releaseRequest - Modified Release Request Data
 * @param {express.Response} res - Response Object
 */
export const editReleaseRequest = async (req, res) => {
  const {
    referenceNumber,
    managerName,
    employeeName,
    employeeId,
    employeeTitle,
    releaseDate,
    probability,
    releasePercentage,
    releaseReason,
    leaving,
    requestStatus,
    actionChanged,
    actionTaken,
    comments,
  } = req.body;

  const releaseRequest = await ReleaseRequest.findByPk(referenceNumber);

  await releaseRequest.update({
    managerName,
    employeeName,
    employeeId,
    employeeTitle,
    releaseDate,
    probability,
    releasePercentage,
    releaseReason,
    leaving,
    requestStatus,
    function: req.body.function,
  });

  if (actionChanged) {
    const [
      releaseRequestAction,
      created,
    ] = await ReleaseRequestActions.findOrCreate({
      where: { actionId: referenceNumber },
      defaults: {
        action: actionTaken,
        actionNote: comments,
      },
    });

    if (!created) {
      await releaseRequestAction.update({
        action: actionTaken,
        actionNote: comments,
      });
    }
  }

  res.send({ request: releaseRequest });
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
