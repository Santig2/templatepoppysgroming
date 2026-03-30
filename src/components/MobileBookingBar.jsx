'use client';

import Link from 'next/link';
import { Calendar as CalendarIcon, Phone as PhoneIcon } from 'lucide-react';

export function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex h-16 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] bg-white">
      <Link href="/book" className="flex-1 flex items-center justify-center gap-2 bg-pp-red text-white py-4 font-dm-sans font-bold text-sm">
        <CalendarIcon className="w-4 h-4" />
        Book Now
      </Link>
      <div className="w-px bg-pp-red-dark" />
      <a href="tel:5126770703" className="flex-1 flex items-center justify-center gap-2 bg-[#A02525] text-white py-4 font-dm-sans font-bold text-sm">
        <PhoneIcon className="w-4 h-4" />
        (512) 677-0703
      </a>
    </div>
  );
}
