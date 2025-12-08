import type  { CartItem } from "../types/cart";

interface CartSummaryProps {
  cart: CartItem[];
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, onUpdateQuantity, onRemove, total }) => {
  if (cart.length === 0) return null;

  return (
    <div style={{ background: "#f8f9fa", padding: "2rem", borderRadius: 12, margin: "3rem auto", maxWidth: 800 }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Votre Panier</h2>
      {cart.map(({ item, quantity }) => (
        <div key={item.id} style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          padding: "1rem",
          borderRadius: 8,
          marginBottom: "1rem",
          gap: "1rem"
        }}>
          <img src={item.imageUrl} alt={item.name} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }} />
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>{item.price.toFixed(2)} €</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button onClick={() => onUpdateQuantity(item.id, quantity - 1)} style={{ width: 36, height: 36 }}>-</button>
            <span style={{ minWidth: 40, textAlign: "center" }}>{quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, quantity + 1)} style={{ width: 36, height: 36 }}>+</button>
            <button onClick={() => onRemove(item.id)} style={{ marginLeft: "1rem", fontSize: "1.5rem" }}>Supprimer</button>
          </div>
          <strong>{(item.price * quantity).toFixed(2)} €</strong>
        </div>
      ))}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "right", marginTop: "2rem", paddingTop: "1rem", borderTop: "2px solid #ddd" }}>
        Total : {total.toFixed(2)} €
      </div>
      <button style={{
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        background: "#27ae60",
        color: "white",
        border: "none",
        borderRadius: 8,
        fontSize: "1.2rem",
        cursor: "pointer"
      }}>
        Commander
      </button>
    </div>
  );
};

export default CartSummary;