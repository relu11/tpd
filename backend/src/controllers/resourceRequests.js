import express from 'express';
import ResourceRequest from '../models/ResourceRequest';
import ResourceRequestActions from '../models/ResourceRequestActions';

const Json2csvParser = require('json2csv').Parser;
/**
 * Gets all resource requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllResourceRequests = async (req, res) => {
  const requests = await ResourceRequest.findAll();
  res.send({ requests });
};

/**
 * Exports resource requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportResourceRequests = (req, res) => {
  const user = ResourceRequest.getResourceRequests(function (data) {
    const jsonCustomers = JSON.parse(JSON.stringify(data));
    const csvFields = [
      'reference_number',
      'manager_name',
      'function',
      'title',
      'start_date',
      'release_date',
      'propability',
      'percentage',
      'status',
      'core_team_member',
      'replacenement',
      'replacenement_for',
      'requests_count',
      'related_opportunity',
      'comments',
      'assigned_resource',
      'actual_percentage',
    ];
    const json2csvParser = new Json2csvParser({ csvFields });
    const csv = json2csvParser.parse(jsonCustomers);

    res.attachment('ResourceRequests.csv');
    res.type('csv');
    res.download(csv, 'ResourceRequests.csv');
    res.status(200);
    res.send(csv);
  });
};

/**
 * Adds a new resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.resourceRequest - Resource Request Data
 * @param {express.Response} res - Response Object
 */
export const addResourceRequest = async (req, res) => {
  const {
    managerName,
    title,
    startDate,
    endDate,
    probability,
    percentage,
    coreTeamMember,
    replacement,
    replacementFor,
    requestsCount,
    relatedOpportunity,
    comments,
  } = req.body;

  const newRequest = await ResourceRequest.create({
    managerName,
    title,
    startDate,
    endDate,
    probability,
    percentage,
    coreTeamMember,
    replacement,
    replacementFor,
    requestsCount,
    relatedOpportunity,
    comments,
    function: req.body.function,
  });
  res.send({ request: newRequest });
};

/**
 * Gets a resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.requestId - The ID of the resource request
 * @param {express.Response} res - Response Object
 */
export const getResourceRequest = async (req, res) => {
  const request = await ResourceRequest.findByPk(req.params.requestId);
  res.send({ request });
};

/**
 * Edits a resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.resourceRequest - Modified Resource Request Data
 * @param {express.Response} res - Response Object
 */
export const editResourceRequest = async (req, res) => {
  const {
    managerName,
    title,
    startDate,
    endDate,
    probability,
    percentage,
    coreTeamMember,
    replacement,
    replacementFor,
    requestsCount,
    relatedOpportunity,
    comments,
    assignedResource,
    actualPercentage,
    status,
    actionChanged,
    actionTaken,
  } = req.body;

  const resourceRequest = await ResourceRequest.findByPk(req.params.requestId);
  await resourceRequest.update({
    managerName,
    title,
    startDate,
    endDate,
    probability,
    percentage,
    coreTeamMember,
    replacement,
    replacementFor,
    requestsCount,
    relatedOpportunity,
    comments,
    assignedResource,
    actualPercentage,
    status,
    function: req.body.function,
  });

  if (actionChanged) {
    const [
      resourceRequestAction,
      created,
    ] = await ResourceRequestActions.findOrCreate({
      where: { actionId: req.params.requestId },
      defaults: {
        action: actionTaken,
      },
    });

    if (!created) {
      await resourceRequestAction.update({
        action: actionTaken,
      });
    }

    res.send({ request: resourceRequest });
  }
};

/**
 * Gets resource requests actions
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getResourceRequestsActions = (req, res) => {
  res.send('Get All Resource Requests Actions');
};
