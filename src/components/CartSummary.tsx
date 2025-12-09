import type { CartItem } from "@/types/cart";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CirclePlus, Trash2 } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { useCart } from "./CardContext";

function CartSummary() {
  const { carts, removeFromCart, updateQuantity } = useCart();
  const [promo, setPromo] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [promoApplied, setPromoApplied] = useState<boolean>(false);

  const total = carts.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  const totalWithDiscount = total * (1 - discount);

  function handleApplyPromo() {
    if (promo.toUpperCase() === "FOOD50" && !promoApplied) {
      setDiscount(0.5);
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setPromoApplied(false);
      alert("Code promo invalide !");
    }
  }

  return (
    <div className="p-5">
      {carts.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          Votre panier est vide.
        </p>
      )}

      <ul className="divide-y divide-muted rounded-md border border-muted bg-background p-0">
        <AnimatePresence>
          {carts.map((item: CartItem) => (
            <motion.li
              key={item.item.id}
              className="flex items-center gap-4 py-4 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              layout
            >
              <img
                src={item.item.imageUrl}
                alt={item.item.name}
                className="w-14 h-14 object-cover rounded-md"
              />

              <div className="flex-1">
                <div className="text-black font-semibold">{item.item.name}</div>
                <div className="text-black text-muted-foreground text-sm">
                  {item.item.price.toFixed(2)} €
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  onClick={() => updateQuantity(item.item.id, -1)}
                >
                  <CircleMinus />
                </Button>
                <span className="text-black mx-2">{item.quantity}</span>
                <Button
                  size="icon"
                  onClick={() => updateQuantity(item.item.id, 1)}
                >
                  <CirclePlus />
                </Button>
              </div>

              <div className="w-20 text-right ml-4 font-medium text-black">
                {(item.item.price * item.quantity).toFixed(2)} €
              </div>

              <Button
                size="icon"
                onClick={() => removeFromCart(item.item.id)}
                title="Supprimer"
              >
                <Trash2 />
              </Button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="flex justify-end items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Code promo"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          className="border rounded px-2 py-1"
          disabled={promoApplied}
        />
        <Button
          onClick={handleApplyPromo}
          disabled={promoApplied || !promo}
          className="bg-primary text-primary-foreground"
        >
          {promoApplied ? "Appliqué" : "Appliquer"}
        </Button>
      </div>

      <div className="text-right font-bold text-lg mt-4">
        Total : {totalWithDiscount.toFixed(2)} €
        {discount > 0 && (
          <span className="block text-sm text-green-600">
            (-{Math.round(discount * 100)}% appliqué)
          </span>
        )}
      </div>

      <div className="text-right mt-4">
        <Button
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-base opacity-80"
          disabled
        >
          Commander
        </Button>
      </div>
    </div>
  );
}
export default CartSummary;
