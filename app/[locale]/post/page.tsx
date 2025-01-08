// cloudflare edge runtime
export const runtime = 'edge'

import { redirect } from 'next/navigation'

export default function Post({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // 英语是默认语言，不需要语言前缀
  const redirectPath = locale === 'en' ? '/posts' : `/${locale}/posts`
  redirect(redirectPath)
}
