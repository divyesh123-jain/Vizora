import { useMemo } from 'react';
import { recommendChartSpec } from '@vizora/intelligence';
export function useChartSpec({ data, type, x, y, color, title }) {
    return useMemo(() => {
        if (!type && !x && !y) {
            const recommended = recommendChartSpec(data);
            if (title)
                recommended.title = title;
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
            },
        };
    }, [data, type, x, y, color, title]);
}
//# sourceMappingURL=useChartSpec.js.map