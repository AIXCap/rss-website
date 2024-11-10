'use client'

import { cn } from '@/lib/utils'
import DotPattern from '@/components/ui/dot-pattern'
import { SVGProps } from 'react'

export function BookmarkBg() {
  return (
    <div className="relative flex h-[100%] w-full flex-col items-center justify-center overflow-hidden">
      <p className="z-10 mt-60 group-hover:mt-40 transition-all duration-300 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white flex gap-6">
        <SolarBookmarkLinear className="-mt-10 group-hover:-mt-0 transition-all duration-300 -rotate-45 group-hover:rotate-0" />
        <SolarBookmarkBold className="mt-10 group-hover:mt-0 group-hover:rotate-0 transition-all duration-300 rotate-45 text-[var(--rss-color-yellow)]" />
      </p>
      <DotPattern
        className={cn(
          'mt-40',
          '[mask-image:radial-gradient(180px_circle_at_center,white,transparent)]',
          'group-hover:[mask-image:radial-gradient(220px_circle_at_center,white,transparent)]',
          'group-hover:mt-20 transition-all duration-300'
        )}
      />
    </div>
  )
}

export function SolarBookmarkLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16.09v-4.992c0-4.29 0-6.433-1.318-7.766C18.364 2 16.242 2 12 2S5.636 2 4.318 3.332S3 6.81 3 11.098v4.993c0 3.096 0 4.645.734 5.321c.35.323.792.526 1.263.58c.987.113 2.14-.907 4.445-2.946c1.02-.901 1.529-1.352 2.118-1.47c.29-.06.59-.06.88 0c.59.118 1.099.569 2.118 1.47c2.305 2.039 3.458 3.059 4.445 2.945c.47-.053.913-.256 1.263-.579c.734-.676.734-2.224.734-5.321Z"></path>
        <path strokeLinecap="round" d="M15 6H9"></path>
      </g>
    </svg>
  )
}

export function SolarBookmarkBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 11.098v4.993c0 3.096 0 4.645-.734 5.321c-.35.323-.792.526-1.263.58c-.987.113-2.14-.907-4.445-2.946c-1.02-.901-1.529-1.352-2.118-1.47a2.2 2.2 0 0 0-.88 0c-.59.118-1.099.569-2.118 1.47c-2.305 2.039-3.458 3.059-4.445 2.945a2.24 2.24 0 0 1-1.263-.579C3 20.736 3 19.188 3 16.091v-4.994C3 6.81 3 4.666 4.318 3.333S7.758 2 12 2s6.364 0 7.682 1.332S21 6.81 21 11.098M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
