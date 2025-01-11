import Link from 'next/link'
import { Article } from '@/types/article'
import { formatDate } from '@/lib/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SourceLogo } from '@/components/source-logo'

interface ArticleCardProps {
  article: Article
  locale: string
}

export function ArticleCard({ article, locale }: ArticleCardProps) {
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <div>
        <Link href={`/${locale}/post/${article.articleId}`} className="block">
          <CardHeader className="space-y-2 pt-5 pb-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-5 h-5 flex-shrink-0 bg-muted rounded-sm flex items-center justify-center text-xs overflow-hidden">
                <SourceLogo
                  logo={article.sourceLogo}
                  name={article.sourceName}
                />
              </div>
              <address className="inline not-italic">
                <span>{article.sourceName}</span>
                <span aria-hidden="true">·</span>
                <span>{article.author}</span>
              </address>
              <span aria-hidden="true">·</span>
              <time dateTime={article.publicationDate}>
                {formatDate(article.publicationDate, locale)}
              </time>
            </div>
            <h2 className="text-xl font-semibold">{article.title}</h2>
          </CardHeader>
          <CardContent className="pt-0 pb-2">
            <p className="text-base text-muted-foreground line-clamp-2">
              {article.description?.replace(/<[^>]*>/g, '')}
            </p>
          </CardContent>
        </Link>
        {article.tags.length > 0 && (
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2" role="list" aria-label="Tags">
              {article.tags.map(tag => (
                <Link
                  key={tag}
                  href={`/${locale === 'en' ? '' : locale + '/'}posts?tag=${encodeURIComponent(tag)}`}
                  className="hover:opacity-80"
                >
                  <Badge variant="secondary" role="listitem">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        )}
      </div>
    </Card>
  )
}
