import { parse as htmlParse } from 'node-html-parser'
import { parse as markedParse } from 'marked'

/**
 * @param {*} md
 * @description md转换为html
 * @return {*}
 */
export function parseMdToHtml(md: string) {
  if (!md) return ''
  return markedParse(md)
}

/**
 * 从 HTML 字符串中提取第一个图片的 URL
 */
export function parseHTMLToFirstImage(htmlString: string): string {
  if (!htmlString) return ''
  const root = htmlParse(htmlString)
  const img = root.querySelector('img')
  return img?.getAttribute('src') || ''
}

/**
 * 将 HTML 字符串解析为纯文本
 */
export function parseHTMLToText(htmlString: string): string {
  if (!htmlString) return htmlString
  const root = htmlParse(htmlString)
  return root.textContent || ''
}
