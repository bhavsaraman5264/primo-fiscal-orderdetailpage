import { ShoppingCart, Gift, Check, ArrowLeft } from 'lucide-react';
import { calculateDiscountAmount } from './utils/calculations';
import CartItem from './CartItem';
import LoyaltySection from './LoyaltySection';
import { calculateSubtotal } from './utils/calculations';
import { formatCurrency } from './utils/calculations';
import { formatPoints } from './utils/calculations';


const OrderSummaryPage = ({ 
  cartItems, 
  loyaltyData, 
  pointsToRedeem, 
  setPointsToRedeem, 
  onProceed 
}) => {
  const subtotal = calculateSubtotal(cartItems);
  const discountAmount = calculateDiscountAmount(pointsToRedeem, loyaltyData.redemptionRate);
  const finalAmount = Math.max(0, subtotal - discountAmount);

  const handlePointsChange = (points) => {
    const maxRedeemable = Math.min(loyaltyData.availablePoints, subtotal * loyaltyData.redemptionRate);
    const validPoints = Math.min(Math.max(0, points), maxRedeemable);
    setPointsToRedeem(validPoints);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <ShoppingCart className="header-icon" />
          <h1 className="header-title">Order Summary</h1>
        </div>
        <p className="header-subtitle">Primo Fiscal POS</p>
      </div>

      <div className="content">
        {/* Cart Items */}
        <div className="section">
          <h2 className="section-title" style={{ color: 'black' }}>Your Order</h2>
          <div className="items-list">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Loyalty Section */}
        <LoyaltySection
          availablePoints={loyaltyData.availablePoints}
          pointsToRedeem={pointsToRedeem}
          onPointsChange={handlePointsChange}
          discountAmount={discountAmount}
          redemptionRate={loyaltyData.redemptionRate}
        />

        {/* Order Total */}
        <div className="total-card">
          <div className="total-content">
            <div className="total-row">
              <span className="total-label" style={{color:'#3e4451'}}>Subtotal:</span>
              <span className="total-value" style={{color:'#3e4451'}}>{formatCurrency(subtotal)}</span>
            </div>
            {pointsToRedeem > 0 && (
              <div className="discount-row">
                <span className="discount-label">Loyalty Discount ({formatPoints(pointsToRedeem)} points):</span>
                <span className="discount-value">-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <hr className="divider" />
            <div className="final-row">
              <span className="final-label" style={{color:'#3e4451'}}>Total:</span>
              <span className="final-value" style={{color:'#3e4451'}}>{formatCurrency(finalAmount)}</span>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          onClick={onProceed}
          className="proceed-btn"
        >
          Proceed to Confirmation
        </button>
      </div>
    </div>
  );

};
export default OrderSummaryPage;