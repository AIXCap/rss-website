import { useTranslations } from 'next-intl'
import WordFadeIn from '@/components/ui/word-fade-in'

export default function Features() {
  const t = useTranslations()

  return (
    <div className="h-[100vh] mx-auto w-full max-w-screen-xl pt-32 xl:pb-2 px-5 box-border">
      <div className="text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A6DDFF] via-[var(--rss-theme-primary)] to-[#0077FF]">
        {t('header.features')}
      </div>
      <div className="text-center mt-4">
        <WordFadeIn
          className="text-center font-heading text-3xl font-bold leading-none sm:text-4xl"
          words={t('features.description')}
          delay={0.1}
        />
      </div>
      <div className="text-center text-[var(--rss-color-text-2)] text-xl mt-2">
        {t('features.description-2')}
      </div>
    </div>
  )
}
