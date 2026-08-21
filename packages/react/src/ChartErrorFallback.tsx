import React from 'react';
import { cn } from './utils';

export interface ChartErrorFallbackProps {
  message?: string;
  className?: string;
}

export const ChartErrorFallback: React.FC<ChartErrorFallbackProps> = ({
  message = 'Chart validation failed.',
  className,
}) => {
  return (
    <div
      className={cn(
        'vizora-error-fallback flex flex-col items-center justify-center min-h-[220px] w-full rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center shadow-inner',
        className
      )}
    >
      <div className="mb-3 rounded-full bg-amber-500/10 p-3 text-amber-600 dark:text-amber-400">
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>
      <h4 className="text-sm font-semibold font-mono text-foreground mb-1">
        Chart Encoding Notice
      </h4>
      <p className="text-xs font-mono text-muted-foreground max-w-md leading-relaxed whitespace-pre-wrap">
        {message}
      </p>
    </div>
  );
};
