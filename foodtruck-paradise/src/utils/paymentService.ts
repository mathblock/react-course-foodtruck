import type { PaymentData } from '../components/PaymentForm';

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  message: string;
  timestamp: Date;
}

export const simulatePayment = async (
  _paymentData: PaymentData,
  _amount: number
): Promise<PaymentResult> => {
  const delay = Math.random() * 1500 + 1500;
  
  await new Promise(resolve => setTimeout(resolve, delay));

  const transactionId = `TRX-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  const isSuccessful = Math.random() > 0.05;

  if (isSuccessful) {
    return {
      success: true,
      transactionId,
      message: 'Paiement effectué avec succès',
      timestamp: new Date()
    };
  } else {
    return {
      success: false,
      message: 'Erreur lors du traitement du paiement. Veuillez réessayer.',
      timestamp: new Date()
    };
  }
};

export const formatMaskedCardNumber = (cardNumber: string): string => {
  const digits = cardNumber.replace(/\s/g, '');
  const lastFour = digits.slice(-4);
  return `**** **** **** ${lastFour}`;
};
