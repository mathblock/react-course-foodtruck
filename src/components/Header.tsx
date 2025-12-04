import React from 'react';

const Header: React.FC = () => {
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
                </nav>
            </div>
        </header>
    );
}

export default Header;