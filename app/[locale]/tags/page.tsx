import { getTagList } from '@/lib/api'
import { TagList } from '@/components/tag-list'
import { getTranslations } from 'next-intl/server'

// cloudflare edge runtime
export const runtime = 'edge'

// 生成页面元数据
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale })

  return {
    title: `${t('tags.title')} - RssTabs`,
    description: t('tags.description')
  }
}

// 标签页面组件
export default async function TagsPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // 获取标签数据
  const { data } = await getTagList()

  return (
    <main className="container mx-auto px-4 py-8">
      <TagList initialTags={data.list} locale={locale} />
    </main>
  )
}
