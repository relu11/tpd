class ResourceRequestService {
  /**
   * Gets all the resource requests | Only owner's requests if provided
   * @param {Object} [_filters] - Filters for retireved data
   * @param {Object} [_filters.owner] - Owner ID
   * @returns {Object[]}  All Resource Requests
   */
  static getAllResourceRequests(_filters) { /* */ }

  /**
   * Add a new request data
   * @param {Object} _requestData - New Request Data
   * @returns {Object} Added Request Data
   */
  static addResourceRequest(_requestData) { /* */ }

  /**
   * Updates a resource request
   * @param {Object} _requestData - Modified Request Data
   * @param {Number} _requestData.id - Resource Request ID
   * @returns {Object} Request data after modification
   */
  static updateResourceRequest(_requestData) { /* */ }

  /**
   * Deletes a resource request
   * @param {Number} _requestId - The ID of the resource request
   * @returns {Number} ID of deleted request
   */
  static deleteResourceRequest(_requestId) { /* */ }

  /**
   * Gets a specific resource request
   * @param {Number} _requestId - The ID of the resource request
   * @returns {Object} Request data
   */
  static getResourceRequest(_requestId) { /* */ }

  /**
   * Gets a specific resource request action
   * @param {Number} _actionId - The ID of the action
   * @returns {Object} Action data
   */
  static getResourceRequestAction(_actionId) { /* */ }

  /**
   * Adds a new resource request action
   * @param {Object} _actionData - The data of the new resource request action
   * @returns {Object} Added action data
   */
  static addResourceRequestAction(_actionData) { /* */ }

  /**
   * Updates a resource request action
   * @param {Object} _actionData - The modified data of the resource request action
   * @param {Number} _actionData.id - The ID of the resource request action
   * @returns {Object} Action Data after modification
   */
  static updateResourceRequestAction(_actionData) { /* */ }

  /**
   * Gets all the resource request actions
   * @returns {Object[]} All requests
   */
  static getAllResourceRequestActions() { /* */ }
}

export default ResourceRequestService;
