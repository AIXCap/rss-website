'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Input } from '@/components/ui/input'
import { Tag } from '@/types/tag'
import { useTranslations } from 'next-intl'

interface TagSearchProps {
  tags: Tag[]
  searchParams?: {
    q?: string
  }
  locale: string
}

export function TagSearch({ tags, searchParams, locale }: TagSearchProps) {
  const t = useTranslations('Tags')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  // 过滤标签
  const query = searchParams?.q?.toLowerCase() || ''
  const filteredTags = query
    ? tags.filter(tag => tag.tagName.toLowerCase().includes(query))
    : tags

  // 处理搜索
  const handleSearch = (term: string) => {
    startTransition(() => {
      const params = new URLSearchParams()
      if (term) params.set('q', term)
      router.replace(
        `/${locale === 'en' ? '' : locale + '/'}tags${params.toString() ? `?${params.toString()}` : ''}`
      )
    })
  }

  return (
    <div className="space-y-6">
      <Input
        type="search"
        name="q"
        placeholder={t('search-placeholder')}
        defaultValue={searchParams?.q}
        className="max-w-sm"
        onChange={e => handleSearch(e.target.value)}
      />
      {query && filteredTags.length === 0 && (
        <p className="text-muted-foreground">{t('no-results')}</p>
      )}
    </div>
  )
}
