import { TagListResponse } from '@/types/tag'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.rsstabs.com/rss'

// 获取标签列表
export async function getTagList(): Promise<TagListResponse> {
  const res = await fetch(`${API_BASE_URL}/api/tags/ssr/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      tagName: '',
      description: '',
      page: {
        pageSize: 100000,
        current: 1
      }
    })
  })

  if (!res.ok) {
    throw new Error('Failed to fetch tags')
  }

  return res.json()
}
