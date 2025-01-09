/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.rsstabs.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 1000,
  alternateRefs: [
    {
      href: 'https://www.rsstabs.com',
      hreflang: 'en'
    },
    {
      href: 'https://www.rsstabs.com/zh',
      hreflang: 'zh'
    },
    {
      href: 'https://www.rsstabs.com/ja',
      hreflang: 'ja'
    },
    {
      href: 'https://www.rsstabs.com/ru',
      hreflang: 'ru'
    }
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/api/*', '/_next/*', '/static/*'],
        allow: '/'
      }
    ],
    additionalSitemaps: ['https://doc.rsstabs.com/sitemap.xml']
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path.includes('/post/') ? 'daily' : 'weekly',
      priority: path.includes('/post/') ? 0.7 : 0.9,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  additionalPaths: async config => {
    const locales = ['', 'zh', 'ja', 'ru']
    const routes = [
      '', // 首页
      '/posts',
      '/tags'
    ]

    // 基础路由
    const basicPaths = locales.flatMap(locale =>
      routes.map(route => `/${locale}${route}`.replace('//', '/'))
    )

    // 重试函数
    async function fetchWithRetry(url, options, retries = 3) {
      for (let i = 0; i < retries; i++) {
        try {
          const response = await fetch(url, {
            ...options,
            timeout: 10000, // 10 秒超时
            keepalive: true
          })
          if (response.ok) return response
        } catch (err) {
          console.error(`Attempt ${i + 1} failed:`, err)
          if (i === retries - 1) throw err
          // 等待一段时间后重试
          await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
        }
      }
      throw new Error('Max retries reached')
    }

    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL || 'https://api.rsstabs.com/rss'
    try {
      // 获取文章总数
      const countRes = await fetchWithRetry(
        `${API_BASE_URL}/api/articles/ssr/searchList`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            page: {
              currentPage: 1,
              pageSize: 1
            }
          })
        }
      )

      const {
        data: { total }
      } = await countRes.json()
      const pageSize = 1000
      const totalPages = Math.ceil(total / pageSize)
      const articlePaths = []

      // 分页获取所有文章
      for (let page = 1; page <= totalPages; page++) {
        try {
          const res = await fetchWithRetry(
            `${API_BASE_URL}/api/articles/ssr/searchList`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                page: {
                  currentPage: page,
                  pageSize
                }
              })
            }
          )

          const { data } = await res.json()

          // 生成文章路径
          const pagePaths = data.list.flatMap(article =>
            locales.map(locale =>
              `/${locale}${locale ? '/' : ''}post/${article.id}`.replace(
                '//',
                '/'
              )
            )
          )

          articlePaths.push(...pagePaths)
        } catch (err) {
          console.error(`Failed to fetch page ${page}:`, err)
          continue // 跳过失败的页面，继续处理下一页
        }
      }

      // 合并所有路径
      const allPaths = [...basicPaths, ...articlePaths]
      return Promise.all(allPaths.map(path => config.transform(config, path)))
    } catch (error) {
      console.error('Error generating article paths for sitemap:', error)
      // 如果出错，至少返回基础路径
      return Promise.all(basicPaths.map(path => config.transform(config, path)))
    }
  }
}
