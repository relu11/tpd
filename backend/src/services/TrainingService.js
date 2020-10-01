import EmployeeTraining from '../models/EmployeeTraining';
class TrainingService {
  /**
   * Gets all Trainings
   * @param {Object} [_filters] - Filters for retireved data
   * @returns {Object[]} All Trainings
   */
  static async getAllTrainings(_filters) {
    const trainings = await EmployeeTraining.findAll();
    return trainings;
  }

  /**
   * Creates new Training
   * @param {Object} _TrainingData New Training data
   * @returns {Object} New Training data
   */
  static addTraining(_TrainingData) {
    /* */
  }

  /**
   * Updates Training data
   * @param {Object} _TrainingData Updated Training data
   * @returns {Object} Training data after modification
   */
  static updateTraining(_TrainingData) {
    /* */
  }

  /**
   * Deletes a Training
   * @param {Number} _TrainingID - ID of the Training to delete
   */
  static deleteTraining(_TrainingID) {
    /* */
  }

  /**
   * Gets a Training
   * @param {Number} _TrainingID - The ID of the Training
   * @returns {Object} Training data
   */
  static getTraining(_TrainingID) {
    /* */
  }
}

export default TrainingService;
