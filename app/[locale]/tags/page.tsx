// cloudflare edge runtime
export const runtime = 'edge'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { TagList } from '@/components/tag-list'
import { getTagList } from '@/lib/api'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('Tags')

  return {
    title: t('title'),
    description: t('description')
  } satisfies Metadata
}

export default async function TagsPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('Tags')
  const { data } = await getTagList()

  return (
    <main className="mx-auto w-full max-w-screen-xl pb-10 px-5 box-border">
      <header className="py-8">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="mt-2 text-muted-foreground">{t('description')}</p>
      </header>
      <TagList tags={data} locale={locale} />
    </main>
  )
}
