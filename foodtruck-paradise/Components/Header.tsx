import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">🌮 Food Truck Paradise</h1>
        <p className="tagline">Le goût du bonheur sur roues 🚚</p>
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