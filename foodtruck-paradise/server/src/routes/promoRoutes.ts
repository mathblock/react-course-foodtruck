import { Router } from "express";
import { PromoController } from "../controllers/promoController";

const router = Router();

// GET /api/promo - Get all promo codes
router.get("/", PromoController.getAllPromoCodes);

// POST /api/promo - Create a new promo code
router.post("/", PromoController.createPromoCode);

// PUT /api/promo/:id - Update a promo code
router.put("/:id", PromoController.updatePromoCode);

// DELETE /api/promo/:id - Delete a promo code
router.delete("/:id", PromoController.deletePromoCode);

export default router;