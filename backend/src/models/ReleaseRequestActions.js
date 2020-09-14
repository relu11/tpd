import Model from "./Model";

class ReleaseRequestActions extends Model {
  constructor(actionId, requestReferenceNumber, action, actionNote) {
    super('');

    this.actionId = actionId;
    this.requestReferenceNumber = requestReferenceNumber;
    this.action = action;
    this.actionNote = actionNote;
  }
}

export default ReleaseRequestActions;
