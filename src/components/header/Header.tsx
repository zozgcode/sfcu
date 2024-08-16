'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full min-h-[70px] border-b relative flex flex-col items-center justify-center bg-white px-[15px] pb-3">
      <Image src="https://i.imgur.com/PAoZXJG.png" width={230} height={230} className="w-[200px]" alt="logo" />
    </div>
  );
}
