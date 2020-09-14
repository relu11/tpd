class EmployeeAssignmentService {
  /**
   * Creates a new employee assignment
   * @param {Object} _assignmentData New assignment data
   * @returns {Object} Assignment data
   */
  static addEmployeeAssignment(_assignmentData) { /* */ }

  /**
   * Updates assignment data
   * @param {Object} _assignmentData Modified assignment data
   * @returns {Object} Assignment data after modification
   */
  static updateEmployeeAssignment(_assignmentData) { /* */ }

  /**
   * Deletes an assignment
   * @param {Number} _assignmentId The ID of the assignment to delete
   * @returns {Number} The ID of the deleted assignment
   */
  static deleteEmployeeAssignment(_assignmentId) { /* */ }

  /**
   * Get an assignment
   * @param {Number} _assignmentId The ID of the assignment
   */
  static getEmployeeAssignment(_assignmentId) { /* */ }

  /**
   *
   * @param {Object} _filters - Filters for retireved data
   * @param {String} _filters.employeeId - Employee ID
   * @returns {Object[]} All assignments of the employee
   */
  static getAllEmployeeAssignments(_filters) { /* */ }
}

export default EmployeeAssignmentService;
