'use client'

import { useTranslations } from 'next-intl'
import { Tag } from '@/types/tag'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

interface TagSearchProps {
  tags: Tag[]
}

export function TagSearch({ tags }: TagSearchProps) {
  const t = useTranslations('Tags')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <Input
        type="search"
        placeholder={t('search-placeholder')}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="max-w-sm"
      />
    </div>
  )
}
