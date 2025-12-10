import React from 'react';
import { useNotifications } from '../context/NotificationContext';
import type { Notification } from '../types/notification';
import './NotificationList.css';

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => {
  const { markAsRead, removeNotification } = useNotifications();

  const handleMarkAsRead = () => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
  };

  const handleRemove = () => {
    removeNotification(notification.id);
  };

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'success': return 'notification-success';
      case 'warning': return 'notification-warning';
      case 'error': return 'notification-error';
      default: return 'notification-info';
    }
  };

  return (
    <div
      className={`notification-item ${getTypeColor(notification.type)} ${
        !notification.read ? 'notification-unread' : 'notification-read'
      }`}
      onClick={handleMarkAsRead}
    >
      <div className="notification-content">
        <div className="notification-header">
          <h4 className="notification-title">{notification.title}</h4>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
            className="notification-close"
            aria-label="Supprimer la notification"
          >
            ×
          </button>
        </div>
        <p className="notification-message">{notification.message}</p>
        <p className="notification-timestamp">
          {notification.timestamp.toLocaleString('fr-FR')}
        </p>
        {notification.orderId && (
          <p className="notification-order-id">
            Commande #{notification.orderId}
          </p>
        )}
      </div>
    </div>
  );
};

const NotificationList: React.FC = () => {
  const { notifications, clearAll } = useNotifications();

  if (notifications.length === 0) {
    return (
      <div className="notification-empty">
        <div className="notification-empty-icon">🔔</div>
        <p>Aucune notification pour le moment</p>
        <small>Toutes vos notifications apparaîtront ici</small>
      </div>
    );
  }

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h3 className="notification-heading">
          Notifications ({notifications.filter(n => !n.read).length})
        </h3>
        <button
          onClick={clearAll}
          className="notification-clear-all"
          disabled={notifications.length === 0}
        >
          Tout effacer
        </button>
      </div>
      <div className="notification-list">
        {notifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
