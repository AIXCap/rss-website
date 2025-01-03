/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.rsstabs.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
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
      { userAgent: '*', disallow: '/' },
      { userAgent: 'Yisouspider', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'bingbot', allow: '/' },
      { userAgent: 'Sogou inst spider', allow: '/' },
      { userAgent: 'Sogou web spider', allow: '/' },
      { userAgent: '360Spider', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'PetalBot', allow: '/' }
    ],
    additionalSitemaps: ['https://doc.rsstabs.com/sitemap.xml']
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  additionalPaths: async config => {
    const locales = ['', 'zh', 'ja', 'ru']
    const routes = [
      '', // 首页
      '/post',
      '/tags'
      // 添加其他重要页面路径
    ]

    const paths = locales.flatMap(locale =>
      routes.map(route => `/${locale}${route}`.replace('//', '/'))
    )

    return Promise.all(paths.map(path => config.transform(config, path)))
  }
}
