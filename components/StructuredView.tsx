
import React from 'react';

interface StructuredViewProps {
  data: any;
  id: string;
}

const StructuredView: React.FC<StructuredViewProps> = ({ data, id }) => {
  const renderValue = (val: any) => {
    if (val === null) return <span className="text-slate-400 italic">null</span>;
    if (typeof val === 'boolean') return <span className={val ? 'text-emerald-600 font-semibold' : 'text-rose-600 font-semibold'}>{val ? 'true' : 'false'}</span>;
    if (typeof val === 'number') return <span className="text-blue-600 font-medium">{val.toLocaleString()}</span>;
    if (typeof val === 'string') return <span className="text-slate-800 break-words">"{val}"</span>;
    if (Array.isArray(val)) return <span className="text-slate-400">Array({val.length})</span>;
    return <span className="text-slate-400">Object</span>;
  };

  const renderSection = (obj: any, level = 0) => {
    return Object.entries(obj).map(([key, value]) => {
      const isNested = value !== null && typeof value === 'object' && !Array.isArray(value);
      
      return (
        <div key={key} className={`border-l-2 border-slate-100 pl-6 py-2 transition-colors hover:border-indigo-200`}>
          <div className="flex items-baseline gap-4 mb-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider min-w-[120px]">{key.replace(/_/g, ' ')}</span>
            {!isNested && <div className="text-sm font-medium">{renderValue(value)}</div>}
          </div>
          {isNested && (
            <div className="mt-2 space-y-1">
              {renderSection(value, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="h-full overflow-y-auto bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 capitalize">{id.replace(/_/g, ' ')}</h2>
          <p className="text-slate-500">Resource identifier: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-medium">{data?.id || 'N/A'}</code></p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-6">
            {renderSection(data)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuredView;
