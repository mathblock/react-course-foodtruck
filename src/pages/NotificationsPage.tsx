import React from 'react';
import NotificationList from '../components/NotificationList';
import { useNotifications } from '../context/NotificationContext';
import './NotificationsPage.css';

const NotificationsPage: React.FC = () => {
  // ... logique complète
  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <h1 className="notifications-title">Notifications</h1>
        {/* Section de test */}
        <div className="notifications-test-section">
          <h2 className="notifications-subtitle">Ajouter une notification de test</h2>
          <div className="notifications-buttons">
            {/* Boutons de test */}
          </div>
        </div>
        <NotificationList />
      </div>
    </div>
  );
};

export default NotificationsPage;
