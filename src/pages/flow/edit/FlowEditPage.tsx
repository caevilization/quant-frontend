import React from 'react';

const FlowEditPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Edit Flow</h1>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white">
          Save Flow
        </button>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 min-h-[600px]">
        {/* Flow editor will be rendered here */}
      </div>
    </div>
  );
};

export default FlowEditPage;
