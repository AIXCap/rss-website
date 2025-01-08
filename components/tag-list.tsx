import { TagCard } from '@/components/tag-card'
import { Tag } from '@/types/tag'
import { TagSearch } from '@/components/tag-search'
import { getTranslations } from 'next-intl/server'

interface TagListProps {
  tags: Tag[]
  locale: string
}

export async function TagList({ tags, locale }: TagListProps) {
  const t = await getTranslations('Tags')

  return (
    <div className="space-y-6">
      {/* 搜索框（客户端组件） */}
      <TagSearch tags={tags} />

      {/* 标签列表（服务端渲染） */}
      <nav aria-label={t('nav-label')} className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <TagCard key={tag.id} tag={tag} locale={locale} />
        ))}
      </nav>
    </div>
  )
}
