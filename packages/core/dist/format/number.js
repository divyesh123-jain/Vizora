export function formatNumber(value, options) {
    const decimals = options?.decimals ?? 2;
    if (options?.type === 'currency') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: options.currency || 'USD',
            maximumFractionDigits: decimals,
        }).format(value);
    }
    if (options?.type === 'percent') {
        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            maximumFractionDigits: decimals,
        }).format(value);
    }
    if (Math.abs(value) >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + 'M';
    }
    if (Math.abs(value) >= 1_000) {
        return (value / 1_000).toFixed(1) + 'k';
    }
    return value.toLocaleString('en-US', { maximumFractionDigits: decimals });
}
//# sourceMappingURL=number.js.map