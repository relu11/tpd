import express from "express";
import { logIn } from "../controllers/user";
const router = express.Router();

/**
 * login
 * @Authorization [Employee]
 * @RequestBody User data
 * @Response Authentication token
 */
router.post("/", logIn);

export default router;
