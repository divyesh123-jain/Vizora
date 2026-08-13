import { useMemo } from 'react';
import { recommendChartSpec } from '@vizora/intelligence';
export function useChartSpec({ data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height, }) {
    return useMemo(() => {
        if (!type && !x && !y) {
            const recommended = recommendChartSpec(data);
            if (title)
                recommended.title = title;
            if (orientation)
                recommended.encoding.orientation = orientation;
            if (bins)
                recommended.encoding.bins = bins;
            if (showGrid !== undefined || theme || width || height) {
                recommended.config = {
                    ...recommended.config,
                    ...(showGrid !== undefined ? { showGrid } : {}),
                    ...(theme ? { theme } : {}),
                    ...(width ? { width } : {}),
                    ...(height ? { height } : {}),
                };
            }
            return recommended;
        }
        return {
            version: '0.1.0',
            type: type || 'bar',
            title,
            data,
            encoding: {
                x: x ? { field: x } : undefined,
                y: y ? { field: y } : undefined,
                color: color ? { field: color } : undefined,
                orientation,
                bins,
            },
            config: {
                showGrid: showGrid ?? true,
                theme: theme || 'light',
                ...(width ? { width } : {}),
                ...(height ? { height } : {}),
            },
        };
    }, [data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height]);
}
//# sourceMappingURL=useChartSpec.js.map