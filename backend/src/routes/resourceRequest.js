import express from "express";
import {
  getAllResourceRequests,
  exportResourceRequests,
  addResourceRequest,
  getResourceRequest,
  editResourceRequest,
  getResourceRequestsActions,
} from "../controllers";

const router = express.Router();

/**
 * List Resource Requests
 * @Authorization [Manager, TPD]
 * @Response Resource Requests List
 */
router.get("/", getAllResourceRequests);

/**
 * Export Resource Requests
 * @Authorization [Manager, TPD]
 * @Response Resource Requests List
 */
router.get("/export", exportResourceRequests);

/**
 * Add Resource Request
 * @Authorization [Manager, TPD]
 * @RequestBody Resource Request Data
 */
router.post("/", addResourceRequest);

/**
 * Get a Resource Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @Response Resource request data
 */
router.get("/:requestId", getResourceRequest);

/**
 * Edit a Resource Request
 * @Authorization [Manager: Request Owner, TPD]
 * @RequestParameters Request ID
 * @RequestBody Updated Data
 * @Response Resource request after modification
 */
router.patch("/:requestId", editResourceRequest);

/**
 * Get Resource Request Actions
 * @Authorization [TPD]
 * @Response All Resource Request Actions
 */
router.get("/actions", getResourceRequestsActions);

export default router;
