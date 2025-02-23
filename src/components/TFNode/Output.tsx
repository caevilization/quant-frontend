import React from 'react';
import Handle from './Handle';
import { XCircle } from 'lucide-react';
import { Position } from 'reactflow';
import { TFOutput } from './types';

interface OutputProps {
  output: TFOutput;
  onDelete: (id: string) => void;
}

const Output: React.FC<OutputProps> = ({ output, onDelete }) => {
  return (
    <div className="relative bg-tf-light-gray px-3 py-2 last:rounded-b-lg">
      <div className="flex items-center justify-between">
        <XCircle
          className="w-4 h-4 text-tf-gray-white cursor-pointer hover:text-tf-white"
          onClick={() => onDelete(output.id)}
        />
        <span className="text-tf-white text-sm">{output.title}</span>
      </div>
      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
        <Handle
          type="source"
          position={Position.Right}
          inputType={output.type}
        />
      </div>
    </div>
  );
};

export default Output;
