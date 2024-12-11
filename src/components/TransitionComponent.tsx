'use client';

import '../app/globals.css';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export default function TransitionComponent({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      className="animate-fadeIn mx-[10vw] mt-16 mb-8 flex-grow"
    >
      {children}
    </div>
  );
}
