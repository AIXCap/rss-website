'use client'

import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

interface TagSearchProps {
  onSearch: (query: string) => void
}

export function TagSearch({ onSearch }: TagSearchProps) {
  const t = useTranslations()
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="w-full max-w-xl">
      <Input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder={t('tags.search-placeholder')}
        className="w-full"
      />
    </div>
  )
}
