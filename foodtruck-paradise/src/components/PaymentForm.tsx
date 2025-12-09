import { useState } from 'react';
import './PaymentForm.css';

interface PaymentFormProps {
  total: number;
  onSubmit: (paymentData: PaymentData) => void;
  onCancel: () => void;
  isProcessing: boolean;
}

export interface PaymentData {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

function PaymentForm({ total, onSubmit, onCancel, isProcessing }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentData>({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState<Partial<PaymentData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<PaymentData> = {};

    if (!formData.cardHolder.trim()) {
      newErrors.cardHolder = 'Nom requis';
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Numéro de carte requis';
    } else if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Numéro de carte invalide (16 chiffres)';
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Date d\'expiration requise';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Format invalide (MM/AA)';
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV requis';
    } else if (formData.cvv.length !== 3) {
      newErrors.cvv = 'CVV invalide (3 chiffres)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleCardNumberChange = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    const formatted = digits.match(/.{1,4}/g)?.join(' ') || digits;
    setFormData({ ...formData, cardNumber: formatted });
  };

  const handleExpiryDateChange = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    let formatted = digits;
    if (digits.length >= 3) {
      formatted = digits.slice(0, 2) + '/' + digits.slice(2);
    }
    setFormData({ ...formData, expiryDate: formatted });
  };

  const handleCvvChange = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 3);
    setFormData({ ...formData, cvv: digits });
  };

  return (
    <div className="payment-form-container">
      <h3 className="payment-form-title">Paiement</h3>
      
      <div className="payment-amount-display">
        <p className="payment-amount-label">Montant à payer</p>
        <p className="payment-amount-value">{total.toFixed(2)}€</p>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label className="form-label">Nom du titulaire</label>
          <input
            type="text"
            value={formData.cardHolder}
            onChange={(e) => setFormData({ ...formData, cardHolder: e.target.value })}
            placeholder="Jean Dupont"
            disabled={isProcessing}
            className={`form-input ${errors.cardHolder ? 'error' : ''}`}
          />
          {errors.cardHolder && (
            <p className="form-error">{errors.cardHolder}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Numéro de carte</label>
          <input
            type="text"
            value={formData.cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
            placeholder="1234 5678 9012 3456"
            disabled={isProcessing}
            className={`form-input ${errors.cardNumber ? 'error' : ''}`}
          />
          {errors.cardNumber && (
            <p className="form-error">{errors.cardNumber}</p>
          )}
        </div>

        <div className="form-group inline">
          <div>
            <label className="form-label">Date d'expiration</label>
            <input
              type="text"
              value={formData.expiryDate}
              onChange={(e) => handleExpiryDateChange(e.target.value)}
              placeholder="MM/AA"
              disabled={isProcessing}
              className={`form-input ${errors.expiryDate ? 'error' : ''}`}
            />
            {errors.expiryDate && (
              <p className="form-error">{errors.expiryDate}</p>
            )}
          </div>

          <div>
            <label className="form-label">CVV</label>
            <input
              type="text"
              value={formData.cvv}
              onChange={(e) => handleCvvChange(e.target.value)}
              placeholder="123"
              disabled={isProcessing}
              className={`form-input ${errors.cvv ? 'error' : ''}`}
            />
            {errors.cvv && (
              <p className="form-error">{errors.cvv}</p>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={onCancel}
            disabled={isProcessing}
            className="btn btn-cancel"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={isProcessing}
            className={`btn btn-submit ${isProcessing ? 'processing' : ''}`}
          >
            {isProcessing ? 'Traitement en cours...' : 'Payer maintenant'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
