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
          'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl transition-all ease-in-out',
          className
        )}
        {...props}
      >
        {title && <div className="font-medium text-foreground">{title}</div>}
        {items.map((item, index) => (
          <div key={index} className="flex w-full items-center gap-2">
            {item.color && (
              <span
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span className="text-muted-foreground">{item.label}</span>
            <span className="ml-auto font-mono font-medium text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    );
  }
);

ChartTooltip.displayName = 'ChartTooltip';
