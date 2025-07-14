import { ShoppingCart, Gift, Check, ArrowLeft } from 'lucide-react';
import { formatCurrency } from './utils/calculations';
import { formatPoints } from './utils/calculations';

const LoyaltySection = ({ 
  availablePoints, 
  pointsToRedeem, 
  onPointsChange, 
  discountAmount, 
  redemptionRate 
}) => {
  const maxRedeemablePoints = Math.min(availablePoints, 500); // Limit max redemption

  return (
    <div className="loyaltySection bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="w-5 h-5 text-amber-600" />
        <h2 className="text-lg font-semibold text-amber-800">Loyalty Points</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Available Points:</span>
          <span className="font-semibold text-amber-700">{formatPoints(availablePoints)}</span>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Redeem Points ({redemptionRate} points = ₹1)
          </label>
          <input
            type="number"
            value={pointsToRedeem}
            onChange={(e) => onPointsChange(parseInt(e.target.value) )}
            min="0"
            max={maxRedeemablePoints}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter points to redeem"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Max: {formatPoints(maxRedeemablePoints)}</span>
            <span>Discount: {formatCurrency(discountAmount)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltySection;