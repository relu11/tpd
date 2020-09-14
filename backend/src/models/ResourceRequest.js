import Model from "./Model";

class ResourceRequest extends Model {
  constructor(referenceNumber, managerName, employeeFunction, title, startDate, endDate,
    propability, percentage, status, coreTeamMember, replacement, replecementFor, requestsCount,
    relatedOppoortunity, comments, assignedResource, actualPercentage) {
    super('');

    this.referenceNumber = referenceNumber;
    this.managerName = managerName;
    this.employeeFunction = employeeFunction;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.propability = propability;
    this.relatedOppoortunity = relatedOppoortunity;
    this.percentage = percentage;
    this.status = status;
    this.coreTeamMember = coreTeamMember;
    this.replacement = replacement;
    this.replecementFor = replecementFor;
    this.requestsCount = requestsCount;
    this.comments = comments;
    this.assignedResource = assignedResource;
    this.actualPercentage = actualPercentage;
  }
}

export default ResourceRequest;
