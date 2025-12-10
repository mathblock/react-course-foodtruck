import { Request, Response } from "express";
import { getDatabase } from "../config/database";

export class UserController {
  // GET /api/users - Get all users (admin only)
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const db = getDatabase();
      const users = await db.getAllUsers();

      res.json({
        success: true,
        data: users,
        count: users.length,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch users",
      });
    }
  }

  // POST /api/users/sync - Sync user from Clerk
  static async syncUser(req: Request, res: Response): Promise<void> {
    try {
      const { id, email, firstName, lastName, avatar, role } = req.body;

      if (!id || !email || !firstName || !lastName) {
        res.status(400).json({
          success: false,
          error: "Missing required fields: id, email, firstName, lastName",
        });
        return;
      }

      const db = getDatabase();
      await db.upsertUser({ id, email, firstName, lastName, avatar, role });

      res.json({
        success: true,
        message: "User synced successfully",
      });
    } catch (error) {
      console.error("Error syncing user:", error);
      res.status(500).json({
        success: false,
        error: "Failed to sync user",
      });
    }
  }
}