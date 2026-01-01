
import React from 'react';
import { ViewMode } from '../types';
import StructuredView from './StructuredView';
import RawJSONView from './RawJSONView';

interface ResourceViewerProps {
  id: string;
  data: any;
  viewMode: ViewMode;
}

const ResourceViewer: React.FC<ResourceViewerProps> = ({ id, data, viewMode }) => {
  return (
    <div className="h-full flex flex-col animate-in fade-in duration-300">
      {viewMode === ViewMode.STRUCTURED ? (
        <StructuredView data={data} id={id} />
      ) : (
        <RawJSONView data={data} />
      )}
    </div>
  );
};

export default ResourceViewer;
