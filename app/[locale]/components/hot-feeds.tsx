'use client'
import { useTranslations } from 'next-intl'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FC, ReactNode, useRef } from 'react'
import * as HotFeedIcons from './hot-feed-icons'
console.log(HotFeedIcons)

export default function HotFeeds() {
  const t = useTranslations()
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const words1 = t('hot-feeds.description').split(' ')
  const words2 = t('hot-feeds.description-2').split(' ')

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, // 弹簧刚度
    damping: 20, // 阻尼
    mass: 0.7 // 质量
  })
  const scale = useTransform(smoothProgress, [0, 1], [1.5, 1])

  return (
    <div
      ref={targetRef}
      className="relative w-full h-[200vh] flex justify-center items-end -mt-[20vh]"
    >
      <motion.div className="absolute max-w-[4000px] w-full h-[120vh] flex flex-col items-center justify-start mb-[20vh] mx-auto overflow-hidden">
        <div className="h-20 absolute z-10 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-[var(--rss-color-bg)]"></div>
        <div className="h-20 absolute z-10 top-0 left-0 right-0 bg-gradient-to-b from-[var(--rss-color-bg)] to-transparent"></div>
        <motion.div
          style={{
            scale: scale,
            translateY: useTransform(scrollYProgress, [0, 1], [0, -150]),
            rotateY: useTransform(scrollYProgress, [0, 1], [40, 0])
          }}
          className="absolute top-300px left-0 w-full h-full rotate-[0] translate-x-[0%] -translate-y-[0%]"
        >
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-16 gap-10">
            {[
              ...Object.entries(HotFeedIcons),
              ...Object.entries(HotFeedIcons),
              ...Object.entries(HotFeedIcons),
              ...Object.entries(HotFeedIcons)
            ].map(([name, Icon], i) => (
              <div
                key={name + i}
                className={cn(
                  'flex flex-col items-center justify-around -rotate-[45deg] opacity-[0.03] hover:opacity-[0.5] hover:scale-110 transition-all duration-300 cursor-pointer'
                )}
              >
                <Icon className="w-full h-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="max-w-screen-xl w-full h-[120vh] flex flex-col items-center justify-start mb-[20vh] mx-auto">
        <div className="sticky top-[20vh]">
          <p
            className={
              'flex flex-wrap justify-center p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl'
            }
          >
            {words1.map((word, i) => {
              const start = i / (words1.length + words2.length)
              const end = start + 1 / (words1.length + words2.length)
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              )
            })}
          </p>
          <p
            className={
              'flex flex-wrap justify-center p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl'
            }
          >
            {words2.map((word, i) => {
              const start =
                (i + words1.length) / (words1.length + words2.length)
              const end = start + 1 / (words1.length + words2.length)
              return (
                <Word
                  key={i + words1.length}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              )
            })}
          </p>
        </div>
      </motion.div>
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
