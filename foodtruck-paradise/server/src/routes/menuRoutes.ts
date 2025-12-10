import { Router } from "express";
import { MenuController } from "../controllers/menuController";

const router = Router();

// GET /api/menu - Get all menu items (with optional category filter)
router.get("/", MenuController.getAllMenuItems);

// GET /api/menu/:id - Get a single menu item by ID
router.get("/:id", MenuController.getMenuItemById);

export default router;
