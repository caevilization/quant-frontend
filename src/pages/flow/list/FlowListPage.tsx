import React from 'react';

const FlowListPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Flows</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Flow cards will be rendered here */}
      </div>
    </div>
  );
};

export default FlowListPage;
