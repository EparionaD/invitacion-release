import React from 'react';
import type { SVGProps } from 'react';

export function Suit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={48}
      height={48}
      viewBox='0 0 48 48'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={4}
      >
        <path d='M37 21v16m-26 0v7h26v-7m-26 0H4V10l14-6h12l14 6v27h-7m-26 0V21M30 4l-6 14m0 0L18 4m6 14v26m6-40l-6 14m0 0L18 4'></path>
        <path d='m18 4l-4 8l4 5.5l-2 5.5l8 14m6-33l5 8l-5 5.5l2 5.5l-8 14'></path>
      </g>
    </svg>
  );
}
