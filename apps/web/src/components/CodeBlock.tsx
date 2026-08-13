'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  title,
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-none border border-[#1e2a22] bg-[#111813] text-[#e0e3de] overflow-hidden font-mono text-xs shadow-lg">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#1b251e] border-b border-[#2d3a30] text-[#909c8d] text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#d6502b]/60"></span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#c2872e]/60"></span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#6e756a]/60"></span>
            <span className="ml-2 font-medium text-[#c3c8c2]">{title}</span>
          </div>
          <span className="uppercase text-[10px] tracking-wider text-[#6e756a]">{language}</span>
        </div>
      )}

      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 text-[11px] font-mono bg-[#1b251e] hover:bg-[#2d3a30] text-[#c3c8c2] border border-[#2d3a30] transition-colors flex items-center gap-1.5"
          title="Copy code"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-[#88c070]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#88c070]">COPIED</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5 text-[#909c8d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>COPY</span>
            </>
          )}
        </button>

        <div className="p-4 overflow-x-auto max-h-[420px] scrollbar-thin">
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="hover:bg-[#18221b]/50">
                  {showLineNumbers && (
                    <td className="w-8 pr-4 text-right select-none text-[#434844] font-mono text-[11px] align-top">
                      {idx + 1}
                    </td>
                  )}
                  <td className="font-mono text-[12px] leading-relaxed text-[#d8dbd6] whitespace-pre align-top">
                    {formatCodeLine(line)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function formatCodeLine(line: string) {
  // Simple syntax highlighter for React / TS / JSON
  if (line.trim().startsWith('//')) {
    return <span className="text-[#6e756a] italic">{line}</span>;
  }
  
  return (
    <span>
      {line.split(/(\b(?:import|export|from|const|function|return|interface|type|default|string|number|boolean|Record|Array|undefined)\b|"[^"]*"|'[^']*'|<[^>]+>|[{}[\](),:;])/g).map((part, i) => {
        if (!part) return null;
        
        // Keywords
        if (/^(import|export|from|const|function|return|interface|type|default|Record|Array)$/.test(part)) {
          return <span key={i} className="text-[#d6502b] font-semibold">{part}</span>;
        }
        // Types
        if (/^(string|number|boolean|undefined)$/.test(part)) {
          return <span key={i} className="text-[#c2872e]">{part}</span>;
        }
        // Strings
        if (/^"[^"]*"$|^'[^']*'$/.test(part)) {
          return <span key={i} className="text-[#a4c995]">{part}</span>;
        }
        // JSX Tags
        if (/^<[^>]+>$/.test(part)) {
          return <span key={i} className="text-[#64b5f6]">{part}</span>;
        }
        // Punctuations / Brackets
        if (/^[{}[\](),:;]$/.test(part)) {
          return <span key={i} className="text-[#747873]">{part}</span>;
        }
        
        return part;
      })}
    </span>
  );
}
