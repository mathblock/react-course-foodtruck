import { Request, Response } from "express";
import { getDatabase } from "../config/database";

export class PromoController {
  // GET /api/promo - Get all promo codes
  static async getAllPromoCodes(req: Request, res: Response): Promise<void> {
    try {
      const db = getDatabase();
      const codes = await db.getAllPromoCodes();
      res.json({
        success: true,
        data: codes,
        count: codes.length,
      });
    } catch (error) {
      console.error("Error fetching promo codes:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch promo codes",
      });
    }
  }

  // POST /api/promo - Create a new promo code
  static async createPromoCode(req: Request, res: Response): Promise<void> {
    try {
      const db = getDatabase();
      await db.createPromoCode(req.body);
      res.status(201).json({
        success: true,
        message: "Promo code created successfully",
      });
    } catch (error) {
      console.error("Error creating promo code:", error);
      res.status(500).json({
        success: false,
        error: "Failed to create promo code",
      });
    }
  }

  // PUT /api/promo/:id - Update a promo code
  static async updatePromoCode(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const db = getDatabase();
      await db.updatePromoCode(id, req.body);
      res.json({
        success: true,
        message: "Promo code updated successfully",
      });
    } catch (error) {
      console.error("Error updating promo code:", error);
      res.status(500).json({
        success: false,
        error: "Failed to update promo code",
      });
    }
  }

  // DELETE /api/promo/:id - Delete a promo code
  static async deletePromoCode(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const db = getDatabase();
      await db.deletePromoCode(id);
      res.json({
        success: true,
        message: "Promo code deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting promo code:", error);
      res.status(500).json({
        success: false,
        error: "Failed to delete promo code",
      });
    }
  }
}