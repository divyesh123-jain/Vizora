import React, { useState, useRef } from 'react';
import { buildSceneGraph, ChartSpec } from '@vizora/core';
import { renderSceneGraphToSVGString, renderAccessibleDataTable } from '@vizora/render-svg';
import { ChartTooltip } from './ChartTooltip';
import { ChartEmptyState } from './ChartEmptyState';
import { ChartErrorFallback } from './ChartErrorFallback';
import { cn } from './utils';

export interface SVGContainerProps {
  spec: ChartSpec;
  className?: string;
  style?: React.CSSProperties;
  enableHover?: boolean;
}

interface HoverState {
  visible: boolean;
  mouseX: number;
  mouseY: number;
  itemX: number;
  itemY: number;
  xVal: string;
  yVal: string;
  chartType: string;
  orientation?: 'vertical' | 'horizontal';
  barBBox?: { x: number; y: number; width: number; height: number };
}

export const SVGContainer: React.FC<SVGContainerProps> = ({
  spec,
  className,
  style,
  enableHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<HoverState | null>(null);

  if (!spec.data || spec.data.length === 0) {
    return <ChartEmptyState className={className} />;
  }

  let svgMarkup = '';
  let tableMarkup = '';

  try {
    const scene = buildSceneGraph(spec);
    svgMarkup = renderSceneGraphToSVGString(scene);
    tableMarkup = renderAccessibleDataTable(spec);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Invalid ChartSpec encoding configuration.';
    return <ChartErrorFallback message={message} className={className} />;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableHover || !containerRef.current) return;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const items = Array.from(
      container.querySelectorAll<SVGElement>('[data-vizora-item="true"]')
    );

    if (!items.length) {
      setHoverState(null);
      return;
    }

    const directTarget = (e.target as HTMLElement).closest('[data-vizora-item="true"]') as SVGElement | null;
    let selectedItem: SVGElement | null = directTarget;

    if (!selectedItem) {
      let minDistanceX = Infinity;
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2 - containerRect.left;
        const distX = Math.abs(mouseX - itemCenterX);
        if (distX < 50 && distX < minDistanceX) {
          minDistanceX = distX;
          selectedItem = item;
        }
      });
    }

    if (selectedItem) {
      const itemEl = selectedItem as SVGElement;
      const xVal = itemEl.getAttribute('data-x-val') || '';
      const yVal = itemEl.getAttribute('data-y-val') || '';
      const itemRect = itemEl.getBoundingClientRect();

      const isHorizontal = spec.encoding.orientation === 'horizontal';
      const isBarChart = spec.type === 'bar' || spec.type === 'histogram';

      let itemX: number;
      let itemY: number;

      if (isBarChart) {
        if (isHorizontal) {
          itemX = itemRect.left + itemRect.width - containerRect.left;
          itemY = itemRect.top + itemRect.height / 2 - containerRect.top;
        } else {
          itemX = itemRect.left + itemRect.width / 2 - containerRect.left;
          itemY = itemRect.top - containerRect.top;
        }
      } else {
        itemX = itemRect.left + itemRect.width / 2 - containerRect.left;
        itemY = itemRect.top + itemRect.height / 2 - containerRect.top;
      }

      setHoverState({
        visible: true,
        mouseX,
        mouseY,
        itemX,
        itemY,
        xVal,
        yVal,
        chartType: spec.type,
        orientation: spec.encoding.orientation,
        barBBox: {
          x: itemRect.left - containerRect.left,
          y: itemRect.top - containerRect.top,
          width: itemRect.width,
          height: itemRect.height,
        },
      });
    } else {
      setHoverState(null);
    }
  };

  const handleMouseLeave = () => {
    setHoverState(null);
  };

  const xLabel = spec.encoding.x?.label || spec.encoding.x?.field || 'X';
  const yLabel = spec.encoding.y?.label || spec.encoding.y?.field || 'Y';

  const renderTooltip = (state: HoverState) => {
    if (!containerRef.current) return null;
    const cWidth = containerRef.current.clientWidth;

    const isBar = state.chartType === 'bar' || state.chartType === 'histogram';
    const isHorizontalBar = isBar && state.orientation === 'horizontal';

    let leftPos: number;
    let topPos: number;
    let transformX = '-50%';
    let transformY = '-100%';

    if (isBar) {
      if (isHorizontalBar) {
        leftPos = state.itemX + 8;
        topPos = state.itemY;
        transformX = '0%';
        transformY = '-50%';
        if (leftPos > cWidth - 140) {
          leftPos = state.itemX - 8;
          transformX = '-100%';
        }
      } else {
        leftPos = state.itemX;
        topPos = state.itemY - 8;
        transformX = '-50%';
        transformY = '-100%';

        if (leftPos > cWidth - 140) {
          transformX = '-100%';
        } else if (leftPos < 140) {
          transformX = '0%';
        }

        if (topPos < 60) {
          topPos = state.itemY + 12;
          transformY = '0%';
        }
      }
    } else {
      leftPos = state.mouseX;
      topPos = state.mouseY - 14;

      if (state.mouseX > cWidth - 140) {
        transformX = '-100%';
        leftPos = state.mouseX - 12;
      } else if (state.mouseX < 140) {
        transformX = '0%';
        leftPos = state.mouseX + 12;
      }

      if (state.mouseY < 90) {
        topPos = state.mouseY + 16;
        transformY = '0%';
      }
    }

    return (
      <div
        className="vizora-tooltip-wrapper z-50 pointer-events-none transition-all duration-75 ease-out"
        style={{
          position: 'absolute',
          left: `${leftPos}px`,
          top: `${topPos}px`,
          transform: `translate(${transformX}, ${transformY})`,
        }}
      >
        <ChartTooltip
          title={state.xVal ? `${xLabel}: ${state.xVal}` : undefined}
          items={[
            {
              label: yLabel,
              value: state.yVal,
              color: 'var(--chart-1, #6366f1)',
            },
          ]}
        />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('vizora-chart-container relative w-full h-full group select-none overflow-hidden', className)}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <div
        className="vizora-svg-wrapper w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg]:display-block [&_[data-vizora-item]]:transition-all [&_[data-vizora-item]]:duration-150 [&_[data-vizora-item]:hover]:opacity-100 [&_[data-vizora-item]:hover]:cursor-pointer"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />

      {hoverState && hoverState.visible && (
        <>
          {/* Vertical Crosshair Line for Cartesian charts only */}
          {hoverState.chartType !== 'donut' && hoverState.chartType !== 'pie' && hoverState.chartType !== 'funnel' && (
            <div
              className="vizora-crosshair-line absolute pointer-events-none border-l border-dashed border-foreground/30 z-10 transition-all duration-75"
              style={{
                left: `${hoverState.itemX}px`,
                top: '30px',
                bottom: '40px',
              }}
            />
          )}

          {hoverState.chartType === 'bar' || hoverState.chartType === 'histogram' ? (
            hoverState.barBBox && (
              <div
                className="vizora-bar-highlight absolute pointer-events-none border-2 border-indigo-500 bg-indigo-500/10 rounded-xs z-20 transition-all duration-75"
                style={{
                  left: `${hoverState.barBBox.x}px`,
                  top: `${hoverState.barBBox.y}px`,
                  width: `${hoverState.barBBox.width}px`,
                  height: `${hoverState.barBBox.height}px`,
                }}
              />
            )
          ) : (
            <div
              className="vizora-active-indicator absolute pointer-events-none w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900 shadow-md z-20 transition-all duration-75 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${hoverState.itemX}px`,
                top: `${hoverState.itemY}px`,
              }}
            />
          )}

          {renderTooltip(hoverState)}
        </>
      )}

      <div
        className="vizora-accessible-wrapper sr-only"
        dangerouslySetInnerHTML={{ __html: tableMarkup }}
      />
    </div>
  );
};
