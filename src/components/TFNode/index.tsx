import React, { useState } from 'react';
import { NodeProps } from 'reactflow';
import { ChevronDown, ChevronUp, Pencil } from 'lucide-react';
import Parameter from './Parameter';
import Output from './Output';
import { TFNodeData, TFParameter, TFOutput } from './types';

const nodeTypeColors = {
  account: 'border-yellow-500',
  compute: 'border-blue-500',
  action: 'border-green-500',
  data: 'border-red-500'
};

const TFNode: React.FC<NodeProps<TFNodeData>> = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(data.description);
  const [showDeleted, setShowDeleted] = useState(false);
  const [parameters, setParameters] = useState(data.parameters);
  const [outputs, setOutputs] = useState(data.outputs);

  const handleParameterDelete = (id: string) => {
    setParameters(prev => 
      prev.map(p => p.id === id ? { ...p, isDeleted: true } : p)
    );
  };

  const handleOutputDelete = (id: string) => {
    setOutputs(prev => 
      prev.map(o => o.id === id ? { ...o, isDeleted: true } : o)
    );
  };

  const handleParameterChange = (id: string, value: string | number | string[]) => {
    setParameters(prev =>
      prev.map(p => p.id === id ? { ...p, value } : p)
    );
  };

  const handleParameterRestore = (id: string) => {
    setParameters(prev =>
      prev.map(p => p.id === id ? { ...p, isDeleted: false } : p)
    );
  };

  const handleOutputRestore = (id: string) => {
    setOutputs(prev =>
      prev.map(o => o.id === id ? { ...o, isDeleted: false } : o)
    );
  };

  const hasDeletedItems = parameters.some(p => p.isDeleted) || outputs.some(o => o.isDeleted);

  return (
    <div className={`bg-tf-dark-gray rounded-lg border ${nodeTypeColors[data.nodeType]} min-w-[250px] relative`}>
      {/* Header */}
      <div className="p-3 border-b border-tf-light-gray">
        <div className="flex items-center gap-2 mb-2">
          {data.icon && (
            <img src={data.icon} alt="icon" className="w-5 h-5" />
          )}
          <span className="text-white font-medium">{data.title}</span>
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

      {/* Parameters */}
      <div className="p-3 border-b border-[#232326]">
        {parameters
          .filter(p => !p.isDeleted)
          .map(parameter => (
            <Parameter
              key={parameter.id}
              parameter={parameter}
              onDelete={handleParameterDelete}
              onChange={handleParameterChange}
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
        <div
          className={`
            absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8
            bg-tf-light-gray rounded-full flex items-center justify-center
            cursor-pointer hover:bg-tf-accent-blue transition-colors
          `}
          onClick={() => setShowDeleted(!showDeleted)}
        >
          {showDeleted ? (
            <ChevronUp className="w-5 h-5 text-tf-white" />
          ) : (
            <ChevronDown className="w-5 h-5 text-tf-white" />
          )}
        </div>
      )}
      {showDeleted && (
        <div className="absolute top-full left-0 right-0 mt-6 p-3 bg-tf-light-gray rounded-lg shadow-lg z-10">
          {parameters
            .filter(p => p.isDeleted)
            .map(parameter => (
              <div
                key={parameter.id}
                className="flex items-center justify-between p-2 hover:bg-tf-dark-gray rounded cursor-pointer"
                onClick={() => handleParameterRestore(parameter.id)}
              >
                <span className="text-tf-white text-sm">{parameter.title}</span>
                <span className="text-tf-gray-white text-xs">Parameter</span>
              </div>
            ))}
          {outputs
            .filter(o => o.isDeleted)
            .map(output => (
              <div
                key={output.id}
                className="flex items-center justify-between p-2 hover:bg-tf-dark-gray rounded cursor-pointer"
                onClick={() => handleOutputRestore(output.id)}
              >
                <span className="text-tf-white text-sm">{output.title}</span>
                <span className="text-tf-gray-white text-xs">Output</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default TFNode;
