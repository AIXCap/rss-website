import { getTranslations } from 'next-intl/server'
import { Tag } from '@/types/tag'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface TagCardProps {
  tag: Tag
  locale: string
}

export async function TagCard({ tag, locale }: TagCardProps) {
  const t = await getTranslations('Tags')
  const tagLabel = t('view-tag-articles', { tagName: tag.tagName })

  return (
    <Link
      href={`/${locale}/posts?tag=${encodeURIComponent(tag.tagName)}`}
      title={tagLabel}
      aria-label={tagLabel}
    >
      <Badge variant="secondary" className="hover:bg-secondary/80">
        {tag.tagName}
      </Badge>
    </Link>
  )
}
