import React from 'react';
import { Handle as ReactFlowHandle, Position } from 'reactflow';
import { InputType } from './types';

interface HandleProps {
  type: 'source' | 'target';
  position: Position;
  inputType: InputType;
  id: string;
}

const Handle: React.FC<HandleProps> = ({ type, position, inputType, id }) => {
  if (inputType === 'none') return null;

  return (
    <div className="relative group">
      <ReactFlowHandle
        type={type}
        position={position}
        id={id}
        className={`
          !w-4 !h-4 !bg-transparent !border-2 !border-tf-accent-primary rounded-full
          group-hover:!border-tf-accent-primary-light group-hover:!border-[3px] transition-all duration-300
          before:content-[''] before:absolute before:w-2 before:h-2 before:bg-tf-accent-primary
          before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
          before:opacity-50 group-hover:before:opacity-100 before:transition-opacity
          after:content-[''] after:absolute after:w-8 after:h-8 after:-left-2 after:-top-2
          after:rounded-full after:bg-gradient-to-r after:from-tf-gradient-1-from after:to-tf-gradient-1-to/0
          group-hover:after:from-tf-gradient-1-from group-hover:after:to-tf-gradient-1-to/30
          after:blur-md after:transition-all after:duration-300
          after:animate-[pulse_2s_ease-in-out_infinite]
        `}
      />
    </div>
  );
};

export default Handle;
