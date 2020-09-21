import express from "express";
import ReleaseRequest from "../models/ReleaseRequest";
import ResourceRequest from "../models/ResourceRequest";
/**
 * Gets all resource requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllResourceRequests = (req, res) => {
  ResourceRequest.getResourceRequests(function (data) {
    res.send(data);
  });
};

/**
 * Exports resource requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportResourceRequests = (req, res) => {
  res.send("Export All Resource Requests");
};

/**
 * Adds a new resource request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.resourceRequest - Resource Request Data
 * @param {express.Response} res - Response Object
 */
export const addResourceRequest = (req, res) => {
  var resourceRequest = new ResourceRequest(
    req.body.managerName,
    req.body.employeeFunction,
    req.body.title,
    req.body.startDate,
    req.body.endDate,
    req.body.propability,
    req.body.percentage,
    req.body.status,
    req.body.coreTeamMember,
    req.body.replacement,
    req.body.replecementFor,
    req.body.requestsCount,
    req.body.relatedOppoortunity,
    req.body.comments,
    req.body.assignedResource,
    req.body.actualPercentage
  );
  resourceRequest.addResourceRequest(function () {
    res.send("done");
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
  ResourceRequest.getResourceRequest(req.params.requestId, function (data) {
    res.send(data);
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
  var resourceRequest = new ResourceRequest(
    req.body.managerName,
    req.body.employeeFunction,
    req.body.title,
    req.body.startDate,
    req.body.endDate,
    req.body.propability,
    req.body.percentage,
    req.body.status,
    req.body.coreTeamMember,
    req.body.replacement,
    req.body.replecementFor,
    req.body.requestsCount,
    req.body.relatedOppoortunity,
    req.body.comments,
    req.body.assignedResource,
    req.body.actualPercentage
  );
  resourceRequest.setReferenceNumber(req.params.requestId);
  resourceRequest.editResourceRequest(function () {
    res.status(200);
    res.send("done");
  });
};

/**
 * Gets resource requests actions
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getResourceRequestsActions = (req, res) => {
  res.send("Get All Resource Requests Actions");
};
