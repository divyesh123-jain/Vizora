'use client';

import React from 'react';

interface VisualDataEditorProps {
  data: Record<string, unknown>[];
  onChange: (newData: Record<string, unknown>[]) => void;
}

export const VisualDataEditor: React.FC<VisualDataEditorProps> = ({ data, onChange }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-xs font-mono text-[#60685c] border border-[#18241b]/15 rounded-2xl bg-white/50">
        No data rows available. Click "Add Row" to start.
      </div>
    );
  }

  const keys = Object.keys(data[0]);

  const handleCellChange = (rowIndex: number, key: string, value: string) => {
    const updated = data.map((row, idx) => {
      if (idx !== rowIndex) return row;
      
      // Parse numeric or date types automatically if valid
      let parsedValue: unknown = value;
      if (value !== '' && !isNaN(Number(value))) {
        parsedValue = Number(value);
      }
      return {
        ...row,
        [key]: parsedValue,
      };
    });
    onChange(updated);
  };

  const handleAddRow = () => {
    const newRow: Record<string, unknown> = {};
    keys.forEach((k) => {
      const prevVal = data[data.length - 1][k];
      if (typeof prevVal === 'number') {
        newRow[k] = (prevVal as number) + 10;
      } else if (typeof prevVal === 'string') {
        newRow[k] = `Item ${data.length + 1}`;
      } else {
        newRow[k] = '';
      }
    });
    onChange([...data, newRow]);
  };

  const handleDeleteRow = (rowIndex: number) => {
    if (data.length <= 1) return; // Keep at least one row
    const updated = data.filter((_, idx) => idx !== rowIndex);
    onChange(updated);
  };

  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex items-center justify-between">
        <span className="text-[#60685c] font-bold">Interactive Spreadsheet Editor</span>
        <button
          onClick={handleAddRow}
          className="px-3 py-1.5 bg-[#c2872e] hover:bg-[#d99a38] text-white rounded-xl text-[11px] font-bold shadow-sm hover:shadow transition-all active:scale-95 flex items-center gap-1"
        >
          + ADD ROW
        </button>
      </div>

      <div className="overflow-x-auto border border-[#18241b]/15 rounded-2xl bg-[#0f1611] shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#151f17] text-[#c2872e] border-b border-slate-800">
              <th className="p-2.5 w-8 text-center text-[#9ba196]">#</th>
              {keys.map((key) => (
                <th key={key} className="p-2.5 border-r border-slate-800/80 uppercase font-bold text-[11px] tracking-wider">
                  {key}
                </th>
              ))}
              <th className="p-2.5 w-12 text-center text-[#9ba196]">Act</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-[#1a251d]/70 border-b border-slate-800/50 transition-colors">
                <td className="p-2 text-center text-[#9ba196] text-[11px] select-none">
                  {rowIdx + 1}
                </td>
                {keys.map((key) => (
                  <td key={key} className="p-1 border-r border-slate-800/50">
                    <input
                      type="text"
                      value={String(row[key] ?? '')}
                      onChange={(e) => handleCellChange(rowIdx, key, e.target.value)}
                      className="w-full bg-[#151f17] text-[#a4c995] px-2.5 py-1.5 rounded-lg border border-transparent hover:border-slate-700 focus:border-[#c2872e] focus:ring-2 focus:ring-[#c2872e]/20 focus:outline-none font-mono text-xs transition-all"
                    />
                  </td>
                ))}
                <td className="p-1 text-center">
                  <button
                    onClick={() => handleDeleteRow(rowIdx)}
                    disabled={data.length <= 1}
                    className="text-[#d6502b] hover:text-red-400 font-bold disabled:opacity-30 px-2 py-1 rounded-md hover:bg-red-500/10 transition-colors"
                    title="Delete row"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
