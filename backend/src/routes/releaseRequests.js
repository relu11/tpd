import express from 'express';
import {
  getAllReleaseRequests, exportReleaseRequests, addReleaseRequest, getReleaseRequest,
  editReleaseRequest, getReleaseRequestsActions
} from '../controllers';

const router = express.Router();

/**
 * List Release Requests
 * @Authorization [Manager, TPD]
 * @Response Release Requests List
 */
router.get('/', getAllReleaseRequests);

/**
 * Export Release Requests
 * @Authorization [Manager, TPD]
 * @Response Release Requests List
 */
router.get('/export', exportReleaseRequests);

/**
 * Add Release Request
 * @Authorization [Manager, TPD]
 * @RequestBody Release Request Data
 */
router.post('/', addReleaseRequest);

/**
 * Get a Release Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @Response Release request data
 */
router.get('/:requestId', getReleaseRequest);

/**
 * Edit a Release Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @RequestBody Updated Data
 * @Response Release request after modification
 */
router.patch('/:requestId', editReleaseRequest);

/**
 * Get Release Request Actions
 * @Authorization [TPD]
 * @Response All Reqlease Request Actions
 */
router.get('/actions', getReleaseRequestsActions);

export default router;
