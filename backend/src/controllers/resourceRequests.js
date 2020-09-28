import express from 'express';
import ResourceRequest from '../models/ResourceRequest';
/**
 * Gets all resource requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllResourceRequests = (req, res) => {
  ResourceRequest.getResourceRequests(requests => {
    res.send({ requests });
  });
};

/**
 * Exports resource requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportResourceRequests = (req, res) => {
  res.send('Export All Resource Requests');
};

/**
 * Adds a new resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.resourceRequest - Resource Request Data
 * @param {express.Response} res - Response Object
 */
export const addResourceRequest = (req, res) => {
  const resourceRequest = new ResourceRequest(
    req.body.manager_name,
    req.body.function,
    req.body.title,
    req.body.start_date,
    req.body.end_date,
    req.body.probability,
    req.body.percentage,
    req.body.core_team_member,
    req.body.replacement,
    req.body.replecement_for,
    req.body.requests_count,
    req.body.related_opportunity,
    req.body.comments
  );
  resourceRequest.addResourceRequest(() => {
    res.send('done');
  });
};

/**
 * Gets a resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Number} req.params.requestId - The ID of the resource request
 * @param {express.Response} res - Response Object
 */
export const getResourceRequest = (req, res) => {
  ResourceRequest.getResourceRequest(req.params.requestId, request => {
    res.send({ request });
  });
};

/**
 * Edits a resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.resourceRequest - Modified Resource Request Data
 * @param {express.Response} res - Response Object
 */
export const editResourceRequest = (req, res) => {
  const resourceRequest = new ResourceRequest(
    req.body.manager_name,
    req.body.function,
    req.body.title,
    req.body.start_date,
    req.body.end_date,
    req.body.probability,
    req.body.percentage,
    req.body.core_team_member,
    req.body.replacement,
    req.body.replecement_for,
    req.body.requests_count,
    req.body.related_oppoortunity,
    req.body.comments,
    req.body.assigned_resource,
    req.body.actual_percentage,
    req.body.status
  );
  resourceRequest.setReferenceNumber(req.params.requestId);
  resourceRequest.editResourceRequest(() => {
    if (req.body.actionChanged) {
      resourceRequest.updateActionTaken(
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
 * Gets resource requests actions
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getResourceRequestsActions = (req, res) => {
  res.send('Get All Resource Requests Actions');
};
