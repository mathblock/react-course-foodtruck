

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1> Food Truck Paradise</h1>
          <p className="tagline">La meilleure nourriture de rue en ville !</p>
        </div>
        <nav className="nav">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">À propos</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;