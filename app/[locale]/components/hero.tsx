'use client'
import { useTranslations } from 'next-intl'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import WordFadeIn from '@/components/ui/word-fade-in'
import Safari from '@/components/ui/safari'
import Iphone15Pro from '@/components/ui/iphone-15-pro'
import { Button } from '@/components/ui/button'
import ShimmerButton from '@/components/ui/shimmer-button'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations()
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const [browser, setBrowser] = useState<{
    isChrome: boolean
    isFirefox: boolean
    isEdge: boolean
  }>({
    isChrome: false,
    isFirefox: false,
    isEdge: false
  })
  useEffect(() => {
    const detectBrowser = () => {
      if (typeof window === 'undefined') return

      const ua = window.navigator.userAgent.toLowerCase()

      return {
        isChrome: /chrome/.test(ua) && !/edg|edge/.test(ua) && !/opr/.test(ua),
        isFirefox: /firefox/.test(ua),
        isEdge: /edg|edge/.test(ua),
        isSafari: /safari/.test(ua) && !/chrome/.test(ua)
      }
    }

    setBrowser(detectBrowser() || browser)
  }, [])

  return (
    <div ref={targetRef} className="relative w-full h-[calc(300vh)]">
      <div className="sticky top-[64px] h-[calc(110vh-64px)] md:h-[calc(100vh-64px)] mx-auto overflow-hidden">
        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, -150])
          }}
          className="mx-auto w-full max-w-screen-xl pt-0 md:pt-24 xl:pb-2 px-5 box-border"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="pt-10 mt-10"
          >
            <AnimatedGradientText>
              🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                {t('public-beta')}
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </motion.div>
          <div className="pt-5 md:pt-10 max-w-5xl mx-auto">
            <WordFadeIn
              className="text-center font-heading text-3xl font-bold leading-none sm:text-5xl"
              words={t('description')}
              delay={0.1}
            />
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="pt-4 md:pt-6 max-w-3xl mx-auto"
          >
            <div className="text-center font-medium text-[var(--rss-color-text-2)] text-xl">
              {t('description-2')}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex justify-center items-center gap-4 mt-8">
              {/* <Button className="rounded-full" size="lg">
                Start Now
              </Button> */}
              <ShimmerButton
                className="shadow-xl"
                background="var(--rss-color-bg)"
              >
                <span className="text-center text-sm text-[var(--rss-color-text)]">
                  {t('get-free')}
                </span>
              </ShimmerButton>
              {(browser.isChrome || browser.isFirefox || browser.isEdge) && (
                <Button className="rounded-full" size="lg">
                  <Image
                    className="mr-1"
                    width={18}
                    height={18}
                    src={
                      browser.isChrome
                        ? '/images/chrome.png'
                        : browser.isFirefox
                          ? '/images/firefox.png'
                          : '/images/edge.png'
                    }
                    alt=""
                  />
                  {t('add-to-chrome', {
                    browser: browser.isChrome
                      ? 'Google Chrome'
                      : browser.isFirefox
                        ? 'Mozilla Firefox'
                        : 'Microsoft Edge'
                  })}
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
        <AnimatedBlock
          className="hidden md:grid"
          scrollYProgress={scrollYProgress}
        />
        <AnimatedBlockMobile
          className="flex md:hidden"
          scrollYProgress={scrollYProgress}
        />
      </div>
      <div className="h-40 absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-[var(--rss-color-bg)]"></div>
    </div>
  )
}

const AnimatedBlock = ({
  scrollYProgress,
  className
}: {
  scrollYProgress: any
  className?: string
}) => {
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, // 弹簧刚度
    damping: 20, // 阻尼
    mass: 0.7 // 质量
  })

  const translateY = useTransform(smoothProgress, [0, 1], [0, 200])
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.7])
  const translateX = useTransform(scrollYProgress, [0, 1], [0, 10])
  return (
    <motion.div
      style={{ translateY: translateY, scale: scale }}
      className={cn(
        'w-full mx-auto max-w-screen-2xl relative grid grid-cols-[1fr_3.25fr] pb-80 gap-8 mt-28 px-5',
        className
      )}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4 }}
        style={{ translateX: translateX }}
        className="w-full"
      >
        <Iphone15Pro
          clipPathId="roundedCorners_pc"
          src="/images/mobile.png"
          className="size-full"
        />
      </motion.div>

      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4 }}
        className="w-100%"
      >
        <Safari
          url="https://app.rsstabs.com"
          src="/images/pc.png"
          className="size-full"
        />
      </motion.div>
    </motion.div>
  )
}

const AnimatedBlockMobile = ({
  scrollYProgress,
  className
}: {
  scrollYProgress: any
  className?: string
}) => {
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, // 弹簧刚度
    damping: 20, // 阻尼
    mass: 0.7 // 质量
  })

  return (
    <motion.div
      style={{
        translateY: useTransform(smoothProgress, [0, 1], ['0vh', '-20vh'])
      }}
      className={cn('w-full absolute bottom-[-50%] px-5', className)}
    >
      <Iphone15Pro
        clipPathId="roundedCorners_mobile"
        src="/images/mobile.png"
        className="size-full"
      />
    </motion.div>
  )
}
