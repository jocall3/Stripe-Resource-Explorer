
import React, { useState, useMemo } from 'react';
import { STRIPE_RESOURCES_DATA, ICONS } from './constants';
import Sidebar from './components/Sidebar';
import ResourceViewer from './components/ResourceViewer';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('account');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.STRUCTURED);

  const resourceKeys = useMemo(() => {
    return Object.keys(STRIPE_RESOURCES_DATA).filter(key =>
      key.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectedData = useMemo(() => {
    return (STRIPE_RESOURCES_DATA as any)[selectedId];
  }, [selectedId]);

  return (
    <div className="flex h-screen w-full bg-slate-50">
      {/* Navigation Sidebar */}
      <div className="w-80 flex-shrink-0 flex flex-col border-r border-slate-200 bg-white shadow-sm z-10">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-indigo-200 shadow-lg">
              <ICONS.Box className="w-5 h-5" />
            </div>
            <h1 className="font-bold text-xl text-slate-800 tracking-tight">Stripe SDK</h1>
          </div>
          
          <div className="relative group">
            <ICONS.Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border-none rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <Sidebar
            keys={resourceKeys}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 flex-shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-slate-400 font-medium">Resources</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold truncate capitalize">{selectedId.replace(/_/g, ' ')}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode(ViewMode.STRUCTURED)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  viewMode === ViewMode.STRUCTURED
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Explorer
              </button>
              <button
                onClick={() => setViewMode(ViewMode.RAW)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  viewMode === ViewMode.RAW
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                JSON
              </button>
            </div>
            
            <button
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(selectedData, null, 2));
              }}
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-slate-200"
              title="Copy to clipboard"
            >
              <ICONS.Copy className="w-4 h-4" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-hidden relative">
          <ResourceViewer
            id={selectedId}
            data={selectedData}
            viewMode={viewMode}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
