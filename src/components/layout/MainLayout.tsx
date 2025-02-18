import React from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold">
              TradingFlow
            </Link>
            <div className="space-x-4">
              <Link to="/flows" className="text-gray-600 hover:text-gray-900">
                My Flows
              </Link>
              <Link to="/flows/new" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                New Flow
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
