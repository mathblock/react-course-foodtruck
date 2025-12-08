import type { CartItem } from "@/types/cart";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "./ui/button";

type CartSummaryProps = {
    cart: CartItem[];
    onUpdateQuantity: (itemId: string, newQuantity: number) => void;
    onRemove: (itemId: string) => void;
};

export function CartSummary({ cart, onUpdateQuantity, onRemove }: CartSummaryProps) {
    const total = cart.reduce(
        (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
        0
    );

    return (
        <section id="Panier" className="space-y-4 p-4">
            <h2 className="text-2xl font-bold">Votre panier</h2>
            {cart.length == 0 ? <p> Votre panier est vide</p> :
                <div className="space-y-3">
                    {cart.map((cartItem) => (
                        <div
                            key={cartItem.item.id}
                            className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                                <img className="rounded-lg m-b-5" src={cartItem.item.imageURL} />
                            </div>
                            <div>
                                <p className="font-semibold">{cartItem.item.name}</p>
                                <p className="text-sm text-gray-500">
                                    {cartItem.item.price} $ × {cartItem.quantity}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}>
                                    <Minus></Minus>
                                </Button>
                                <span>{cartItem.quantity}</span>
                                <Button
                                    variant="ghost"
                                    onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}>
                                    <Plus></Plus>
                                </Button>
                            </div>
                            <Button
                                variant="ghost"
                                className="text-red-500 font-bold"
                                onClick={() => onRemove(cartItem.item.id)}>
                                <X></X>
                            </Button>
                        </div>
                    ))}
                </div>
            }
            <div className="text-xl font-bold pt-4 border-t">
                Total : {total.toFixed(2)} $
            </div>
        </section>
    );
}
