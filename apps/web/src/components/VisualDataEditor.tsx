'use client';

import React from 'react';

interface VisualDataEditorProps {
  data: Record<string, unknown>[];
  onChange: (newData: Record<string, unknown>[]) => void;
}

export const VisualDataEditor: React.FC<VisualDataEditorProps> = ({ data, onChange }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-xs font-mono text-[#6e756a] border border-[#1e2a22]">
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
        <span className="text-[#909c8d] font-bold">Interactive Spreadsheet Editor</span>
        <button
          onClick={handleAddRow}
          className="px-2.5 py-1 bg-[#1b251e] hover:bg-[#2d3a30] text-[#c2872e] border border-[#2d3a30] text-[11px] font-bold transition-colors"
        >
          + ADD ROW
        </button>
      </div>

      <div className="overflow-x-auto border border-[#2d3a30] bg-[#111813]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#18221b] text-[#c2872e] border-b border-[#2d3a30]">
              <th className="p-2 w-8 text-center text-[#6e756a]">#</th>
              {keys.map((key) => (
                <th key={key} className="p-2 border-r border-[#2d3a30] uppercase font-bold text-[11px]">
                  {key}
                </th>
              ))}
              <th className="p-2 w-12 text-center text-[#6e756a]">Act</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-[#18221b]/50 border-b border-[#2d3a30]/60">
                <td className="p-2 text-center text-[#6e756a] text-[11px] select-none">
                  {rowIdx + 1}
                </td>
                {keys.map((key) => (
                  <td key={key} className="p-1 border-r border-[#2d3a30]">
                    <input
                      type="text"
                      value={String(row[key] ?? '')}
                      onChange={(e) => handleCellChange(rowIdx, key, e.target.value)}
                      className="w-full bg-[#18221b] text-[#a4c995] px-2 py-1 border border-transparent hover:border-[#2d3a30] focus:border-[#c2872e] focus:outline-none font-mono text-xs"
                    />
                  </td>
                ))}
                <td className="p-1 text-center">
                  <button
                    onClick={() => handleDeleteRow(rowIdx)}
                    disabled={data.length <= 1}
                    className="text-[#d6502b] hover:text-red-400 font-bold disabled:opacity-30 px-1"
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
