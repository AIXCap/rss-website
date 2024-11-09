'use client'
import { useState, useEffect } from 'react'

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

type Breakpoint = keyof typeof breakpoints

export default function useBreakpoints() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs')
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      if (typeof window === 'undefined') return

      const currentWidth = window.innerWidth
      setWidth(currentWidth)

      if (currentWidth >= breakpoints['2xl']) setCurrentBreakpoint('2xl')
      else if (currentWidth >= breakpoints.xl) setCurrentBreakpoint('xl')
      else if (currentWidth >= breakpoints.lg) setCurrentBreakpoint('lg')
      else if (currentWidth >= breakpoints.md) setCurrentBreakpoint('md')
      else if (currentWidth >= breakpoints.sm) setCurrentBreakpoint('sm')
      else setCurrentBreakpoint('xs')
    }

    // 初始设置
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    currentBreakpoint,
    width,
    isXs: currentBreakpoint === 'xs',
    isSm: currentBreakpoint === 'sm',
    isMd: currentBreakpoint === 'md',
    isLg: currentBreakpoint === 'lg',
    isXl: currentBreakpoint === 'xl',
    is2Xl: currentBreakpoint === '2xl',
    smAndUp: width >= breakpoints.sm,
    mdAndUp: width >= breakpoints.md,
    lgAndUp: width >= breakpoints.lg,
    xlAndUp: width >= breakpoints.xl,
    '2xlAndUp': width >= breakpoints['2xl']
  }
}
