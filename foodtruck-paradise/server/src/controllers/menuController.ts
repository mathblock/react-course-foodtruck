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

  // POST /api/menu - Create a new menu item
  static async createMenuItem(req: Request, res: Response): Promise<void> {
    try {
      const db = getDatabase();
      await db.createMenuItem(req.body);
      res.status(201).json({
        success: true,
        message: "Menu item created successfully",
      });
    } catch (error) {
      console.error("Error creating menu item:", error);
      res.status(500).json({
        success: false,
        error: "Failed to create menu item",
      });
    }
  }

  // PUT /api/menu/:id - Update a menu item
  static async updateMenuItem(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const db = getDatabase();
      await db.updateMenuItem(id, req.body);
      res.json({
        success: true,
        message: "Menu item updated successfully",
      });
    } catch (error) {
      console.error("Error updating menu item:", error);
      res.status(500).json({
        success: false,
        error: "Failed to update menu item",
      });
    }
  }

  // DELETE /api/menu/:id - Delete a menu item
  static async deleteMenuItem(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const db = getDatabase();
      await db.deleteMenuItem(id);
      res.json({
        success: true,
        message: "Menu item deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting menu item:", error);
      res.status(500).json({
        success: false,
        error: "Failed to delete menu item",
      });
    }
  }
}
