'use client'

import { TagCard } from '@/components/tag-card'
import { TagSearch } from '@/components/tag-search'
import { Tag } from '@/types/tag'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface TagListProps {
  initialTags: Tag[]
  locale: string
}

export function TagList({ initialTags, locale }: TagListProps) {
  const t = useTranslations()
  const [filteredTags, setFilteredTags] = useState(initialTags)

  // 处理搜索
  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredTags(initialTags)
      return
    }

    const filtered = initialTags.filter(tag =>
      tag.tagName.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredTags(filtered)
  }

  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col gap-8">
      {/* 页面标题 */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">
          <span className="text-foreground">{t('tags.title')}</span>
        </h1>
        <p className="max-w-[600px] text-base text-muted-foreground">
          {t('tags.description')}
        </p>

        {/* 搜索框 */}
        <TagSearch onSearch={handleSearch} />
      </div>

      {/* 标签列表 */}
      <div className="flex flex-wrap gap-2">
        {filteredTags.map((tag: Tag) => (
          <TagCard key={tag.id} tag={tag} locale={locale} />
        ))}
      </div>

      {/* 无搜索结果提示 */}
      {filteredTags.length === 0 && (
        <div className="text-center text-muted-foreground">
          {t('tags.no-results')}
        </div>
      )}
    </div>
  )
}
