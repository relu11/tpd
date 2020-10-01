import Assignment from '../models/Assignment';
class EmployeeAssignmentService {
  /**
   * Creates a new employee assignment
   * @param {Object} _assignmentData New assignment data
   * @returns {Object} Assignment data
   */
  static addEmployeeAssignment(_assignmentData) {
    const assignment = Assignment.findAll({
      where: {},
    });
  }

  /**
   * Updates assignment data
   * @param {Object} _assignmentData Modified assignment data
   * @returns {Object} Assignment data after modification
   */
  static updateEmployeeAssignment(_assignmentData) {
    /* */
  }

  /**
   * Deletes an assignment
   * @param {Number} _assignmentId The ID of the assignment to delete
   * @returns {Number} The ID of the deleted assignment
   */
  static deleteEmployeeAssignment(_assignmentId) {
    /* */
  }

  /**
   * Get an assignment
   * @param {Number} _assignmentId The ID of the assignment
   */
  static async getEmployeeAssignment(_assignmentId) {
    const assignment = await Assignment.findAll({
      where: { assignmentId: _assignmentId },
    });
    return assignment;
  }

  /**
   *
   * @param {Object} _filters - Filters for retireved data
   * @param {String} _filters.employeeId - Employee ID
   * @returns {Object[]} All assignments of the employee
   */
  static async getAllEmployeeAssignments(_filters) {
    const assignment = await Assignment.findAll({
      where: { employeeId: _filters },
    });
    return assignment;
  }
}

export default EmployeeAssignmentService;
