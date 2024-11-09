import { useTranslations } from 'next-intl'
import StartButtonGroup from './start-button-group'

export default function GetFree() {
  const t = useTranslations()

  return (
    <div className="relative max-w-screen-xl mx-auto py-40 px-5">
      <div className="text-center">
        <div className="text-center font-heading text-3xl font-bold leading-none sm:text-4xl">
          {t('get-free-description')}
        </div>
      </div>
      <div className="text-center text-[var(--rss-color-text-2)] text-xl mb-10 mt-4">
        {t('get-free-description-2')}
      </div>
      <div>
        <StartButtonGroup />
      </div>
    </div>
  )
}
