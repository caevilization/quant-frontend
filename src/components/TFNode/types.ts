export type NodeType = 'account' | 'compute' | 'action' | 'input' | 'output';

export type InputType = 'none' | 'text';

export interface TFInput {
  id: string;
  title: string;
  tooltip?: string;
  type: 'text' | 'number' | 'paragraph' | 'select' | 'multiselect';
  inputType: InputType;
  placeholder?: string;
  value?: string | number | string[];
  isDeleted?: boolean;
  options?: string[]; // For select and multiselect
}

export interface TFOutput {
  id: string;
  title: string;
  type: InputType;
  isDeleted?: boolean;
}

export interface TFNodeData {
  title: string;
  description: string;
  icon?: React.ReactNode;
  nodeType: NodeType;
  inputs: TFInput[];
  outputs: TFOutput[];
  onRunOnce?: () => void;
  onAutomate?: () => void;
  selected?: boolean;
}
