import { useState, useEffect } from 'react';

type OrderStatus = 'confirmed' | 'preparing' | 'ready' | 'delivering' | 'delivered';

export interface OrderStep {
  status: OrderStatus;
  label: string;
  icon: string;
  estimatedTime: string;
  description: string;
}

const orderSteps: OrderStep[] = [
  { 
    status: 'confirmed', 
    label: 'Commande confirmée', 
    icon: '✅', 
    estimatedTime: '0 min',
    description: 'Votre commande a été confirmée et enregistrée'
  },
  { 
    status: 'preparing', 
    label: 'En préparation', 
    icon: '👨‍🍳', 
    estimatedTime: '15 min',
    description: 'Nos chefs préparent votre commande avec soin'
  },
  { 
    status: 'ready', 
    label: 'Prête', 
    icon: '📦', 
    estimatedTime: '20 min',
    description: 'Votre commande est prête pour la livraison'
  },
  { 
    status: 'delivering', 
    label: 'En livraison', 
    icon: '🚗', 
    estimatedTime: '10 min',
    description: 'Notre livreur est en route vers vous'
  },
  { 
    status: 'delivered', 
    label: 'Livrée', 
    icon: '🎉', 
    estimatedTime: '0 min',
    description: 'Commande livrée avec succès. Bon appétit !'
  }
];

interface UseOrderTrackingOptions {
  orderId: string;
  simulationSpeed?: number; // En millisecondes (par défaut 10000 = 10 secondes)
  onStatusChange?: (newStatus: OrderStatus, step: OrderStep) => void;
}

export function useOrderTracking({ 
  orderId, 
  simulationSpeed = 10000,
  onStatusChange 
}: UseOrderTrackingOptions) {
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>('confirmed');
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Progression automatique du statut
  useEffect(() => {
    if (currentStatus === 'delivered') {
      setIsCompleted(true);
      return;
    }

    const timer = setTimeout(() => {
      const nextStatus = getNextStatus(currentStatus);
      setCurrentStatus(nextStatus);
      
      // Callback pour notification
      if (onStatusChange) {
        const nextStep = orderSteps.find(step => step.status === nextStatus);
        if (nextStep) {
          onStatusChange(nextStatus, nextStep);
        }
      }
    }, simulationSpeed);

    return () => clearTimeout(timer);
  }, [currentStatus, simulationSpeed, onStatusChange]);

  // Calculer le pourcentage de progression
  useEffect(() => {
    const currentIndex = orderSteps.findIndex(step => step.status === currentStatus);
    setProgress((currentIndex / (orderSteps.length - 1)) * 100);
  }, [currentStatus]);

  const currentStepIndex = orderSteps.findIndex(step => step.status === currentStatus);
  const currentStep = orderSteps[currentStepIndex];

  return {
    currentStatus,
    progress,
    steps: orderSteps,
    currentStepIndex,
    currentStep,
    isCompleted,
    orderId
  };
}

function getNextStatus(current: OrderStatus): OrderStatus {
  const statuses: OrderStatus[] = ['confirmed', 'preparing', 'ready', 'delivering', 'delivered'];
  const index = statuses.indexOf(current);
  return statuses[Math.min(index + 1, statuses.length - 1)];
}

