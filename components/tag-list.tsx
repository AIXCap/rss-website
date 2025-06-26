import { TagCard } from '@/components/tag-card'
import { Tag } from '@/types/tag'
import { TagSearch } from '@/components/tag-search'
import { getTranslations } from 'next-intl/server'
import { Pagination } from '@/components/pagination'

interface TagListProps {
  tags: Tag[]
  locale: string
  searchParams?: {
    q?: string
    page?: string
  }
}

const PAGE_SIZE = 50

export async function TagList({ tags, locale, searchParams }: TagListProps) {
  const t = await getTranslations('Tags')

  // 过滤标签
  const query = searchParams?.q?.toLowerCase() || ''
  const filteredTags = query
    ? tags.filter(tag => tag.tagName.toLowerCase().includes(query))
    : tags

  // 分页逻辑
  const total = filteredTags.length
  const currentPage = Math.max(1, Number(searchParams?.page) || 1)
  const totalPages = Math.ceil(total / PAGE_SIZE)
  const pagedTags = filteredTags.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  // 生成分页链接，保留搜索参数
  const createHref = (page: number) => {
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (page > 1) params.set('page', String(page))
    return `/${locale === 'en' ? '' : locale + '/'}tags${params.toString() ? `?${params.toString()}` : ''}`
  }

  return (
    <div className="space-y-6">
      {/* 搜索框（客户端组件） */}
      <TagSearch tags={tags} searchParams={searchParams} locale={locale} />

      {/* 标签列表（服务端渲染） */}
      <nav aria-label={t('nav-label')} className="flex flex-wrap gap-2 min-h-[60px]">
        {pagedTags.map(tag => (
          <TagCard key={tag.id} tag={tag} locale={locale} />
        ))}
      </nav>

      {/* 分页控件 */}
      <Pagination
        total={total}
        pageSize={PAGE_SIZE}
        currentPage={currentPage}
        createHref={createHref}
      />
    </div>
  )
}
