'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CompositionRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/components/composition');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f4f7f3] flex items-center justify-center font-mono text-xs text-[#60685c]">
      Loading Composition & Flow Components...
    </div>
  );
}
