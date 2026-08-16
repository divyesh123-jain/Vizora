const ISO_DATE_REGEX = /^\d{4}[-/.]\d{2}[-/.]\d{2}/;
const ISO_DATETIME_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function inferSingleValueType(value) {
    if (value instanceof Date) {
        return 'temporal';
    }
    if (typeof value === 'number' && !isNaN(value)) {
        return 'quantitative';
    }
    if (typeof value === 'string') {
        const trimmed = value.trim();
        if (!trimmed)
            return 'categorical';
        if (ISO_DATE_REGEX.test(trimmed) || ISO_DATETIME_REGEX.test(trimmed)) {
            const parsed = Date.parse(trimmed);
            if (!isNaN(parsed)) {
                return 'temporal';
            }
        }
    }
    return 'categorical';
}
export function profileField(data, field) {
    const values = data.map((d) => d[field]).filter((v) => v !== undefined && v !== null);
    const distinct = new Set(values);
    if (values.length === 0) {
        return { field, type: 'categorical', distinctCount: 0 };
    }
    const sampleBatch = values.slice(0, 100);
    const counts = {
        quantitative: 0,
        temporal: 0,
        categorical: 0,
    };
    sampleBatch.forEach((val) => {
        const inferred = inferSingleValueType(val);
        counts[inferred]++;
    });
    let chosenType = 'categorical';
    if (counts.quantitative >= counts.temporal && counts.quantitative >= counts.categorical && counts.quantitative > 0) {
        chosenType = 'quantitative';
    }
    else if (counts.temporal >= counts.categorical && counts.temporal > 0) {
        chosenType = 'temporal';
    }
    return { field, type: chosenType, distinctCount: distinct.size };
}
//# sourceMappingURL=profile.js.map