import { useTranslations } from 'next-intl'
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon
} from '@radix-ui/react-icons'
import Globe from '@/components/ui/globe'

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'

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

export default function Features() {
  const t = useTranslations()

  return (
    <div
      id="features"
      className="mx-auto w-full max-w-screen-xl pt-32 xl:pb-2 px-5 box-border"
    >
      {/* <div className="text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A6DDFF] via-[var(--rss-theme-primary)] to-[#0077FF]">
        {t('header.features')}
      </div>
      <div className="text-center mt-4">
        <div className="text-center font-heading text-3xl font-bold leading-none sm:text-4xl">
          {t('features.description')}
        </div>
      </div>
      <div className="text-center text-[var(--rss-color-text-2)] text-xl mt-4">
        {t('features.description-2')}
      </div>

      <div className="mt-14">
        <BentoGrid className="lg:grid-rows-3">
          {features.map(feature => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div> */}

      <div className="flex w-full flex-row">
        <div className="hidden flex-col md:flex">
          <div className="flex h-16 w-8 border-b-[1.5px] border-r-[1.5px] border-dashed"></div>
          <div className="flex flex-1"></div>
          <div className="flex h-16 w-8 border-r-[1.5px] border-t-[1.5px] border-dashed"></div>
        </div>
        <div className="grid w-full border-t-[1.5px] border-dashed md:-mx-[1.5px] md:my-[62.5px] md:border-l-[1.5px] grid-cols-8">
          <div className="group relative flex flex-col justify-between overflow-hidden border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-8 lg:col-span-5 md:h-[400px] h-[450px]"></div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-3 md:h-[400px] h-[450px]"></div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-4 md:h-[400px] h-[450px]"></div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-4 md:h-[400px] h-[450px]"></div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-4 lg:col-span-3 md:h-[400px] h-[450px]"></div>
          <div className="group relative flex flex-col justify-between overflow-hidden border-b-[1.5px] border-r-[1.5px] border-dashed col-span-8 md:col-span-8 lg:col-span-5 md:h-[400px] h-[450px]"></div>
        </div>
        <div className="hidden flex-col md:flex">
          <div className="flex h-16 w-8 border-b-[1.5px] border-l-[1.5px] border-dashed"></div>
          <div className="flex flex-1"></div>
          <div className="flex h-16 w-8 border-l-[1.5px] border-t-[1.5px] border-dashed"></div>
        </div>
      </div>
    </div>
  )
}
