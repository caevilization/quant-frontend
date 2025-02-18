import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">TradingFlow</h1>
        <p className="text-xl mb-8">
          Build, automate, and optimize your trading strategies with ease.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
