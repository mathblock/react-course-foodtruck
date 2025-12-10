import { Request, Response } from 'express';
import { getDatabase } from '../config/database';

export class PanierController {

    static async addItemToCart(req: Request, res: Response): Promise<void> {
        try {
            const { itemId, quantity } = req.body;
            const db = getDatabase();
            const item = await db.getMenuItemById(itemId);

            if (!item) {
                res.status(404).json({
                    success: false,
                    error: 'Menu item not found',
                });
                return;
            }

            res.json({
                success: true,
                message: 'Item added to cart',
                data: { item, quantity },
            });
        } catch (error) {
            console.error('Error adding item to cart:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to add item to cart',
            });
        }
    }

    static async getCartItems(req: Request, res: Response): Promise<void> {
        try {


            const db = getDatabase();
            const cartItems = await db.getCartItems();
            res.json({
                success: true,
                data: cartItems,
            });
        } catch (error) {
            console.error('Error fetching cart items:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to fetch cart items',
            });
        }
    }


    static async updateCartItemQuantity(req: Request, res: Response): Promise<void> {
        try {
            const { itemId, quantity } = req.body;
            const db = getDatabase();

            res.json({
                success: true,
                message: 'Cart item quantity updated',
                data: { itemId, quantity },
            });
        } catch (error) {
            console.error('Error updating cart item quantity:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to update cart item quantity',
            });
        }
    }


    static async clearCart(req: Request, res: Response): Promise<void> {
        try {
            const db = getDatabase();
            // Here you would normally clear the user's cart in the database
            res.json({
                success: true,
                message: 'Cart cleared',
            });
        } catch (error) {
            console.error('Error clearing cart:', error);
            res.status(500).json({
                success: false,
                error: 'Failed to clear cart',
            });
        }
    }


}