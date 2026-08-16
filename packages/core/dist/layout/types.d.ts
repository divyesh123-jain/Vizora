import { ChartSpec } from '../spec/types';
export interface SceneNode {
    id: string;
    type: 'group' | 'line' | 'rect' | 'circle' | 'text' | 'path';
    attributes: Record<string, string | number>;
    children?: SceneNode[];
}
export interface SceneGraph {
    width: number;
    height: number;
    viewBox: string;
    children: SceneNode[];
}
export interface LayoutContext {
    spec: ChartSpec;
    width: number;
    height: number;
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    innerWidth: number;
    innerHeight: number;
    xField: string;
    yField: string;
}
export interface ChartLayoutStrategy {
    render(ctx: LayoutContext): SceneNode[];
}
export declare const COLOR_CONTOUR = "var(--foreground, #1e2a22)";
export declare const COLOR_DATUM = "var(--muted-foreground, #6e756a)";
export declare const COLOR_WAYPOINT = "var(--chart-1, #c2872e)";
export declare const COLOR_FLARE = "var(--chart-3, #d6502b)";
export declare const COLOR_DEPTH = "var(--chart-2, #b9c4b4)";
export declare const COLOR_GRID_LINE = "var(--border, rgba(110, 117, 106, 0.2))";
export declare const FONT_MONO = "var(--font-mono, IBM Plex Mono, monospace)";
export declare const FONT_SERIF = "var(--font-sans, system-ui, sans-serif)";
export declare function COLOR_FIELD_BRIGHT(): string;
//# sourceMappingURL=types.d.ts.map