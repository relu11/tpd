class ReleaseRequestService {
  /**
   * Gets all release requests either owned by the given owner or all of them
   * @param {Object} [_filters] - Filters for retireved data
   * @param {Object} [_filters.owner] - The owner of the requests || All requests if null
   * @returns {Object[]} Release Requqests
   */
  static getAllReleaseRequests(_filters) { /* */ }

  /**
   * Adds a new request
   * @param {Object} _requestData - The data of the new request
   * @returns {Object} Created request data
   */
  static addReleaseRequest(_requestData) { /* */ }

  /**
   * Updates a request
   * @param {Object} _requestData - New request data
   * @returns {Object} Request data after modification
   */
  static updateReleaseRequest(_requestData) { /* */ }

  /**
   * Deletes the request with the given ID
   * @param {Number} _requestId - The id of request
   * @returns {Number} ID of deleted request
   */
  static deleteReleaseRequest(_requestId) { /* */ }

  /**
   * @param {Number} _requestId - Gets a relase reques
   * @returns {Object} Request data
   */
  static getReleaseRequest(_requestId) { /* */ }

  /**
   * Gets a specific release request action
   * @param {Number} _actionId - The ID of the action
   * @returns {Object} Action Data
   */
  static getReleaseRequestAction(_actionId) { /* */ }

  /**
   * Adds a new release request action
   * @param {Object} _actionData - Action Data
   * @returns {Object} Created Action Data
   */
  static addReleaseRequestAction(_actionData) { /* */ }

  /**
   * Updates a specific action
   * @param {Number} _actionId - The id of the action
   * @returns {Object} Action data after modification
   */
  static updateReleaseRequestAction(_actionId) { /* */ }

  /**
   * Gets all release requests actions
   * @returns {Object[]} All requests
   */
  static getAllReleaseRequestActions() { /* */ }

  /**
   * Deletes a specific release requests action
   * @param {Number} _actionId - The id of the action
   * @returns {Number} ID of deleted action
   */
  static deleteReleaseRequestAction(_actionId) { /* */ }
}

export default ReleaseRequestService;
