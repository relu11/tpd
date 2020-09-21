import express from "express";
import ReleaseRequest from "../models/ReleaseRequest";
/**
 * Gets all release requests
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getAllReleaseRequests = (req, res) => {
  const user = ReleaseRequest.getReleaseRequests(function (data) {
    res.send(data);
  });
};

/**
 * Exports release requests to excel file
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const exportReleaseRequests = (req, res) => {
  res.send("Export All Release Requests");
};

/**
 * Adds a new release request
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {Object} req.body.releaseRequest - Release Request Data
 * @param {express.Response} res - Response Object
 */
export const addReleaseRequest = (req, res) => {
  var releaseRequest = new ReleaseRequest(
    req.body.managerName,
    req.body.employeeName,
    req.body.employeeID,
    req.body.employeeTitle,
    req.body.employeeFunction,
    req.body.releaseDate,
    req.body.propability,
    req.body.releasePercentage,
    req.body.releaseReason,
    req.body.leaving,
    req.body.requestStatus
  );
  releaseRequest.addReleaseRequest(function () {
    res.status(200);
    res.send("done");
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
  const user = ReleaseRequest.getReleaseRequest(req.params.requestId, function (
    data
  ) {
    res.send(data);
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
  var releaseRequest = new ReleaseRequest(
    req.body.managerName,
    req.body.employeeName,
    req.body.employeeID,
    req.body.employeeTitle,
    req.body.employeeFunction,
    req.body.releaseDate,
    req.body.propability,
    req.body.releasePercentage,
    req.body.releaseReason,
    req.body.leaving,
    req.body.requestStatus
  );
  releaseRequest.referenceNumber = req.params.requestId;
  releaseRequest.editReleaseRequest(function () {
    res.status(200);
    res.send("done");
  });
};

/**
 * Gets release requests actions
 * @param {express.Request} req - Request Object
 * @param {Object} req.user - Authorized user data
 * @param {express.Response} res - Response Object
 */
export const getReleaseRequestsActions = (req, res) => {
  res.send("Get All Release Requests Actions");
};
