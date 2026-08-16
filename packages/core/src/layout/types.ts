import { ChartSpec } from '../spec/types';

export interface SceneNode {
  id: string;
  type: 'group' | 'line' | 'rect' | 'circle' | 'text' | 'path' | 'defs' | 'linearGradient' | 'stop';
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
  margin: { top: number; right: number; bottom: number; left: number };
  innerWidth: number;
  innerHeight: number;
  xField: string;
  yField: string;
}

export interface ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[];
}

export const COLOR_CONTOUR = 'var(--foreground, #1e2a22)';
export const COLOR_DATUM = 'var(--muted-foreground, #6e756a)';
export const COLOR_WAYPOINT = 'var(--chart-1, #c2872e)';
export const COLOR_FLARE = 'var(--chart-3, #d6502b)';
export const COLOR_DEPTH = 'var(--chart-2, #b9c4b4)';
export const COLOR_GRID_LINE = 'var(--border, rgba(110, 117, 106, 0.2))';
export const FONT_MONO = 'var(--font-mono, IBM Plex Mono, monospace)';
export const FONT_SERIF = 'var(--font-sans, system-ui, sans-serif)';

export function COLOR_FIELD_BRIGHT(): string {
  return 'var(--background, #f7faf5)';
}

export interface ThemePalette {
  contour: string;
  datum: string;
  waypoint: string;
  flare: string;
  depth: string;
  gridLine: string;
  series: string[];
}

export const THEME_PALETTES: Record<string, string[]> = {
  default: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
  zinc: ['#18181b', '#52525b', '#a1a1aa', '#d4d4d8', '#e4e4e7'],
  emerald: ['#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
  indigo: ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe'],
  sunset: ['#f43f5e', '#fb923c', '#facc15', '#a855f7', '#ec4899'],
  cyberpunk: ['#00f0ff', '#ff007f', '#ffe600', '#7000ff', '#00ff66'],
};

export function resolveThemeColors(
  theme?: string,
  customColor?: string
): ThemePalette {
  const isDark = theme === 'dark';
  const paletteColors = THEME_PALETTES[theme || 'default'] || THEME_PALETTES.default;
  const primaryColor = customColor || (isDark ? 'var(--chart-1, #e6a745)' : COLOR_WAYPOINT);

  return {
    contour: isDark ? 'var(--foreground, #f4f7f3)' : COLOR_CONTOUR,
    datum: isDark ? 'var(--muted-foreground, #9ba196)' : COLOR_DATUM,
    waypoint: primaryColor,
    flare: isDark ? 'var(--chart-3, #e06c53)' : COLOR_FLARE,
    depth: isDark ? 'var(--chart-2, #60685c)' : COLOR_DEPTH,
    gridLine: isDark ? 'rgba(255, 255, 255, 0.12)' : COLOR_GRID_LINE,
    series: [primaryColor, ...paletteColors],
  };
}

