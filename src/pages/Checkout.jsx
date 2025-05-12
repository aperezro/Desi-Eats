import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { meal, selectedIngredients } = location.state || { meal: null, selectedIngredients: [] };

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Check if all fields are filled
  const allFieldsFilled = cardName && cardNumber && expiryDate && cvv;

  return (
    <div className="w-full min-h-screen font-mulish relative" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>
      {/* Blurs Container */}
      <div className="absolute inset-0 z-10 pointer-events-none transition-colors duration-500">
        <div 
          className={`absolute top-[30%] left-0 h-[400px] w-[600px] ${allFieldsFilled ? 'bg-blue-500' : 'bg-[#ff3f18]'} opacity-60 blur-[100px] rounded-full translate-x-[90%] transition-colors duration-500`}
        ></div>
        <div 
          className={`absolute top-[60%] left-[32%] h-[350px] w-[350px] ${allFieldsFilled ? 'bg-blue-400' : 'bg-[#f66060]'} opacity-80 blur-[120px] rounded-full -translate-y-20 transition-colors duration-500`}
        ></div>
        <div 
          className={`absolute bottom-0 right-160 h-[400px] w-[320px] ${allFieldsFilled ? 'bg-green-300' : 'bg-[#f16323]'} opacity-80 blur-[120px] rounded-full translate-x-[15%] -translate-y-40 transition-colors duration-500`}
        ></div>
      </div>

      <div className="max-w-screen-sm mx-auto py-12 px-4 relative z-10">
        <h1 className="text-5xl font-extrabold text-[#7C2D53] mb-8">CHECKOUT</h1>

        {/* Order Summary Section */}
        <div className="bg-amber-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">ORDER SUMMARY</h2>
          <div className="border-b pb-4 mb-4">
            <p className="font-semibold">{meal?.name || "No meal selected"}</p>
            <p className="text-gray-600 text-sm">
              Base meal with {selectedIngredients?.length || 0} additional ingredients
            </p>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$12.99</span>
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="bg-amber-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">PAYMENT DETAILS</h2>

          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="cardName">Cardholder Name</label>
            <input
              type="text"
              id="cardName"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Balebandro"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2" htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block font-semibold mb-2" htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-2" htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              className="bg-orange-500 text-white px-4 py-2 disabled:bg-gray-300 hover:bg-orange-600 transition duration-200 border border-black hover:scale-105 rounded-3xl"
              disabled={!allFieldsFilled}
              onClick={() => navigate("/Desi-Eats/confirmation")}
            >
              Place Order
            </button>

            <div className="mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 hover:bg-gray-600 transition duration-200 hover:scale-105 rounded-3xl border border-black"
                onClick={() => navigate(-1)}
              >
                Back to Details
              </button>
            </div>
          </div>

          {(!allFieldsFilled) && (
            <p className="text-red-500 mt-2">Please fill out all fields to place the order.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
