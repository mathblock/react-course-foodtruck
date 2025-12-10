import { useCart } from '../context/CartContext';

interface HeaderProps {
  onNavigate?: (page: "home" | "menu") => void;
}

function Header({ onNavigate }: HeaderProps) {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "menu"
  ) => {
    e.preventDefault();
    onNavigate?.(page);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo" onClick={(e) => handleNavClick(e, "home")}>
          <h1>🌮 Foodtruck Paradise</h1>
        </a>
        <nav>
          <a href="/" onClick={(e) => handleNavClick(e, "home")}>
            Accueil
          </a>
          <a href="/menu" onClick={(e) => handleNavClick(e, "menu")}>
            Menu
          </a>
          <a href="/cart" style={{ position: 'relative' }}>
            Panier
            {itemCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                backgroundColor: '#ff4444',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {itemCount}
              </span>
            )}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
