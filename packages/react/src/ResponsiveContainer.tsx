import React, { useState, useEffect, useRef } from 'react';
import { cn } from './utils';

export interface ResponsiveContainerProps {
  children: React.ReactNode;
  aspectRatio?: number;
  minHeight?: number;
  minWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  debounceMs?: number;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  aspectRatio,
  minHeight = 200,
  minWidth = 200,
  className,
  style,
  debounceMs = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const observer = new ResizeObserver((entries) => {
      if (!entries.length) return;
      const { width: measuredWidth, height: measuredHeight } = entries[0].contentRect;

      clearTimeout(timer);
      timer = setTimeout(() => {
        const w = Math.max(measuredWidth, minWidth);
        const h = aspectRatio
          ? Math.max(w / aspectRatio, minHeight)
          : measuredHeight > 0
          ? Math.max(measuredHeight, minHeight)
          : Math.max(w * 0.6, minHeight);

        setDimensions({ width: Math.round(w), height: Math.round(h) });
      }, debounceMs);
    });

    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [aspectRatio, minHeight, minWidth, debounceMs]);

  return (
    <div
      ref={containerRef}
      className={cn('vizora-responsive-container w-full h-full min-h-[200px] relative', className)}
      style={{ width: '100%', height: '100%', minHeight: `${minHeight}px`, ...style }}
    >
      {dimensions &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const reactEl = child as React.ReactElement<any>;
            return React.cloneElement(reactEl, {
              width: dimensions.width,
              height: dimensions.height,
              ...reactEl.props,
            });
          }
          return child;
        })}
    </div>
  );
};
