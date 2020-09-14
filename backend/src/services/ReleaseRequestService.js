class ReleaseRequestService {
  /**
   * Gets all release requests either owned by the given owner or all of them
   * @param {Number} [_owner] - The owner of the requests || All requests if null
   * @returns {Object[]} Release Requqests
   */
  static getAllReleaseRequests(_owner) { /* */ }

  /**
   * Adds a new request
   * @param {Object} _requestData - The data of the new request
   */
  static addReleaseRequest(_requestData) { /* */ }

  /**
   * Updates a request
   * @param {Object} _requestData - New request data
   */
  static updateReleaseRequest(_requestData) { /* */ }

  /**
   * Deletes the request with the given ID
   * @param {Number} _requestId - The id of request
   */
  static deleteReleaseRequest(_requestId) { /* */ }

  /**
   * @param {Number} _requestId - Gets a relase reques
   */
  static getReleaseRequest(_requestId) { /* */ }

  /**
   * Gets a specific release request action
   * @param {Number} _actionId - The ID of the action
   */
  static getReleaseRequestAction(_actionId) { /* */ }

  /**
   * Adds a new release request action
   * @param {Object} _actionData - Action Data
   */
  static addReleaseRequestAction(_actionData) { /* */ }

  /**
   * Updates a specific action
   * @param {Number} _actionId - The id of the action
   */
  static updateReleaseRequestAction(_actionId) { /* */ }

  /**
   * Gets all release requests actions
   */
  static getAllReleaseRequestActions() { /* */ }

  /**
   * Deletes a specific release requests action
   * @param {Number} _actionId - The id of the action
   */
  static deleteReleaseRequestAction(_actionId) { /* */ }
}

export default ReleaseRequestService;
