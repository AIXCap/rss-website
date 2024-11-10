'use client'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon
} from '@radix-ui/react-icons'
import Globe from '@/components/ui/globe'
import { useRef, useState } from 'react'

import { AggregationBg } from './aggregation-bg'
import { PolyfeedBg } from './polyfeed-bg'
import { SearchBg } from './search-bg'
import { BookmarkBg } from './bookmark-bg'
import { LayoutBg } from './layout-bg'

const features = [
  {
    Icon: FileTextIcon,
    name: '信息聚合',
    description: '汇集多个RSS源,一站式阅读各类资讯。',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3'
  },
  {
    Icon: InputIcon,
    name: '多语言',
    description: '支持多种语言,无缝切换阅读体验。',
    href: '/',
    cta: 'Learn more',
    background: (
      <Globe className="absolute -right-[120px] -top-[110px] opacity-60 scale-[1]" />
    ),
    className: 'lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-4'
  },
  {
    Icon: GlobeIcon,
    name: '书签收藏',
    description: '一键保存精彩内容,方便随时回看。',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5'
  },
  {
    Icon: CalendarIcon,
    name: '自定义布局',
    description: '灵活调整页面布局,打造专属阅读界面。',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4'
  },
  {
    Icon: BellIcon,
    name: '搜索引擎',
    description: '添加常用搜索引擎,快速查找信息。',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-start-2 lg:col-end-6 lg:row-start-4 lg:row-end-5'
  }
]

interface GlobeRef {
  globe: any
  toggle: (show: boolean) => void
}

export default function Features() {
  const t = useTranslations()

  const globeRef = useRef<GlobeRef>(null)
  const handleGlobeMouseEnter = () => {
    if (globeRef.current) {
      globeRef.current.toggle(true)
    }
  }
  const handleGlobeMouseLeave = () => {
    if (globeRef.current) {
      globeRef.current.toggle(false)
    }
  }

  const [isPolyfeedHover, setIsPolyfeedHover] = useState(false)
  const handlePolyfeedMouseEnter = () => {
    setIsPolyfeedHover(true)
  }
  const handlePolyfeedMouseLeave = () => {
    setIsPolyfeedHover(false)
  }

  return (
    <div
      id="features"
      className="mx-auto w-full max-w-screen-xl pt-32 xl:pb-2 px-5 box-border"
    >
      {/* <div className="text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A6DDFF] via-[var(--rss-theme-primary)] to-[#0077FF]">
        {t('header.features')}
      </div> */}
      <div className="text-center mt-24">
        <div className="text-center font-heading text-3xl font-bold leading-none sm:text-4xl">
          {t('features.description')}
        </div>
      </div>
      <div className="text-center text-[var(--rss-color-text-2)] text-xl mt-4">
        {t('features.description-2')}
      </div>

      {/* <div className="mt-14">
        <BentoGrid className="lg:grid-rows-3">
          {features.map(feature => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div> */}

      <div className="flex w-full flex-row mt-20">
        <div className="hidden flex-col md:flex">
          <div className="flex h-16 w-8 border-b-[1.5px] border-r-[1.5px] border-dashed border-[var(--rss-color-border)]"></div>
          <div className="flex flex-1"></div>
          <div className="flex h-16 w-8 border-r-[1.5px] border-t-[1.5px] border-dashed border-[var(--rss-color-border)]"></div>
        </div>
        <div className="grid w-full border-t-[1.5px] border-dashed md:-mx-[1.5px] md:my-[62.5px] md:border-l-[1.5px] grid-cols-8 border-[var(--rss-color-border)]">
          <div className="group relative flex flex-col justify-between overflow-hidden border-l-[1.5px] sm:border-l-0 border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-8 lg:col-span-5 md:h-[400px] h-[450px] border-[var(--rss-color-border)] cursor-pointer">
            <div className="pointer-events-none z-10 flex h-full flex-col gap-1 p-4 text-foreground md:h-full md:p-8 cursor-pointer group-hover:bg-[rgba(var(--rss-color-gray-7-val),0.2)] transition-all duration-300 group-hover:pt-10">
              <h2 className="text-2xl font-medium">
                {t('features.aggregation')}
              </h2>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <p className="text-sm text-muted-foreground w-[50%]">
                  {t('features.aggregation-description')}
                </p>
                <div className="pointer-events-none absolute bottom-0 left-0 flex justify-start w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                    className="pointer-events-auto"
                  >
                    <a>
                      {t('features.learn-more')}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
              </div>
            </div>
            <div className="absolute -top-[0%] -right-[0%] w-full h-full scale-[1] blur-[1px] group-hover:blur-none transition-all duration-300">
              <AggregationBg
                className="[animation-play-state:paused] group-hover:[animation-play-state:running]"
                duration={20}
              />
            </div>
          </div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-l-[1.5px] sm:border-l-0 border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-3 md:h-[400px] h-[450px] border-[var(--rss-color-border)] cursor-pointer">
            <div className="pointer-events-none z-10 flex h-full flex-col gap-1 p-4 text-foreground md:h-full md:p-8 cursor-pointer group-hover:bg-[rgba(var(--rss-color-gray-7-val),0.2)] transition-all duration-300 group-hover:pt-10">
              <h2 className="text-2xl font-medium">{t('features.bookmark')}</h2>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  {t('features.bookmark-description')}
                </p>
                <div className="pointer-events-none absolute bottom-0 right-0 flex justify-end w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                    className="pointer-events-auto"
                  >
                    <a>
                      {t('features.learn-more')}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full blur-[1px] group-hover:blur-none transition-all duration-300">
              <BookmarkBg />
            </div>
          </div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-l-[1.5px] sm:border-l-0 border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-4 md:h-[400px] h-[450px] border-[var(--rss-color-border)] cursor-pointer">
            <div className="pointer-events-none z-10 flex h-full flex-col gap-1 p-4 text-foreground md:h-full md:p-8 cursor-pointer group-hover:bg-[rgba(var(--rss-color-gray-7-val),0.2)] transition-all duration-300 group-hover:pt-10">
              <h2 className="text-2xl font-medium">{t('features.search')}</h2>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <p className="text-sm text-muted-foreground w-[90%]">
                  {t('features.search-description')}
                </p>
                <div className="pointer-events-none absolute bottom-0 left-0 flex justify-start w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                    className="pointer-events-auto"
                  >
                    <a>
                      {t('features.learn-more')}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
              </div>
            </div>
            <div className="absolute left-0 top-0 w-full h-full blur-[1px] group-hover:blur-none transition-all duration-300">
              <SearchBg className="[animation-play-state:paused] group-hover:[animation-play-state:running]" />
            </div>
          </div>
          <div
            onMouseEnter={handleGlobeMouseEnter}
            onMouseLeave={handleGlobeMouseLeave}
            className="group relative flex flex-col justify-between overflow-hidden border-l-[1.5px] sm:border-l-0 border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-4 md:h-[400px] h-[450px] border-[var(--rss-color-border)] cursor-pointer"
          >
            <div className="pointer-events-none z-10 flex h-full flex-col gap-1 p-4 text-foreground md:h-full md:p-8 cursor-pointer group-hover:bg-[rgba(var(--rss-color-gray-7-val),0.2)] transition-all duration-300 group-hover:pt-10">
              <h2 className="text-2xl font-medium">{t('features.language')}</h2>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  {t('features.language-description')}
                </p>
                <div className="pointer-events-none absolute bottom-0 right-0 flex justify-end w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                    className="pointer-events-auto"
                  >
                    <a>
                      {t('features.learn-more')}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
              </div>
            </div>
            <Globe
              ref={globeRef}
              className="absolute -z-1 top-28 blur-[1px] group-hover:top-24 group-hover:blur-none origin-top opacity-0.1 transition-all duration-300"
            />
          </div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-l-[1.5px] sm:border-l-0 border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-3 md:h-[400px] h-[450px] border-[var(--rss-color-border)] cursor-pointer">
            <div className="pointer-events-none z-10 flex h-full flex-col gap-1 p-4 text-foreground md:h-full md:p-8 cursor-pointer group-hover:bg-[rgba(var(--rss-color-gray-7-val),0.2)] transition-all duration-300 group-hover:pt-10">
              <h2 className="text-2xl font-medium">{t('features.layout')}</h2>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <p className="text-sm text-muted-foreground">
                  {t('features.layout-description')}
                </p>
                <div className="pointer-events-none absolute bottom-0 right-0 z-50 flex justify-end w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                    className="pointer-events-auto"
                  >
                    <a>
                      {t('features.learn-more')}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full blur-[1px] group-hover:blur-none transition-all duration-300">
              <LayoutBg />
            </div>
          </div>
          <div
            onMouseEnter={handlePolyfeedMouseEnter}
            onMouseLeave={handlePolyfeedMouseLeave}
            className="group relative flex flex-col justify-between overflow-hidden border-l-[1.5px] sm:border-l-0 border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-8 lg:col-span-5 md:h-[400px] h-[450px] border-[var(--rss-color-border)] cursor-pointer"
          >
            <div className="pointer-events-none z-10 flex h-full flex-col gap-1 p-4 text-foreground md:h-full md:p-8 cursor-pointer group-hover:bg-[rgba(var(--rss-color-gray-7-val),0.2)] transition-all duration-300 group-hover:pt-10">
              <h2 className="text-2xl font-medium text-right">
                {t('features.polyfeed')}
              </h2>
              <div className="flex flex-1 flex-col items-end justify-between gap-2">
                <p className="text-sm text-muted-foreground text-right w-[70%]">
                  {t('features.polyfeed-description')}
                </p>
                <div className="pointer-events-none absolute bottom-0 right-0 flex justify-end w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                    className="pointer-events-auto"
                  >
                    <a>
                      {t('features.learn-more')}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
              </div>
            </div>
            <div className="w-full h-full absolute top-[10%] -left-[8%] scale-[1] group-hover:-left-[5%] group-hover:-left-[4%] group-hover:scale-[1] transition-all duration-300 blur-[1px] group-hover:blur-none">
              <PolyfeedBg duration={isPolyfeedHover ? 2 : 0} />
            </div>
          </div>
        </div>
        <div className="hidden flex-col md:flex">
          <div className="flex h-16 w-8 border-b-[1.5px] border-l-[1.5px] border-dashed border-[var(--rss-color-border)]"></div>
          <div className="flex flex-1"></div>
          <div className="flex h-16 w-8 border-l-[1.5px] border-t-[1.5px] border-dashed border-[var(--rss-color-border)]"></div>
        </div>
      </div>
    </div>
  )
}
