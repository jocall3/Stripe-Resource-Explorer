
import React from 'react';

interface SidebarProps {
  keys: string[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ keys, selectedId, onSelect }) => {
  if (keys.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <p className="text-slate-400 text-sm">No resources found matching your search.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-1">
      {keys.map((key) => (
        <li key={key}>
          <button
            onClick={() => onSelect(key)}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
              selectedId === key
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full transition-all ${
              selectedId === key ? 'bg-indigo-600 scale-125' : 'bg-slate-300'
            }`} />
            <span className="truncate capitalize">{key.replace(/[._]/g, ' ')}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
