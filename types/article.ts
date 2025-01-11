export interface Article {
  id: string
  articleId: string
  sourceId: string
  sourceName: string
  sourceLogo: string
  title: string
  author: string
  lang: string
  link: string
  tags: string[]
  imgList: Record<string, string>
  description: string
  summary: string
  publicationDate: string
  createDate: string
  lastUpdated: string
}

export interface ArticleListResponse {
  data: {
    total: number
    list: Article[]
  }
  status: number
  extra: Record<string, unknown>
  message: string
  success: boolean
}

export interface ArticleResponse {
  data: Article
  status: number
  extra: Record<string, unknown>
  message: string
  success: boolean
}

export interface ArticleSearchParams {
  page?: {
    currentPage?: number
    pageSize?: number
  }
  tag?: string
}
