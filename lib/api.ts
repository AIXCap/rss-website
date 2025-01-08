import { TagListResponse } from '@/types/tag'
import {
  ArticleListResponse,
  ArticleSearchParams,
  ArticleResponse
} from '@/types/article'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.rsstabs.com/rss'

// 获取标签列表
export async function getTagList(): Promise<TagListResponse> {
  const res = await fetch(`${API_BASE_URL}/api/tags/ssr/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch tags')
  }

  return res.json()
}

// 获取文摘列表
export async function getArticleList(
  params: ArticleSearchParams,
  locale: string
): Promise<ArticleListResponse> {
  const res = await fetch(`${API_BASE_URL}/api/articles/ssr/searchList`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'country-language': locale
    },
    body: JSON.stringify({
      tag: params.tag ? [params.tag] : [],
      page: {
        currentPage: params.page?.currentPage || 1,
        pageSize: params.page?.pageSize || 30
      }
    }),
    next: { revalidate: 600 } // 10分钟缓存
  })

  if (!res.ok) {
    throw new Error('Failed to fetch articles')
  }

  return res.json()
}

// 获取文摘详情
export async function getArticle(
  id: string,
  locale: string
): Promise<ArticleResponse> {
  const res = await fetch(`${API_BASE_URL}/api/articles/ssr/findOne`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'country-language': locale
    },
    body: JSON.stringify({
      id,
      summary: false,
      extend: false
    }),
    next: { revalidate: 3600 } // 1 小时缓存
  })

  if (!res.ok) {
    throw new Error('Failed to fetch article')
  }

  return res.json()
}
