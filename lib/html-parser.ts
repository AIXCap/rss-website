/*
 * @LastEditTime: 2025-01-09 03:34:37
 * @Description: ...
 * @Date: 2025-01-09 03:34:05
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { parse } from 'node-html-parser'

/**
 * 从 HTML 字符串中提取第一个图片的 URL
 */
export function parseHTMLToFirstImage(htmlString: string): string {
  if (!htmlString) return ''
  const root = parse(htmlString)
  const img = root.querySelector('img')
  return img?.getAttribute('src') || ''
}

/**
 * 将 HTML 字符串解析为纯文本
 */
export function parseHTMLToText(htmlString: string): string {
  if (!htmlString) return htmlString
  const root = parse(htmlString)
  return root.textContent || ''
}
