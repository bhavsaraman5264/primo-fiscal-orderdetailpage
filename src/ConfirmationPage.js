import { ShoppingCart, Gift, Check, ArrowLeft } from 'lucide-react';
import { calculateDiscountAmount } from './utils/calculations';
import { calculateSubtotal } from './utils/calculations';
import { formatCurrency } from './utils/calculations';
import { formatPoints } from './utils/calculations';
import './ConfirmationPage.css';

const ConfirmationPage = ({ 
  cartItems, 
  loyaltyData, 
  pointsToRedeem, 
  onBack, 
  onConfirm 
}) => {
  const subtotal = calculateSubtotal(cartItems);
  const discountAmount = calculateDiscountAmount(pointsToRedeem, loyaltyData.redemptionRate);
  const finalAmount = Math.max(0, subtotal - discountAmount);

  return (
    <div className="confirmation-container">
      {/* Header */}
      <div className="confirmation-header">
        <div className="header-content">
          <button onClick={onBack} className="back-button">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="header-title">Confirmation</h1>
        </div>
        <p className="header-subtitle">Review your order</p>
      </div>

      <div className="confirmation-content">
      <div className="info-card">
  <h2 className="card-title">Order Items</h2>
  {cartItems.map(item => (
    <div key={item.id} className="order-item">
      <div className="item-image">
        <img 
          src={item.image || `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop&crop=center`} 
          alt={item.name}
          className="item-img"
        />
      </div>
      <div className="item-details">
        <p className="item-name">{item.name}</p>
        <p className="item-quantity">Qty: {item.quantity} × {formatCurrency(item.price)}</p>
      </div>
      <p className="item-total">{formatCurrency(item.price * item.quantity)}</p>
    </div>
  ))}
</div>

        {/* Payment Summary */}
        <div className="info-card">
          <h2 className="card-title">Payment Summary</h2>
          <div className="payment-summary">
            <div className="summary-row">
              <span className="summary-label">Subtotal:</span>
              <span className="summary-value">{formatCurrency(subtotal)}</span>
            </div>
            {pointsToRedeem > 0 && (
              <div className="summary-row points-redemption">
                <span className="summary-label">Points Redeemed ({formatPoints(pointsToRedeem)}):</span>
                <span className="summary-value">-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <hr className="summary-divider" />
            <div className="summary-row final-amount">
              <span>Final Amount:</span>
              <span>{formatCurrency(finalAmount)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button
            onClick={onConfirm}
            className="confirm-button"
          >
            Confirm & Pay {formatCurrency(finalAmount)}
          </button>
          <button
            onClick={onBack}
            className="back-to-order-button"
          >
            Back to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;