import { useState, useCallback } from 'react';
import OrderTracking from '../components/OrderTracking';
import { Toast } from '../components/Toast';
import { type OrderStep } from '../hooks/useOrderTracking';
import PageTitle from '../components/PageTitle';
import '../styles/OrderTrackingPage.css';

interface ToastData {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

export function OrderTrackingPage() {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const [simulationSpeed, setSimulationSpeed] = useState(10000); // 10 secondes par défaut

  const showToast = useCallback((toast: Omit<ToastData, 'id'>) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const handleStatusChange = useCallback((newStatus: string, step: OrderStep) => {
    showToast({
      type: newStatus === 'delivered' ? 'success' : 'info',
      message: `${step.icon} ${step.label} - ${step.description}`
    });
  }, [showToast]);

  return (
    <div className="order-tracking-page">
      <PageTitle title="🚚 Suivi de commande - Foodtruck Paradise" />
      
      {/* Toast Container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>

      {/* Contrôles de simulation (pour développement) */}
      <div className="dev-controls">
        <label>
          Vitesse de simulation :
          <select 
            value={simulationSpeed} 
            onChange={(e) => setSimulationSpeed(Number(e.target.value))}
          >
            <option value={2000}>2 secondes (rapide)</option>
            <option value={5000}>5 secondes (test)</option>
            <option value={10000}>10 secondes (normal)</option>
            <option value={30000}>30 secondes (lent)</option>
          </select>
        </label>
      </div>

      {/* Composant de suivi */}
      <OrderTracking 
        orderId="FTP-2024-12345" 
        simulationSpeed={simulationSpeed}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default OrderTrackingPage;

