// cloudflare edge runtime
export const runtime = 'edge'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ArticleCard } from '@/components/article-card'
import { ArticleSearchParams } from '@/types/article'
import { getArticleList } from '@/lib/api'
import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({
  params: { locale },
  searchParams
}: {
  params: { locale: string }
  searchParams: {
    tag?: string
  }
}) {
  const t = await getTranslations('Posts')
  const tag = searchParams.tag

  return {
    title: tag ? t('tagTitle', { tag }) : t('title'),
    description: tag ? t('tagDescription', { tag }) : t('description')
  } satisfies Metadata
}

export default async function PostsPage({
  params: { locale },
  searchParams
}: {
  params: { locale: string }
  searchParams: {
    currentPage?: string
    pageSize?: string
    tag?: string
  }
}) {
  const t = await getTranslations('Posts')

  // 转换 URL 查询参数为 API 参数格式
  const currentPage = searchParams.currentPage
    ? parseInt(searchParams.currentPage)
    : 1
  const pageSize = searchParams.pageSize ? parseInt(searchParams.pageSize) : 30
  const tag = searchParams.tag

  const apiParams: ArticleSearchParams = {
    page: {
      currentPage,
      pageSize
    },
    tag
  }

  const { data } = await getArticleList(apiParams, locale)

  // 创建分页链接
  const createPaginationHref = (page: number) => {
    const params = new URLSearchParams()
    if (page > 1) params.set('currentPage', page.toString())
    if (pageSize !== 30) params.set('pageSize', pageSize.toString())
    if (tag) params.set('tag', tag)
    const query = params.toString()
    return `/${locale}/posts${query ? `?${query}` : ''}`
  }

  // 创建取消标签筛选的链接
  const createClearTagHref = () => {
    const params = new URLSearchParams()
    if (currentPage > 1) params.set('currentPage', currentPage.toString())
    if (pageSize !== 30) params.set('pageSize', pageSize.toString())
    const query = params.toString()
    return `/${locale}/posts${query ? `?${query}` : ''}`
  }

  return (
    <main className="mx-auto w-full max-w-3xl pb-10 px-5 box-border">
      <header className="py-8">
        <h1 className="text-3xl font-bold">
          {tag ? t('tagTitle', { tag }) : t('title')}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {tag ? t('tagDescription', { tag }) : t('description')}
        </p>
      </header>
      <section aria-label={t('articles-section')} className="space-y-6">
        {tag && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{t('filtered-by-tag', { tag })}</span>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-5 w-5"
              aria-label={t('clear-tag-filter')}
              title={t('clear-tag-filter')}
            >
              <Link href={createClearTagHref()}>
                <X className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
        <div role="feed" aria-busy="false" className="space-y-5">
          {data.list.map(article => (
            <article key={article.id}>
              <ArticleCard article={article} locale={locale} />
            </article>
          ))}
        </div>
        <Pagination
          total={data.total}
          pageSize={pageSize}
          currentPage={currentPage}
          createHref={createPaginationHref}
        />
      </section>
    </main>
  )
}
