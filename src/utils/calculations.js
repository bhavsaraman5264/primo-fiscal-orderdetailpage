export const calculateSubtotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const calculateDiscountAmount = (pointsToRedeem, redemptionRate = 100) => {
  return Math.floor(pointsToRedeem / redemptionRate);
};

export const calculateFinalAmount = (subtotal, discountAmount) => {
  return Math.max(0, subtotal - discountAmount);
};

export const validatePointsRedemption = (pointsToRedeem, availablePoints, maxRedeemable) => {
  if (pointsToRedeem < 0) return false;
  if (pointsToRedeem > availablePoints) return false;
  if (pointsToRedeem > maxRedeemable) return false;
  return true;
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

export const formatPoints = (points) => {
  return new Intl.NumberFormat('en-IN').format(points);
};