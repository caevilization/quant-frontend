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
    <div className="bg-tf-light-gray px-3 py-2 last:rounded-b-lg">
      <div className="grid grid-cols-[auto,1fr,auto] gap-2 items-center">
        <XCircle
          className="w-4 h-4 text-tf-gray-white cursor-pointer hover:text-tf-accent-rose transition-colors duration-200"
          onClick={() => onDelete(output.id)}
        />
        <span className="text-tf-gray-white text-sm">{output.title}</span>
        <div className="w-4">
          {output.type !== 'none' && (
            <Handle
              type="source"
              position={Position.Right}
              inputType={output.type}
              id={`${output.id}-handle`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Output;
