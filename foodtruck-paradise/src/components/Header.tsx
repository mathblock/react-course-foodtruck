import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
    cartItemsCount: number;
    favoritesCount: number;
}

const Header = ({ cartItemsCount, favoritesCount }: HeaderProps) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">🌮 Food Truck Paradise</div>
                <p className="tagline">Les meilleurs plats de rue en ville !</p>
                <nav className="nav">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Menu
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        À propos
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Contact
                    </NavLink>
                    <NavLink to="/favorites" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        ❤️ Favoris ({favoritesCount})
                    </NavLink>
                    <Link to="/cart" className="cart-button">
                        🛒 Panier ({cartItemsCount})
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
