class ResourceRequestService {
  /**
   * Gets all the resource requests | Only owner's requests if provided
   * @param {String} _owner - Owner ID
   */
  getAllResourceRequests(_owner) { /* */ }

  /**
   * Add a new request data
   * @param {Object} _requestData - New Request Data
   */
  addResourceRequest(_requestData) { /* */ }

  /**
   * Updates a resource request
   * @param {Object} _requestData - Modified Request Data
   * @param {Number} _requestData.id - Resource Request ID
   */
  updateResourceRequest(_requestData) { /* */ }

  /**
   * Deletes a resource request
   * @param {Number} _requestId - The ID of the resource request
   */
  deleteResourceRequest(_requestId) { /* */ }

  /**
   * Gets a specific resource request
   * @param {Number} _requestId - The ID of the resource request
   */
  getResourceRequest(_requestId) { /* */ }

  /**
   * Gets a specific resource request action
   * @param {Number} _actionId - The ID of the action
   */
  getResourceRequestAction(_actionId) { /* */ }

  /**
   * Adds a new resource request action
   * @param {Object} _actionData - The data of the new resource request action
   */
  addResourceRequestAction(_actionData) { /* */ }

  /**
   * Updates a resource request action
   * @param {Object} _actionData - The modified data of the resource request action
   * @param {Number} _actionData.id - The ID of the resource request action
   */
  updateResourceRequestAction(_actionData) { /* */ }

  /**
   * Gets all the resource request actions
   */
  getAllResourceRequestActions() { /* */ }
}

export default ResourceRequestService;
