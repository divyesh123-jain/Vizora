'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function ChartSlugRedirect() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  useEffect(() => {
    if (slug) {
      router.replace(`/components/${slug}`);
    } else {
      router.replace('/components');
    }
  }, [router, slug]);

  return (
    <div className="min-h-screen bg-[#f4f7f3] flex items-center justify-center font-mono text-xs text-[#60685c]">
      Loading Component Specs...
    </div>
  );
}
