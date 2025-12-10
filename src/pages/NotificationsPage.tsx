import React from 'react';
import NotificationList from '../components/NotificationList';
import './NotificationsPage.css';

const NotificationsPage: React.FC = () => {
  return (
    <div className="notifications-page">
      <div className="notifications-container">
        <h1 className="notifications-title">Notifications</h1>
        <NotificationList />
      </div>
    </div>
  );
};

export default NotificationsPage;
