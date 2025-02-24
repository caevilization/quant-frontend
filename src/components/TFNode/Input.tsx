import React, { useState } from 'react';
import Handle from './Handle';
import { XCircle, HelpCircle } from 'lucide-react';
import { Position } from 'reactflow';
import { TFInput } from './types';

interface InputProps {
  input: TFInput;
  onDelete: (id: string) => void;
  onChange: (id: string, value: string | number | string[]) => void;
}

const Input: React.FC<InputProps> = ({ input, onDelete, onChange }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const renderInput = () => {
    const baseInputClass = "w-full bg-tf-dark-gray text-tf-gray-white border border-tf-light-gray rounded px-2 py-1 focus:border-tf-accent-primary-light focus:ring-1 focus:ring-tf-accent-primary-light focus:outline-none transition-colors duration-200";

    switch (input.type) {
      case 'text':
        return (
          <input
            type="text"
            className={baseInputClass}
            placeholder={input.placeholder}
            value={input.value as string || ''}
            onChange={(e) => onChange(input.id, e.target.value)}
          />
        );
      case 'number':
        return (
          <input
            type="number"
            className={baseInputClass}
            placeholder={input.placeholder}
            value={input.value as number || 0}
            onChange={(e) => onChange(input.id, parseFloat(e.target.value))}
          />
        );
      case 'select':
        return (
          <select
            className={baseInputClass}
            value={input.value as string || ''}
            onChange={(e) => onChange(input.id, e.target.value)}
          >
            {input.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'multiselect':
        return (
          <select
            className={baseInputClass}
            value={input.value as string[] || []}
            multiple
            onChange={(e) => {
              const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
              onChange(input.id, selectedOptions);
            }}
          >
            {input.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'paragraph':
        return (
          <textarea
            className={`${baseInputClass} min-h-[100px] resize-y`}
            placeholder={input.placeholder}
            value={input.value as string || ''}
            onChange={(e) => onChange(input.id, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-2 relative">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          {input.tooltip && (
            <div className="relative mr-1">
              <HelpCircle
                className="w-4 h-4 text-tf-gray-white cursor-help hover:text-tf-accent-primary-light transition-colors duration-200"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className="absolute bottom-full left-0 mb-1 p-2 bg-gradient-to-r from-tf-gradient-1-from to-tf-gradient-1-to text-tf-white text-sm rounded shadow-lg whitespace-nowrap backdrop-blur-sm bg-opacity-90">
                  {input.tooltip}
                </div>
              )}
            </div>
          )}
          <span className="text-tf-white text-sm">{input.title}</span>
        </div>
        <XCircle
          className="w-4 h-4 text-tf-gray-white cursor-pointer hover:text-tf-accent-rose transition-colors duration-200"
          onClick={() => onDelete(input.id)}
        />
      </div>
      <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
        <div className="w-4">
          {input.type !== 'none' && (
            <Handle
              type="target"
              position={Position.Left}
              inputType={input.type}
              id={`${input.id}-handle`}
            />
          )}
        </div>
        <div className="w-full">
          {renderInput()}
        </div>
      </div>
    </div>
  );
};

export default Input;
