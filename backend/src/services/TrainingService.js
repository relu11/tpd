import EmployeeTraining from '../models/EmployeeTraining';
class TrainingService {
  /**
   * Gets all Trainings
   * @param {Object} [_filters] - Filters for retireved data
   * @returns {Object[]} All Trainings
   */
  static async getAllTrainings(_filters) {
    const trainings = await EmployeeTraining.getTrainings();
    return trainings;
  }

  /**
   * Gets a Training
   * @param {Number} _TrainingID - The ID of the Training
   * @returns {Object} Training data
   */
  static async getEmployeeTraining(_employeeId) {
    const trainings = await EmployeeTraining.getEmployeeTraining(_employeeId);
    return trainings;
  }
}

export default TrainingService;
