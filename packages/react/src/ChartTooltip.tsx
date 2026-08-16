import React from 'react';
import { cn } from './utils';

export interface ChartTooltipProps extends React.ComponentProps<'div'> {
  title?: string;
  items?: { label: string; value: string | number; color?: string }[];
}

export const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ className, title, items = [], ...props }, ref) => {
    if (!items.length && !title) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'z-50 grid min-w-[9rem] items-start gap-1.5 rounded-lg border border-border/80 bg-background/95 backdrop-blur-md px-3 py-2 text-xs shadow-2xl transition-all duration-75 ease-out select-none pointer-events-none ring-1 ring-black/5 dark:ring-white/10',
          className
        )}
        {...props}
      >
        {title && (
          <div className="font-semibold text-foreground border-b border-border/40 pb-1 mb-0.5 text-[11px] uppercase tracking-wide">
            {title}
          </div>
        )}
        {items.map((item, index) => (
          <div key={index} className="flex w-full items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full shadow-xs"
                style={{ backgroundColor: item.color || '#6366f1' }}
              />
              <span className="text-muted-foreground font-medium">{item.label}</span>
            </div>
            <span className="font-mono font-bold text-foreground text-xs">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }
);

ChartTooltip.displayName = 'ChartTooltip';
