// cloudflare edge runtime
export const runtime = 'edge'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { getArticle } from '@/lib/api'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { SourceLogo } from '@/components/source-logo'
import { parseHTMLToFirstImage, parseHTMLToText } from '@/lib/html-parser'
import Link from 'next/link'

interface PostPageProps {
  params: {
    id: string
    locale: string
  }
}

// 生成页面元数据
export async function generateMetadata({
  params: { id, locale }
}: PostPageProps): Promise<Metadata> {
  try {
    const { data: article } = await getArticle(id, locale)
    const imageUrl = parseHTMLToFirstImage(article.description)
    const desc = parseHTMLToText(article.description)

    let images: any[] = []
    if (imageUrl) {
      images = [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    }

    // 构建规范的 URL
    const defaultUrl = `https://rsstabs.com/post/${id}`
    const canonicalUrl =
      locale === 'en' ? defaultUrl : `https://rsstabs.com/${locale}/post/${id}`

    // 构建结构化数据
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: desc,
      image: imageUrl ? [imageUrl] : [],
      datePublished: article.publicationDate,
      dateModified: article.lastUpdated,
      author: {
        '@type': 'Person',
        name: article.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'RssTabs'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      keywords: article.tags.join(', ')
    }

    return {
      title: `${article.title} - RssTabs`,
      description: desc || article.title,
      keywords: article.tags.join(', '),
      authors: [{ name: article.author }],
      publisher: 'RssTabs',
      robots: {
        index: true,
        follow: true,
        nocache: false,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
          noimageindex: false
        }
      },
      openGraph: {
        title: article.title,
        description: desc || article.title,
        type: 'article',
        publishedTime: article.publicationDate,
        modifiedTime: article.lastUpdated,
        authors: [article.author],
        tags: article.tags,
        siteName: 'RssTabs',
        locale: locale,
        url: canonicalUrl,
        images: images || [],
        countryName: locale.toUpperCase(),
        section: article.tags[0] || 'Article'
      },
      twitter: {
        card: 'summary_large_image',
        title: `${article.title} - RssTabs`,
        description: desc || article.title,
        images: imageUrl ? [imageUrl] : [],
        creator: '@RssTabs',
        site: '@RssTabs'
      },
      alternates: {
        canonical: defaultUrl,
        languages: {
          en: `https://rsstabs.com/post/${id}`,
          zh: `https://rsstabs.com/zh/post/${id}`,
          ja: `https://rsstabs.com/ja/post/${id}`,
          ru: `https://rsstabs.com/ru/post/${id}`
        }
      },
      other: {
        'article:published_time': article.publicationDate,
        'article:modified_time': article.lastUpdated,
        'article:author': article.author,
        'article:section': article.tags[0] || 'Article',
        'article:tag': article.tags,
        'dc.title': article.title,
        'dc.description': desc || article.title,
        'dc.publisher': 'RssTabs',
        'dc.identifier': id,
        'dc.language': locale,
        'dc.source': article.link,
        'dc.subject': article.tags.join(', '),
        'dc.creator': article.author,
        'dc.date': article.publicationDate,
        // 结构化数据
        structuredData: JSON.stringify(structuredData)
      }
    }
  } catch (error) {
    return {
      title: 'Article Not Found - RssTabs',
      description: 'The article you are looking for does not exist.',
      robots: {
        index: false,
        follow: false
      }
    }
  }
}

// 文摘详情页面组件
export default async function PostPage({
  params: { id, locale }
}: PostPageProps) {
  const t = await getTranslations('Post')

  try {
    const { data: article } = await getArticle(id, locale)
    const desc = parseHTMLToText(article.description)

    return (
      <main className="mx-auto w-full max-w-3xl pb-10 px-5 box-border">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          {/* 文章头部信息 */}
          <header className="not-prose mb-8 mt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <div className="w-6 h-6 flex-shrink-0 bg-muted rounded-sm flex items-center justify-center text-xs overflow-hidden">
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
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            {desc && (
              <p className="text-xl text-muted-foreground mb-4">{desc}</p>
            )}
            {article.tags.length > 0 && (
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label={t('tags')}
              >
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
            )}
          </header>

          {/* 原文链接和主站链接 */}
          <div className="not-prose mb-8 flex items-center gap-4">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('read-original')}
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={`https://app.rsstabs.com/post/${article.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('view-in-app')}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </main>
    )
  } catch (error) {
    notFound()
  }
}
