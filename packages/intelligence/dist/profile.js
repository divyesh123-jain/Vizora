export function profileField(data, field) {
    const values = data.map((d) => d[field]).filter((v) => v !== undefined && v !== null);
    const distinct = new Set(values);
    if (values.length === 0) {
        return { field, type: 'categorical', distinctCount: 0 };
    }
    const sample = values[0];
    if (sample instanceof Date) {
        return { field, type: 'temporal', distinctCount: distinct.size };
    }
    if (typeof sample === 'number') {
        return { field, type: 'quantitative', distinctCount: distinct.size };
    }
    if (typeof sample === 'string') {
        const isDateStr = !isNaN(Date.parse(sample)) && isNaN(Number(sample));
        if (isDateStr) {
            return { field, type: 'temporal', distinctCount: distinct.size };
        }
    }
    return { field, type: 'categorical', distinctCount: distinct.size };
}
//# sourceMappingURL=profile.js.map