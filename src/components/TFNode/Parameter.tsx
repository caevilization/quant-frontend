import React, { useState } from 'react';
import Handle from './Handle';
import { XCircle, HelpCircle } from 'lucide-react';
import { Position } from 'reactflow';
import { TFParameter } from './types';

interface ParameterProps {
  parameter: TFParameter;
  onDelete: (id: string) => void;
  onChange: (id: string, value: string | number | string[]) => void;
}

const Parameter: React.FC<ParameterProps> = ({ parameter, onDelete, onChange }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const renderInput = () => {
    switch (parameter.type) {
      case 'text':
        return (
          <input
            type="text"
            className="w-full bg-tf-dark-gray text-tf-white border border-tf-light-gray rounded px-2 py-1"
            placeholder={parameter.placeholder}
            value={parameter.value as string || ''}
            onChange={(e) => onChange(parameter.id, e.target.value)}
          />
        );
      // Add other input types here
      default:
        return null;
    }
  };

  return (
    <div className="mb-2 relative">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          {parameter.tooltip && (
            <div className="relative mr-1">
              <HelpCircle
                className="w-4 h-4 text-tf-gray-white cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className="absolute bottom-full left-0 mb-1 p-2 bg-tf-light-gray text-tf-white text-sm rounded shadow-lg whitespace-nowrap">
                  {parameter.tooltip}
                </div>
              )}
            </div>
          )}
          <span className="text-tf-white text-sm">{parameter.title}</span>
        </div>
        <XCircle
          className="w-4 h-4 text-tf-gray-white cursor-pointer hover:text-tf-white"
          onClick={() => onDelete(parameter.id)}
        />
      </div>
      <div className="relative">
        {parameter.inputType === 'text' && (
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Handle
              type="target"
              position={Position.Left}
              inputType={parameter.inputType}
            />
          </div>
        )}
        {renderInput()}
      </div>
    </div>
  );
};

export default Parameter;
