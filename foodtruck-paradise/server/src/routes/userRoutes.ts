import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

// GET /api/users - Get all users
router.get("/", UserController.getAllUsers);

// POST /api/users/sync - Sync user
router.post("/sync", UserController.syncUser);

export default router;