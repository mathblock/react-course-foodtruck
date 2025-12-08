import React from 'react';

interface HeaderProps {
    cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    🌮 Foodtruck Paradise
                </div>
                <div className="tagline">
                    Le meilleur food truck en ville
                </div>
                <nav className="nav">
                    <a href="#menu" className="nav-link">Menu</a>
                    <a href="#about" className="nav-link">À propos</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <button className="cart-button">
                        Panier
                        {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
