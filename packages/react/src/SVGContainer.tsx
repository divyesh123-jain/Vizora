import React from 'react';
import { buildSceneGraph, ChartSpec } from '@vizora/core';
import { renderSceneGraphToSVGString, renderAccessibleDataTable } from '@vizora/render-svg';

export interface SVGContainerProps {
  spec: ChartSpec;
}

export const SVGContainer: React.FC<SVGContainerProps> = ({ spec }) => {
  const scene = buildSceneGraph(spec);
  const svgMarkup = renderSceneGraphToSVGString(scene);
  const tableMarkup = renderAccessibleDataTable(spec);

  return (
    <div className="vizora-chart-container" style={{ position: 'relative', display: 'inline-block' }}>
      <div
        className="vizora-svg-wrapper"
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
      />
      <div
        className="vizora-accessible-wrapper"
        dangerouslySetInnerHTML={{ __html: tableMarkup }}
      />
    </div>
  );
};
