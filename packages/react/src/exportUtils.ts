import { ChartSpec } from '@vizora/core';

export function exportToSVG(element: HTMLElement | SVGElement, filename = 'chart.svg'): void {
  const svgEl = element instanceof SVGElement ? element : element.querySelector('svg');
  if (!svgEl) {
    console.warn('Vizora exportToSVG: No <svg> element found.');
    return;
  }

  const serializer = new XMLSerializer();
  let svgString = serializer.serializeToString(svgEl);

  if (!svgString.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    svgString = svgString.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

export function exportToPNG(
  element: HTMLElement | SVGElement,
  filename = 'chart.png',
  scale = 2
): Promise<void> {
  return new Promise((resolve, reject) => {
    const svgEl = element instanceof SVGElement ? element : element.querySelector('svg');
    if (!svgEl) {
      console.warn('Vizora exportToPNG: No <svg> element found.');
      resolve();
      return;
    }

    const bbox = svgEl.getBoundingClientRect();
    const width = (bbox.width || 600) * scale;
    const height = (bbox.height || 380) * scale;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to get 2D canvas context'));
        return;
      }

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas to Blob failed'));
          return;
        }
        const pngUrl = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(url);
        resolve();
      }, 'image/png');
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };

    img.src = url;
  });
}

export async function copyChartSpec(spec: ChartSpec): Promise<boolean> {
  try {
    const jsonStr = JSON.stringify(spec, null, 2);
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(jsonStr);
      return true;
    }
    return false;
  } catch (err) {
    console.error('Failed to copy ChartSpec JSON to clipboard:', err);
    return false;
  }
}
