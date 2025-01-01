import { Card } from '@/components/ui/card'
import { Tag } from '@/types/tag'

interface TagCardProps {
  tag: Tag
  locale: string
}

export function TagCard({ tag, locale }: TagCardProps) {
  return (
    <Card className="group inline-block px-3 py-1.5 transition-colors hover:bg-muted">
      <span className="text-sm text-foreground group-hover:text-primary">
        {tag.tagName}
      </span>
    </Card>
  )
}
