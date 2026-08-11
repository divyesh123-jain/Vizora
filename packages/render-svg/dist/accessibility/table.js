export function renderAccessibleDataTable(spec) {
    if (!spec.data || spec.data.length === 0)
        return '';
    const fields = Object.keys(spec.data[0]);
    const headers = fields.map((f) => `<th>${f}</th>`).join('');
    const rows = spec.data
        .map((row) => `<tr>${fields.map((f) => `<td>${String(row[f] ?? '')}</td>`).join('')}</tr>`)
        .join('');
    return `
    <table class="vizora-aria-table" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0;">
      <caption>${spec.title || 'Chart Data Fallback Table'}</caption>
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `.trim();
}
//# sourceMappingURL=table.js.map