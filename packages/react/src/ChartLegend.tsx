import React from 'react';
import { cn } from './utils';

export interface ChartLegendProps extends React.ComponentProps<'div'> {
  payload?: { value: string; color?: string }[];
}

export const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ className, payload = [], ...props }, ref) => {
    if (!payload.length) return null;

    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-center gap-4 text-xs font-medium', className)}
        {...props}
      >
        {payload.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 shrink-0 rounded-[2px]"
              style={{ backgroundColor: item.color || 'var(--chart-1)' }}
            />
            <span className="text-muted-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }
);

ChartLegend.displayName = 'ChartLegend';
