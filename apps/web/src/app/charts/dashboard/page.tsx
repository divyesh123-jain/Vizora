'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/components/dashboard');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#f4f7f3] flex items-center justify-center font-mono text-xs text-[#60685c]">
      Loading Business & Dashboard Components...
    </div>
  );
}
