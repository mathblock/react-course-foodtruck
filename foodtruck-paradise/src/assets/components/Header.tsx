import React from 'react'
import './Header.css' // On ajoutera le CSS après

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo + titre */}
        <div className="logo">🌮 Food Truck Paradise</div>
        {/* Slogan */}
        <div className="tagline">Des saveurs uniques, servies avec amour !</div>
        {/* Navigation */}
        <nav className="nav">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">À propos</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
