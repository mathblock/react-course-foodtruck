import React from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../context/NotificationContext';

function Header() {
  const { notifications } = useNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>🌮 Foodtruck Paradise</h1>
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Panier</Link>
          <Link to="/notifications" className="notification-link">
            🔔 Notifications
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
