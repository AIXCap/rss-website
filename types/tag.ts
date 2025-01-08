// 标签接口类型定义
export interface Tag {
  id: string
  tagName: string // 由 name 改为 tagName
  createDate: string // 由 createdAt 改为 createDate
  lastUpdated: string // 由 updatedAt 改为 lastUpdated
}

// API 响应数据结构
export interface TagListResponse {
  data: Tag[]
  status: number
  extra: Record<string, any>
  message: string
  success: boolean
}
