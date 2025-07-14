import './App.css';
import React, { useState } from 'react';
import ConfirmationPage from './ConfirmationPage';
import { calculateDiscountAmount } from './utils/calculations';
import OrderSummaryPage from './OrderSummary';
import { cartItems } from './data/mockData';
import { loyaltyData } from './data/mockData';
import { calculateSubtotal } from './utils/calculations';
import { formatCurrency } from './utils/calculations';


const App = () => {
  const [currentPage, setCurrentPage] = useState('order');
  const [pointsToRedeem, setPointsToRedeem] = useState(0);

  const handleProceed = () => {
    setCurrentPage('confirmation');
  };

  const handleBack = () => {
    setCurrentPage('order');
  };

  const handleConfirm = () => {
    alert(`Order confirmed! Payment of ${formatCurrency(calculateSubtotal(cartItems) - calculateDiscountAmount(pointsToRedeem))} processed successfully.`);
    // Reset for new order
    setPointsToRedeem(0);
    setCurrentPage('order');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {currentPage === 'order' ? (
        <OrderSummaryPage
          cartItems={cartItems}
          loyaltyData={loyaltyData}
          pointsToRedeem={pointsToRedeem}
          setPointsToRedeem={setPointsToRedeem}
          onProceed={handleProceed}
        />
      ) : (
        <ConfirmationPage
          cartItems={cartItems}
          loyaltyData={loyaltyData}
          pointsToRedeem={pointsToRedeem}
          onBack={handleBack}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};
export default App;


