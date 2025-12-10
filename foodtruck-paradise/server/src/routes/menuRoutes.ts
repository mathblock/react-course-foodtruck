import { Router } from "express";
import { MenuController } from "../controllers/menuController";

const router = Router();

// GET /api/menu - Get all menu items (with optional category filter)
router.get("/", MenuController.getAllMenuItems);

// GET /api/menu/:id - Get a single menu item by ID
router.get("/:id", MenuController.getMenuItemById);

// POST /api/menu - Create a new menu item
router.post("/", MenuController.createMenuItem);

// PUT /api/menu/:id - Update a menu item
router.put("/:id", MenuController.updateMenuItem);

// DELETE /api/menu/:id - Delete a menu item
router.delete("/:id", MenuController.deleteMenuItem);

export default router;
