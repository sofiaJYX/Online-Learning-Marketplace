import express from "express";
import { updateUser } from "../controllers/userClerkController";

const router = express.Router();

// endpoint(routes) for user
router.get("/:userId", updateUser);

export default router;