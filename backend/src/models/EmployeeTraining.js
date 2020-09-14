import Model from "./Model";

class EmployeeTraining extends Model {
  constructor(employeeID, trainingActivityName, trainingEventName, eventFromDate, eventToDate,
    totalTrainingHours) {
    super('');
    this.employeeID = employeeID;
    this.trainingActivityName = trainingActivityName;
    this.trainingEventName = trainingEventName;
    this.eventFromDate = eventFromDate;
    this.eventToDate = eventToDate;
    this.totalTrainingHours = totalTrainingHours;
  }
}

export default EmployeeTraining;
