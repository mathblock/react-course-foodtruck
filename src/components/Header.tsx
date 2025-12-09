import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount }) => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <div className="logo">
                        🌮 Foodtruck Paradise
                    </div>
                </Link>
                <div className="tagline">
                    Le meilleur food truck en ville
                </div>
                <nav className="nav">
                    <Link to="/" className="nav-link">Menu</Link>
                    <Link to="/about" className="nav-link">À propos</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/cart" className="cart-button" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                        Panier
                        {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
