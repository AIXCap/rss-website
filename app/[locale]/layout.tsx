/*
 * @LastEditTime: 2024-11-08 18:41:34
 * @Description: ...
 * @Date: 2024-09-28 02:00:23
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server'
import { ReactNode } from 'react'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

type Props = {
  children: ReactNode
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  // const t = await getTranslations({locale, namespace: 'core'});
  const t = await getTranslations({ locale })

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      'rsstab, rsstabs, rss, feed, poly feed, single feed, aggregator, reader, news, blog, podcast'
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
