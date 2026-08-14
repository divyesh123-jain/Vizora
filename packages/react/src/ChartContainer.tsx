import React, { createContext, useContext, useId } from 'react';
import { cn } from './utils';

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<string, string>;
  }
>;

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

export function useChartContext() {
  const context = useContext(ChartContext);
  return context;
}

export interface ChartContainerProps extends React.ComponentProps<'div'> {
  config?: ChartConfig;
  children: React.ReactNode;
}

export const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ id, className, children, config = {}, style, ...props }, ref) => {
    const uniqueId = useId();
    const chartId = `vizora-chart-${id || uniqueId.replace(/:/g, '')}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          data-chart={chartId}
          ref={ref}
          className={cn(
            'vizora-shadcn-container relative flex aspect-video w-full justify-center text-xs [&_.vizora-chart-container]:flex [&_.vizora-chart-container]:w-full [&_.vizora-chart-container]:justify-center',
            className
          )}
          style={style}
          {...props}
        >
          <ChartStyle id={chartId} config={config} />
          {children}
        </div>
      </ChartContext.Provider>
    );
  }
);

ChartContainer.displayName = 'ChartContainer';

export const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, itemConfig]) => itemConfig.theme || itemConfig.color
  );

  if (!colorConfig.length) {
    return null;
  }

  const cssString = Object.entries(config)
    .map(([key, itemConfig]) => {
      const color = itemConfig.color;
      return color ? `--color-${key}: ${color};` : null;
    })
    .filter(Boolean)
    .join('\n');

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `[data-chart="${id}"] {\n${cssString}\n}`,
      }}
    />
  );
};
