import React from 'react';
import { cn } from './utils';

export interface ChartEmptyStateProps {
  message?: string;
  description?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const ChartEmptyState: React.FC<ChartEmptyStateProps> = ({
  message = 'No data available',
  description = 'There is no data to display for this chart encoding.',
  className,
  icon,
}) => {
  return (
    <div
      className={cn(
        'vizora-empty-state flex flex-col items-center justify-center min-h-[220px] w-full rounded-lg border border-dashed border-border/60 bg-muted/20 p-6 text-center shadow-inner',
        className
      )}
    >
      <div className="mb-3 rounded-full bg-muted p-3 text-muted-foreground">
        {icon || (
          <svg
            className="h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 1318-8-8-8 8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
          </svg>
        )}
      </div>
      <h4 className="text-sm font-semibold text-foreground mb-1">{message}</h4>
      <p className="text-xs text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
};
