import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

const Confirmation = () => {
  const location = useLocation();
  const { meal } = location.state || { meal: null };

  return (
    
    <div className="w-full min-h-screen font-mulish relative" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>
        {/* Blurs Container */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 right-20 h-[400px] w-[300px] bg-[#00ff00] opacity-50 blur-[100px] rounded-full -translate-x-[260%] translate-y-[20%]"></div>
        <div className="absolute top-[60%] left-[52%] h-[350px] w-[350px] bg-[#9ff660] opacity-80 blur-[120px] rounded-full -translate-y-20" ></div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen px-4 z-[100]">
        <div className="bg-amber-50 rounded-lg shadow-lg p-10 max-w-md w-full text-center z-[100]">
          <div className="mb-6 mx-auto bg-green-100 rounded-full p-4 inline-flex">
            <Check className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-[#f16323] mb-4">Order Confirmed!</h1>
          <p className="text-lg mb-6">
            {meal ? `Your ${meal.name} will be prepared and ready shortly.` : "Your order has been confirmed and will be prepared shortly. Please allow 10-15 minutes for preparation."}
          </p>
          <p className="text-gray-600 mb-8">
            Thank you for your order. You will receive an email confirmation shortly.
          </p>
          <Link 
            to="/menu" 
            className="t-3 px-4 py-2 bg-[#f16323] text-white hover:bg-yellow-500 rounded-full font-bold border border-black hover:scale-105 transition-transform duration-300 shadow-lg"

          >
            Return to Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
