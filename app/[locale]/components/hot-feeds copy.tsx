'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FC, ReactNode, useRef } from 'react'
import * as HotFeedIcons from './hot-feed-icons'
console.log(HotFeedIcons)

export default function HotFeeds() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const words = 'Hot Feeds in Rsstabs'.split(' ')

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, // 弹簧刚度
    damping: 20, // 阻尼
    mass: 0.7 // 质量
  })
  const scale = useTransform(smoothProgress, [0, 1], [1.7, 1])

  return (
    <div ref={targetRef} className="w-full h-[300vh]">
      <div className="w-full h-[100vh] sticky top-0 py-10 overflow-hidden">
        <motion.div className="relative max-w-[4000px] w-full h-full flex items-center justify-center mx-auto">
          <motion.div
            style={{
              scale: scale,
              translateY: useTransform(scrollYProgress, [0, 1], [0, -150])
            }}
            className="absolute top-300px left-0 w-full h-full opacity-[0.03] rotate-[0] translate-x-[0%] -translate-y-[0%]"
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-16 gap-10">
              {[
                ...Object.entries(HotFeedIcons),
                ...Object.entries(HotFeedIcons),
                ...Object.entries(HotFeedIcons),
                ...Object.entries(HotFeedIcons)
              ].map(([name, Icon]) => (
                <div
                  key={name}
                  className={cn(
                    'flex flex-col items-center justify-around -rotate-[45deg]'
                  )}
                >
                  <Icon className="w-full h-full" />
                </div>
              ))}
            </div>
          </motion.div>

          <p
            className={
              'flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl'
            }
          >
            {words.map((word, i) => {
              const start = i / words.length
              const end = start + 1 / words.length
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              )
            })}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: any
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={'absolute opacity-30'}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={'text-black dark:text-white'}
      >
        {children}
      </motion.span>
    </span>
  )
}
