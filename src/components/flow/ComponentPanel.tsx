import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import * as nodeTypes from '../TFNode/nodeTypes';

interface ComponentCategory {
  name: string;
  color: string;
  items: { id: string; name: string; description: string }[];
}

const COMPONENT_CATEGORIES: ComponentCategory[] = [
  {
    name: 'Account',
    color: 'border-tf-accent-amber text-tf-accent-amber',
    items: [
      { id: 'account', name: nodeTypes.accountNode.title, description: nodeTypes.accountNode.description },
      { id: 'battery', name: nodeTypes.batteryNode.title, description: nodeTypes.batteryNode.description }
    ]
  },
  {
    name: 'Compute',
    color: 'border-tf-accent-sky text-tf-accent-sky',
    items: [
      { id: 'prompt', name: nodeTypes.promptNode.title, description: nodeTypes.promptNode.description },
      { id: 'model', name: nodeTypes.modelNode.title, description: nodeTypes.modelNode.description },
      { id: 'code', name: nodeTypes.codeNode.title, description: nodeTypes.codeNode.description }
    ]
  },
  {
    name: 'Action',
    color: 'border-tf-accent-emerald text-tf-accent-emerald',
    items: [
      { id: 'buy', name: nodeTypes.buyNode.title, description: nodeTypes.buyNode.description },
      { id: 'sell', name: nodeTypes.sellNode.title, description: nodeTypes.sellNode.description },
      { id: 'mirror', name: nodeTypes.mirrorNode.title, description: nodeTypes.mirrorNode.description },
      { id: 'swap', name: nodeTypes.swapNode.title, description: nodeTypes.swapNode.description }
    ]
  },
  {
    name: 'Input',
    color: 'border-tf-accent-violet text-tf-accent-violet',
    items: [
      { id: 'media-listener', name: nodeTypes.mediaListenerNode.title, description: nodeTypes.mediaListenerNode.description },
      { id: 'market-listener', name: nodeTypes.marketListenerNode.title, description: nodeTypes.marketListenerNode.description },
      { id: 'file-input', name: nodeTypes.fileInputNode.title, description: nodeTypes.fileInputNode.description }
    ]
  },
  {
    name: 'Output',
    color: 'border-tf-accent-rose text-tf-accent-rose',
    items: [
      { id: 'panel', name: nodeTypes.panelNode.title, description: nodeTypes.panelNode.description },
      { id: 'file-output', name: nodeTypes.fileOutputNode.title, description: nodeTypes.fileOutputNode.description },
      { id: 'http-call', name: nodeTypes.httpCallNode.title, description: nodeTypes.httpCallNode.description },
      { id: 'message', name: nodeTypes.messageNode.title, description: nodeTypes.messageNode.description }
    ]
  }
];

const MIN_WIDTH = 50;
const MAX_WIDTH = 600;
const DEFAULT_WIDTH = 300;

const ComponentPanel: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const [lastWidth, setLastWidth] = useState(DEFAULT_WIDTH);

  // Clean up event listeners on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
        setWidth(newWidth);
        setLastWidth(newWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const toggleCollapse = () => {
    if (!isCollapsed) {
      setLastWidth(width);
      setWidth(MIN_WIDTH);
    } else {
      setWidth(lastWidth);
    }
    setIsCollapsed(!isCollapsed);
  };

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
    <div 
      className={`h-full bg-tf-dark-gray border-r border-tf-light-gray flex flex-col transition-all duration-300 relative ${isResizing ? 'select-none' : ''}`}
      style={{ width: isCollapsed ? '50px' : `${width}px` }}
    >
      {/* Resize handle */}
      <div
        className="absolute right-0 top-0 w-1 h-full cursor-col-resize hover:bg-tf-accent-primary/30 transition-colors"
        onMouseDown={handleMouseDown}
      />
      {/* Collapse toggle */}
      <button
        onClick={toggleCollapse}
        className="absolute right-[-12px] top-4 w-6 h-6 bg-tf-dark-gray border border-tf-light-gray rounded-full flex items-center justify-center z-10 hover:border-tf-accent-primary transition-colors"
      >
        <ChevronRightIcon
          className={`w-4 h-4 text-tf-gray-white transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`
          p-4 flex-1 overflow-hidden transition-all duration-300
          ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <h2 className="text-lg font-semibold mb-4 text-tf-white bg-gradient-to-r from-tf-gradient-1-from to-tf-gradient-1-to bg-clip-text text-transparent">
          Components
        </h2>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2 bg-tf-light-gray text-tf-gray-white border border-tf-light-gray rounded-lg placeholder-tf-gray-white focus:outline-none focus:border-tf-accent-primary-light focus:ring-1 focus:ring-tf-accent-primary-light transition-colors duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-tf-gray-white" />
        </div>
        <div className="space-y-2 overflow-y-auto">
          {COMPONENT_CATEGORIES.map((category) => (
            <div 
              key={category.name} 
              className={`border rounded-lg ${category.color} bg-gradient-to-r from-tf-dark-gray to-tf-light-gray backdrop-blur-sm transition-all duration-300 hover:from-tf-light-gray hover:to-tf-light-gray`}
            >
              <button
                className="w-full px-4 py-2 flex items-center justify-between transition-colors duration-200"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-tf-white">{category.name}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-tf-light-gray/50 text-tf-gray-white">
                    {category.items.length}
                  </span>
                </div>
                {expandedCategories.includes(category.name) ? (
                  <ChevronDownIcon className="h-5 w-5 text-tf-gray-white transition-transform duration-200 transform rotate-180" />
                ) : (
                  <ChevronRightIcon className="h-5 w-5 text-tf-gray-white transition-transform duration-200" />
                )}
              </button>
              {expandedCategories.includes(category.name) && (
                <div className="p-2 space-y-1">
                  {category.items
                    .filter(item =>
                      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className="p-2 rounded hover:bg-tf-light-gray/50 cursor-grab transition-all duration-200 group relative"
                        draggable
                        onDragStart={(e) => onDragStart(e, item.id)}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="text-tf-white text-sm font-medium group-hover:text-tf-accent-primary-light transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[10px] px-1.5 py-0.5 rounded-full bg-tf-light-gray/30 text-tf-gray-white font-mono">
                            TFN-{String(index + 1).padStart(3, '0')}
                          </div>
                        </div>
                        <div className="text-tf-gray-white text-xs line-clamp-2 group-hover:text-tf-gray-white/80 transition-colors">
                          {item.description}
                        </div>
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
