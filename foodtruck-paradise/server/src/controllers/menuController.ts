import { Request, Response } from "express";
import { getDatabase } from "../config/database";

export class MenuController {
  // GET /api/menu - Get all menu items
  static async getAllMenuItems(req: Request, res: Response): Promise<void> {
    try {
      const { category } = req.query;
      const db = getDatabase();

      let items;
      if (category && typeof category === "string") {
        items = await db.getMenuItemsByCategory(category);
      } else {
        items = await db.getAllMenuItems();
      }

      res.json({
        success: true,
        data: items,
        count: items.length,
      });
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch menu items",
      });
    }
  }

  // GET /api/menu/:id - Get a single menu item by ID
  static async getMenuItemById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const db = getDatabase();

      const item = await db.getMenuItemById(id);

      if (!item) {
        res.status(404).json({
          success: false,
          error: "Menu item not found",
        });
        return;
      }

      res.json({
        success: true,
        data: item,
      });
    } catch (error) {
      console.error("Error fetching menu item:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch menu item",
      });
    }
  }
}
