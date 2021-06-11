import express from 'express';
import {
  getAllReleaseRequests,
  exportReleaseRequests,
  addReleaseRequest,
  getReleaseRequest,
  editReleaseRequest,
  getReleaseRequestsActions,
} from '../controllers';
import { loggedIn, tpdOnly, managerOnly } from '../services/Authorization';

const router = express.Router();

/**
 * List Release Requests
 * @Authorization [Manager, TPD]
 * @Response Release Requests List
 */
router.get('/', loggedIn, managerOnly, getAllReleaseRequests);

/**
 * Export Release Requests
 * @Authorization [Manager, TPD]
 * @Response Release Requests List
 */
router.get('/export', loggedIn, managerOnly, exportReleaseRequests);

/**
 * Add Release Request
 * @Authorization [Manager, TPD]
 * @RequestBody Release Request Data
 */
router.post('/', loggedIn, managerOnly, addReleaseRequest);

/**
 * Get a Release Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @Response Release request data
 */
router.get('/:requestId', loggedIn, managerOnly, getReleaseRequest);

/**
 * Edit a Release Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @RequestBody Updated Data
 * @Response Release request after modification
 */
router.patch('/:requestId', loggedIn, managerOnly, editReleaseRequest);

/**
 * Get Release Request Actions
 * @Authorization [TPD]
 * @Response All Reqlease Request Actions
 */
router.get('/actions', loggedIn, managerOnly, getReleaseRequestsActions);

export default router;
