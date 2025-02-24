import React, { useState } from 'react';
import { NodeProps } from 'reactflow';
import { ChevronDown, ChevronUp, Pencil, Play, RefreshCw } from 'lucide-react';
import Input from './Input';
import Output from './Output';
import { TFNodeData, TFInput, TFOutput } from './types';

const nodeTypeColors = {
  account: 'text-tf-accent-amber',
  compute: 'text-tf-accent-sky',
  action: 'text-tf-accent-emerald',
  input: 'text-tf-accent-violet',
  output: 'text-tf-accent-rose',
  default: 'text-tf-gray-white'
};

const TFNode: React.FC<NodeProps<TFNodeData>> = ({ data, type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(data?.description || '');
  const [showDeleted, setShowDeleted] = useState(false);
  const [inputs, setInputs] = useState(data?.inputs || []);
  const [outputs, setOutputs] = useState(data?.outputs || []);

  const handleInputDelete = (id: string) => {
    setInputs(prev => 
      prev.map(p => p.id === id ? { ...p, isDeleted: true } : p)
    );
  };

  const handleOutputDelete = (id: string) => {
    setOutputs(prev => 
      prev.map(o => o.id === id ? { ...o, isDeleted: true } : o)
    );
  };

  const handleInputChange = (id: string, value: string | number | string[]) => {
    setInputs(prev =>
      prev.map(p => p.id === id ? { ...p, value } : p)
    );
  };

  const handleInputRestore = (id: string) => {
    setInputs(prev =>
      prev.map(p => p.id === id ? { ...p, isDeleted: false } : p)
    );
  };

  const handleOutputRestore = (id: string) => {
    setOutputs(prev =>
      prev.map(o => o.id === id ? { ...o, isDeleted: false } : o)
    );
  };

  const hasDeletedItems = inputs.some(p => p.isDeleted) || outputs.some(o => o.isDeleted);

  return (
    <div 
      className={`
        bg-tf-dark-gray rounded-lg border border-tf-light-gray min-w-[250px] relative overflow-hidden
        transition-all duration-200
        ${data.selected ? 'border-tf-white ring-1 ring-tf-white' : 'border-tf-light-gray'}
      `}
    >
      {/* Header */}
      <div className="p-3 border-b border-tf-light-gray bg-tf-dark-gray">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {data?.icon && (
              <span className={nodeTypeColors[data?.nodeType || 'default']}>{data.icon}</span>
            )}
            <span className="text-tf-gray-white font-medium">{data?.title || type}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => data.onRunOnce?.()}
              className="p-1 rounded hover:bg-tf-light-gray/50 transition-colors"
              title="Run Once"
            >
              <Play className="w-4 h-4 text-tf-gray-white hover:text-tf-accent-primary transition-colors" />
            </button>
            <button
              onClick={() => data.onAutomate?.()}
              className="p-1 rounded hover:bg-tf-light-gray/50 transition-colors"
              title="Automate"
            >
              <RefreshCw className="w-4 h-4 text-tf-gray-white hover:text-tf-accent-primary transition-colors" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={() => setIsEditing(false)}
              className="w-full bg-tf-light-gray text-tf-white px-2 py-1 rounded"
              autoFocus
            />
          ) : (
            <div
              className="text-tf-gray-white text-sm cursor-pointer hover:text-tf-white"
              onClick={() => setIsEditing(true)}
            >
              {description}
              <Pencil className="inline-block ml-2 w-3 h-3" />
            </div>
          )}
        </div>
      </div>

      {/* Inputs */}
      <div className="p-3 border-b border-[#232326]">
        {inputs
          .filter(p => !p.isDeleted)
          .map(input => (
            <Input
              key={input.id}
              input={input}
              onDelete={handleInputDelete}
              onChange={handleInputChange}
            />
          ))}
      </div>

      {/* Outputs */}
      <div className="overflow-hidden">
        {outputs
          .filter(o => !o.isDeleted)
          .map(output => (
            <Output
              key={output.id}
              output={output}
              onDelete={handleOutputDelete}
            />
          ))}
      </div>

      {/* Deleted Items Section */}
      {hasDeletedItems && (
        <div className="relative z-10">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <button
              onClick={() => setShowDeleted(!showDeleted)}
              className={`
                w-8 h-8 rounded-full bg-tf-light-gray flex items-center justify-center shadow-lg
                hover:bg-tf-accent-primary transition-colors duration-200
                ${showDeleted ? 'bg-tf-accent-primary' : ''}
              `}
            >
              {showDeleted ? (
                <ChevronUp className="w-5 h-5 text-tf-white" />
              ) : (
                <ChevronDown className="w-5 h-5 text-tf-white" />
              )}
            </button>
          </div>
          
          {/* Deleted items list */}
          {showDeleted && (
            <div 
              className="
                absolute mt-4 bg-tf-dark-gray border border-tf-light-gray rounded-lg p-3 shadow-lg
                min-w-[250px] left-1/2 -translate-x-1/2 top-0
                backdrop-blur-sm bg-opacity-95
              "
            >
              {inputs.filter(p => p.isDeleted).length === 0 && outputs.filter(o => o.isDeleted).length === 0 && (
                <div className="text-tf-gray-white text-sm text-center py-2">No deleted items</div>
              )}
              {inputs.filter(p => p.isDeleted).map(input => (
                <div
                  key={input.id}
                  className="flex items-center justify-between p-2 hover:bg-tf-light-gray/50 rounded-md group transition-colors cursor-pointer"
                  onClick={() => {
                    handleInputRestore(input.id);
                    if (inputs.filter(p => p.isDeleted).length === 1 && outputs.filter(o => o.isDeleted).length === 0) {
                      setShowDeleted(false);
                    }
                  }}
                >
                  <span className="text-tf-gray-white group-hover:text-tf-white transition-colors">{input.title}</span>
                  <span className="text-tf-accent-primary text-sm group-hover:text-tf-accent-primary-light">Restore</span>
                </div>
              ))}
              {outputs.filter(o => o.isDeleted).map(output => (
                <div
                  key={output.id}
                  className="flex items-center justify-between p-2 hover:bg-tf-light-gray/50 rounded-md group transition-colors cursor-pointer"
                  onClick={() => {
                    handleOutputRestore(output.id);
                    if (outputs.filter(o => o.isDeleted).length === 1 && inputs.filter(p => p.isDeleted).length === 0) {
                      setShowDeleted(false);
                    }
                  }}
                >
                  <span className="text-tf-gray-white group-hover:text-tf-white transition-colors">{output.title}</span>
                  <span className="text-tf-accent-primary text-sm group-hover:text-tf-accent-primary-light">Restore</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TFNode;
