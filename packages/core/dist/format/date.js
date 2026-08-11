export function formatDate(value) {
    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime()))
        return String(value);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}
//# sourceMappingURL=date.js.map