'use client';

import dynamic from 'next/dynamic';

const Starfield = dynamic(() => import('./index'), {
  ssr: false,
  loading: () => null,
});

export default function RootStarfield() {
  return <Starfield />;
}
