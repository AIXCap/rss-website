import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PaginationProps {
  total: number
  pageSize: number
  currentPage: number
  createHref: (page: number) => string
}

export function Pagination({
  total,
  pageSize,
  currentPage,
  createHref
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize)
  if (totalPages <= 1) return null

  // 生成页码数组
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5 // 最多显示5个页码
    const halfVisible = Math.floor(maxVisible / 2)

    let start = Math.max(1, currentPage - halfVisible)
    let end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    // 添加第一页
    if (start > 1) {
      pages.push(1)
      if (start > 2) pages.push('...')
    }

    // 添加中间页码
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    // 添加最后一页
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <nav
      role="navigation"
      aria-label="分页导航"
      className="flex justify-center items-center gap-2"
    >
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage <= 1}
        asChild={currentPage > 1}
      >
        {currentPage > 1 ? (
          <Link href={createHref(currentPage - 1)} aria-label="上一页">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        ) : (
          <span>
            <ChevronLeft className="h-4 w-4" />
          </span>
        )}
      </Button>

      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-2">
              ...
            </span>
          )
        }

        const isCurrentPage = page === currentPage
        return (
          <Button
            key={page}
            variant={isCurrentPage ? 'default' : 'outline'}
            size="icon"
            aria-current={isCurrentPage ? 'page' : undefined}
            asChild={!isCurrentPage}
          >
            {isCurrentPage ? (
              <span>{page}</span>
            ) : (
              <Link
                href={createHref(page as number)}
                aria-label={`第 ${page} 页`}
              >
                {page}
              </Link>
            )}
          </Button>
        )
      })}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage >= totalPages}
        asChild={currentPage < totalPages}
      >
        {currentPage < totalPages ? (
          <Link href={createHref(currentPage + 1)} aria-label="下一页">
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <span>
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </Button>
    </nav>
  )
}
