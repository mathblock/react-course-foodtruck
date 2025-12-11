import { useOrderTracking, type OrderStep } from '../hooks/useOrderTracking';
import '../styles/OrderTracking.css';

interface OrderTrackingProps {
  orderId: string;
  simulationSpeed?: number;
  onStatusChange?: (newStatus: string, step: OrderStep) => void;
}

export function OrderTracking({ 
  orderId, 
  simulationSpeed = 10000,
  onStatusChange 
}: OrderTrackingProps) {
  const { 
    progress, 
    steps, 
    currentStepIndex, 
    currentStep,
    isCompleted 
  } = useOrderTracking({ 
    orderId, 
    simulationSpeed,
    onStatusChange 
  });

  return (
    <div className="order-tracking-container">
      <div className="order-tracking-header">
        <h2>🍔 Suivi de votre commande</h2>
        <p className="order-id">Commande #{orderId}</p>
      </div>
      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="progress-text">{Math.round(progress)}% complété</p>
      </div>
      <div className="timeline">
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;
          
          return (
            <div 
              key={step.status}
              className={`step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            >
              <div className="step-connector" />
              <div className="step-icon-wrapper">
                <span className="step-icon">{step.icon}</span>
              </div>
              <div className="step-content">
                <h3 className="step-label">{step.label}</h3>
                <p className="step-description">{step.description}</p>
                {isActive && step.estimatedTime !== '0 min' && (
                  <span className="step-time">
                    ⏱️ ~{step.estimatedTime}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="current-status-card">
        <div className="status-icon">{currentStep.icon}</div>
        <div className="status-info">
          <h3>{currentStep.label}</h3>
          <p>{currentStep.description}</p>
        </div>
      </div>
      {isCompleted && (
        <div className="delivery-success">
          <div className="success-content">
            <span className="success-icon">🎉</span>
            <h2>Commande livrée !</h2>
            <p>Merci pour votre commande. Bon appétit ! 🍔🍟</p>
          </div>
        </div>
      )}
      <div className="tracking-footer">
        <div className="info-box">
          <span className="info-icon">📍</span>
          <div>
            <strong>Adresse de livraison</strong>
            <p>123 Rue de la Gastronomie, 75001 Paris</p>
          </div>
        </div>
        <div className="info-box">
          <span className="info-icon">📞</span>
          <div>
            <strong>Contact livreur</strong>
            <p>+33 6 12 34 56 78</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;

