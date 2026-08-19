'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TradingRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/components/trading');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0f1611] flex items-center justify-center font-mono text-xs text-[#9ba196]">
      Loading Trading & Financial Components...
    </div>
  );
}
