// 标签接口类型定义
export interface Tag {
  id: string
  tagName: string // 由 name 改为 tagName
  createDate: string // 由 createdAt 改为 createDate
  lastUpdated: string // 由 updatedAt 改为 lastUpdated
}

// API 响应数据结构
export interface ApiResponse<T> {
  data: T
  status: number
  extra: Record<string, any>
  message: string
  success: boolean
}

// 标签列表数据结构
export interface TagListData {
  list: Tag[]
  total: number
}

// 标签列表完整响应类型
export type TagListResponse = ApiResponse<TagListData>
