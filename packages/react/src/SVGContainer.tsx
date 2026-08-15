import React from 'react';
import { buildSceneGraph, ChartSpec } from '@vizora/core';
import { renderSceneGraphToSVGString, renderAccessibleDataTable } from '@vizora/render-svg';
import { cn } from './utils';

export interface SVGContainerProps {
  spec: ChartSpec;
  className?: string;
  style?: React.CSSProperties;
}

export const SVGContainer: React.FC<SVGContainerProps> = ({ spec, className, style }) => {
  const scene = buildSceneGraph(spec);
  const svgMarkup = renderSceneGraphToSVGString(scene);
  const tableMarkup = renderAccessibleDataTable(spec);

  return (
    <div
      className={cn('vizora-chart-container relative inline-block w-full', className)}
      style={{ position: 'relative', display: 'inline-block', ...style }}
    >
      <div
        className="vizora-svg-wrapper w-full flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
      <div
        className="vizora-accessible-wrapper sr-only"
        dangerouslySetInnerHTML={{ __html: tableMarkup }}
      />
    </div>
  );
};

