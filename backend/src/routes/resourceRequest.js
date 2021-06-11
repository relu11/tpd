import express from 'express';
import {
  getAllResourceRequests,
  exportResourceRequests,
  addResourceRequest,
  getResourceRequest,
  editResourceRequest,
  getResourceRequestsActions,
} from '../controllers';
import { loggedIn, managerOnly } from '../services/Authorization';

const router = express.Router();

/**
 * List Resource Requests
 * @Authorization [Manager, TPD]
 * @Response Resource Requests List
 */
router.get('/', loggedIn, managerOnly, getAllResourceRequests);

/**
 * Export Resource Requests
 * @Authorization [Manager, TPD]
 * @Response Resource Requests List
 */
router.get('/export', loggedIn, managerOnly, exportResourceRequests);

/**
 * Add Resource Request
 * @Authorization [Manager, TPD]
 * @RequestBody Resource Request Data
 */
router.post('/', loggedIn, managerOnly, addResourceRequest);

/**
 * Get a Resource Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @Response Resource request data
 */
router.get('/:requestId', loggedIn, managerOnly, getResourceRequest);

/**
 * Edit a Resource Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @RequestBody Updated Data
 * @Response Resource request after modification
 */
router.patch('/:requestId', loggedIn, managerOnly, editResourceRequest);

/**
 * Get Resource Request Actions
 * @Authorization [TPD]
 * @Response All Resource Request Actions
 */
router.get('/actions', loggedIn, managerOnly, getResourceRequestsActions);

export default router;
