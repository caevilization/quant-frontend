import React from 'react';
import { Handle as ReactFlowHandle, Position } from 'reactflow';
import { InputType } from './types';

interface HandleProps {
  type: 'source' | 'target';
  position: Position;
  inputType: InputType;
}

const Handle: React.FC<HandleProps> = ({ type, position, inputType }) => {
  if (inputType === 'none') return null;

  return (
    <div className="relative group">
      <ReactFlowHandle
        type={type}
        position={position}
        className={`
          !w-4 !h-4 !bg-transparent !border-2 !border-tf-accent-blue rounded-full
          group-hover:!border-tf-accent-blue group-hover:animate-glow
          before:content-[''] before:absolute before:w-2 before:h-2 before:bg-tf-accent-blue-light
          before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
        `}
      />
    </div>
  );
};

export default Handle;
