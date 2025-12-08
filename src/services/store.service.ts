import type { CartItem } from "../types/cart";

class StoreService {
    private readonly storageKey = 'foodTruckCart';

    saveCart(cart: any) {
        localStorage.setItem(this.storageKey, JSON.stringify(cart));
    }

    loadCart(): CartItem[] {
        const cart = localStorage.getItem(this.storageKey);
        return cart ? (JSON.parse(cart) as CartItem[]) : [];
    }

    updateCart(cart: CartItem[]) {
        localStorage.setItem(this.storageKey, JSON.stringify(cart));
    }

    clearCart() {
        localStorage.removeItem(this.storageKey);
    }
}
export const storeService = new StoreService();