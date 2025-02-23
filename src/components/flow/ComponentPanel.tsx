import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ComponentCategory {
  name: string;
  items: { id: string; name: string; description: string }[];
}

const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    name: 'Account',
    color: 'border-yellow-500 text-yellow-500',
    items: []
  },
  {
    name: 'Compute',
    color: 'border-blue-500 text-blue-500',
    items: [
      { id: 'chatInput', name: 'Chat Input', description: 'Get chat inputs from user' },
    ]
  },
  {
    name: 'Action',
    color: 'border-green-500 text-green-500',
    items: []
  },
  {
    name: 'Data',
    color: 'border-red-500 text-red-500',
    items: []
  }
];

const ComponentPanel: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-full h-full bg-tf-dark-gray border-r border-tf-light-gray">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-tf-white">Components</h2>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2 bg-tf-light-gray text-tf-white border-tf-light-gray rounded-lg placeholder-tf-gray-white focus:outline-none focus:ring-1 focus:ring-tf-gray-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-2">
          {COMPONENT_CATEGORIES.map((category) => (
            <div key={category.name} className={`border rounded-lg ${category.color}`}>
              <button
                className="w-full px-4 py-2 flex items-center justify-between hover:bg-tf-light-gray"
                onClick={() => toggleCategory(category.name)}
              >
                <span className="font-medium text-tf-white">{category.name}</span>
                {expandedCategories.includes(category.name) ? (
                  <ChevronDownIcon className="h-5 w-5 text-tf-gray-white" />
                ) : (
                  <ChevronRightIcon className="h-5 w-5 text-tf-gray-white" />
                )}
              </button>
              {expandedCategories.includes(category.name) && (
                <div className="p-2 space-y-2">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-2 border border-tf-light-gray rounded cursor-move hover:bg-tf-light-gray"
                      draggable
                      onDragStart={(e) => onDragStart(e, item.id)}
                      style={{ touchAction: 'none' }}
                    >
                      <div className="font-medium text-tf-white">{item.name}</div>
                      <div className="text-sm text-tf-gray-white">{item.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentPanel;
