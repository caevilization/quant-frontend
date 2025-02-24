import React from 'react';
import { IconFileExport } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface FileOutputNodeProps extends NodeProps<TFNodeData> {}

const FileOutputNode: React.FC<FileOutputNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...fileOutputConfig
  }} />;
};

export const fileOutputConfig: Partial<TFNodeData> = {
  icon: <IconFileExport className="w-5 h-5" />,
  title: 'TFN-402 File Output Node',
  description: 'Export data to various file formats',
  nodeType: 'output',
  inputs: [
    {
      id: 'filePath',
      title: 'File Path',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter output file path'
    },
    {
      id: 'fileType',
      title: 'File Type',
      type: 'select',
      inputType: 'text',
      options: ['CSV', 'JSON', 'Excel', 'Text'],
      value: 'CSV'
    },
    {
      id: 'encoding',
      title: 'Encoding',
      type: 'select',
      inputType: 'text',
      options: ['UTF-8', 'ASCII', 'ISO-8859-1'],
      value: 'UTF-8'
    },
    {
      id: 'writeMode',
      title: 'Write Mode',
      type: 'select',
      inputType: 'text',
      options: ['Overwrite', 'Append'],
      value: 'Overwrite'
    }
  ],
  outputs: []
};

export default FileOutputNode;
