'use client';

import React, { useState } from 'react';

export interface CodeFile {
  filename: string;
  code: string;
  language?: string;
}

interface CodeBlockProps {
  code?: string;
  language?: string;
  title?: string;
  files?: CodeFile[];
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code = '',
  language = 'typescript',
  title,
  files,
  showLineNumbers = true,
  className = '',
}) => {
  const [activeFileIdx, setActiveFileIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCode = files && files.length > 0 ? files[activeFileIdx].code : code;
  const activeLang = files && files.length > 0 ? (files[activeFileIdx].language || 'typescript') : language;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const lines = activeCode.trim().split('\n');

  return (
    <div
      className={`rounded-[2px] border border-[#18241b]/15 dark:border-[#2d3a30] bg-[#0f1611] text-[#e0e3de] overflow-hidden font-mono text-xs transition-colors ${className}`}
    >
      {/* File Tabs (if multi-file) or Title Bar */}
      {files && files.length > 1 ? (
        <div className="flex items-center justify-between border-b border-[#2d3a30] bg-[#141d16] px-3">
          <div className="flex items-center gap-4">
            {files.map((file, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFileIdx(idx)}
                className={`py-2 text-[11px] font-mono tracking-wide transition-colors border-b-2 ${
                  activeFileIdx === idx
                    ? 'border-[#c2872e] text-[#f1f5ee] font-bold'
                    : 'border-transparent text-[#9ba196] hover:text-[#e0e3de]'
                }`}
              >
                {file.filename}
              </button>
            ))}
          </div>
          <span className="uppercase text-[10px] tracking-wider text-[#60685c] px-1.5 py-0.5">
            {activeLang}
          </span>
        </div>
      ) : title ? (
        <div className="flex items-center justify-between px-3.5 py-2 bg-[#141d16] border-b border-[#2d3a30] text-[#9ba196] text-[11px] font-mono">
          <span className="font-medium text-[#c3c8c2]">{title}</span>
          <span className="uppercase text-[10px] tracking-wider text-[#60685c]">{activeLang}</span>
        </div>
      ) : null}

      <div className="relative group code-scroll-container">
        {/* Outline-only Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 text-[11px] font-mono bg-[#141d16]/90 hover:bg-[#1f2c22] text-[#9ba196] hover:text-[#c2872e] border border-[#2d3a30] rounded-[2px] transition-colors flex items-center gap-1.5 select-none focus-visible:outline-2 focus-visible:outline-[#c2872e]"
          title="Copy code"
          aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span className={copied ? 'text-[#c2872e] font-semibold' : ''}>
            {copied ? 'Copied' : 'Copy'}
          </span>
        </button>

        <div className="p-3.5 overflow-x-auto max-h-[420px]">
          <table className="w-full border-collapse">
            <tbody>
              {lines.map((line, idx) => (
                <tr key={idx} className="hover:bg-[#18221b]/60 transition-colors">
                  {showLineNumbers && (
                    <td className="w-8 pr-3.5 text-right select-none text-[#60685c] font-mono text-[11px] align-top">
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
  if (line.trim().startsWith('//')) {
    return <span className="text-[#60685c] italic">{line}</span>;
  }

  return (
    <span>
      {line
        .split(
          /(\b(?:import|export|from|const|function|return|interface|type|default|string|number|boolean|Record|Array|undefined)\b|\b(?:type|data|x|y|title|orientation|color|theme|showGrid|spec|encoding)\b(?=\s*=)|"[^"]*"|'[^']*'|<[^>]+>|[{}[\](),:;])/g
        )
        .map((part, i) => {
          if (!part) return null;

          // JSX prop names (waypoint ochre)
          if (/^(type|data|x|y|title|orientation|color|theme|showGrid|spec|encoding)$/.test(part)) {
            return (
              <span key={i} className="text-[#c2872e]">
                {part}
              </span>
            );
          }

          // Keywords (flare)
          if (
            /^(import|export|from|const|function|return|interface|type|default|Record|Array)$/.test(
              part
            )
          ) {
            return (
              <span key={i} className="text-[#d6502b]">
                {part}
              </span>
            );
          }

          // Types
          if (/^(string|number|boolean|undefined)$/.test(part)) {
            return (
              <span key={i} className="text-[#c2872e]">
                {part}
              </span>
            );
          }

          // Strings (pale green)
          if (/^"[^"]*"$|^'[^']*'$/.test(part)) {
            return (
              <span key={i} className="text-[#a4c995]">
                {part}
              </span>
            );
          }

          // JSX Tags
          if (/^<[^>]+>$/.test(part)) {
            return (
              <span key={i} className="text-[#e0e4dc]">
                {part}
              </span>
            );
          }

          // Punctuations / Brackets
          if (/^[{}[\](),:;]$/.test(part)) {
            return (
              <span key={i} className="text-[#70756e]">
                {part}
              </span>
            );
          }

          return part;
        })}
    </span>
  );
}
