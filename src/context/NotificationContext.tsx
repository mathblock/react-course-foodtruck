import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Notification } from '../types/notification';

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notificationData: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notificationData,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  // Function to generate random notifications
  const generateRandomNotification = () => {
    const types: Notification['type'][] = ['info', 'success', 'warning', 'error'];
    const messages = {
      info: [
        { title: 'Bienvenue !', message: 'Bienvenue sur Foodtruck Paradise ! Découvrez nos délicieux plats.' },
        { title: 'Nouveau menu', message: 'Découvrez notre nouveau menu du jour avec des spécialités locales.' },
      ],
      success: [
        { title: 'Commande confirmée', message: 'Votre commande a été confirmée et est en préparation.' },
        { title: 'Paiement réussi', message: 'Votre paiement a été traité avec succès.' },
      ],
      warning: [
        { title: 'Stock limité', message: 'Attention, certains plats sont en rupture de stock.' },
        { title: 'Fermeture imminente', message: 'Le foodtruck fermera dans 30 minutes.' },
      ],
      error: [
        { title: 'Erreur de commande', message: 'Une erreur s\'est produite lors de votre commande. Veuillez réessayer.' },
        { title: 'Paiement refusé', message: 'Votre paiement a été refusé. Vérifiez vos informations.' },
      ],
    };

    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomMessage = messages[randomType][Math.floor(Math.random() * messages[randomType].length)];

    addNotification({
      type: randomType,
      title: randomMessage.title,
      message: randomMessage.message,
      ...(randomType === 'success' && Math.random() > 0.5 && { orderId: Math.floor(Math.random() * 1000).toString() }),
    });
  };

  // Automatic notification generation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomNotification();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        removeNotification,
        clearAll,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
