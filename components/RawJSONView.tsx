
import React, { useMemo } from 'react';

interface RawJSONViewProps {
  data: any;
}

const RawJSONView: React.FC<RawJSONViewProps> = ({ data }) => {
  const highlightedJSON = useMemo(() => {
    const json = JSON.stringify(data, null, 2);
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
      let cls = 'text-blue-600'; // number
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'text-slate-500 font-semibold'; // key
        } else {
          cls = 'text-emerald-600'; // string
        }
      } else if (/true|false/.test(match)) {
        cls = 'text-orange-600';
      } else if (/null/.test(match)) {
        cls = 'text-rose-600 italic';
      }
      return `<span class="${cls}">${match}</span>`;
    });
  }, [data]);

  const lines = highlightedJSON.split('\n');

  return (
    <div className="h-full overflow-hidden flex flex-col bg-slate-900 text-slate-300">
      <div className="flex-1 overflow-auto p-6 scrollbar-hide">
        <table className="w-full text-sm leading-6 border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="hover:bg-slate-800/50">
                <td className="w-10 pr-4 text-right text-slate-600 select-none border-r border-slate-800 font-mono text-xs">
                  {i + 1}
                </td>
                <td className="pl-6 font-mono whitespace-pre" dangerouslySetInnerHTML={{ __html: line }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RawJSONView;
