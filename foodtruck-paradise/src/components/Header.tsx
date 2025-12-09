import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
  favoritesCount: number;
  onApplyPromo: (code: string) => boolean;
  isPromoApplied: boolean;
}

const Header = ({ cartItemsCount, favoritesCount, onApplyPromo, isPromoApplied }: HeaderProps) => {
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  const handleApply = () => {
    const success = onApplyPromo(promoCode);
    if (success) {
      setPromoMessage("Code appliqué !");
      setPromoCode("");
    } else {
      setPromoMessage("Code invalide");
    }
    setTimeout(() => setPromoMessage(""), 3000);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>🌮 Food Truck Paradise</Link>
        </div>
        <p className="tagline">Les meilleurs plats de rue en ville !</p>
        <nav className="nav">
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">À propos</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/favorites" className="nav-link">
            ❤️ Favoris {favoritesCount > 0 && `(${favoritesCount})`}
          </Link>

          {/* Promo Code Input */}
          {!isPromoApplied ? (
            <div className="promo-input-group" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginRight: '1rem' }}>
              <input
                type="text"
                placeholder="Code promo"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={{ padding: '0.4rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <button
                onClick={handleApply}
                style={{ padding: '0.4rem 0.8rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                OK
              </button>
            </div>
          ) : (
            <div style={{ color: '#28a745', fontWeight: 'bold', marginRight: '1rem' }}>
              ✅ -10% Appliqué
            </div>
          )}
          {promoMessage && <span style={{ fontSize: '0.8rem', color: promoMessage.includes('invalide') ? 'red' : 'green', marginRight: '0.5rem' }}>{promoMessage}</span>}

          <Link to="/cart" className="nav-link" style={{ position: 'relative' }}>
            🛒 Panier
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;