import { Router } from 'express';
import { PanierController } from '../controllers/panierController';
const router = Router();


router.post('/add', PanierController.addItemToCart);

router.get('/', PanierController.getCartItems);

router.put('/update', PanierController.updateCartItemQuantity);

router.delete('/clear', PanierController.clearCart);
export default router;