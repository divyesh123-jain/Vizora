'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ChartsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/components');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center font-mono text-xs text-[#60685c]">
      Redirecting to Component Library...
    </div>
  );
}
