import React from 'react';

const Connect = () => {
  return (
    <div className="w-full min-h-screen bg-amber-50 font-mulish p-8">
      <h1 className="text-5xl font-extrabold text-[#7C2D53] mb-8">Connect with Desi Eats</h1>

      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        We'd love to hear from you! Reach out to us through any of the following platforms:
      </p>

      <ul className="text-lg text-gray-700 space-y-4">
        <li>📞 Phone: +1 787-354-4329</li>
        <li>✉️ Email: desieatsus@outlook.com</li>
        <li>📍 Address: 21 Babson College Dr. Unit 1619, Wellesley Hills, MA 02481</li>
        <li>📱 Instagram: @DesiEatsOfficial</li>
      </ul>

      {/* (You can add a contact form here later too!) */}
    </div>
  );
};

export default Connect;
