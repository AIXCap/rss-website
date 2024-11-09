/*
 * @LastEditTime: 2024-11-09 17:26:51
 * @Description: ...
 * @Date: 2024-11-09 17:25:44
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import ShimmerButton from '@/components/ui/shimmer-button'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function StartButtonGroup() {
  const t = useTranslations()

  const [browser, setBrowser] = useState<{
    isChrome: boolean
    isFirefox: boolean
    isEdge: boolean
  }>({
    isChrome: false,
    isFirefox: false,
    isEdge: false
  })
  useEffect(() => {
    const detectBrowser = () => {
      if (typeof window === 'undefined') return

      const ua = window.navigator.userAgent.toLowerCase()

      return {
        isChrome: /chrome/.test(ua) && !/edg|edge/.test(ua) && !/opr/.test(ua),
        isFirefox: /firefox/.test(ua),
        isEdge: /edg|edge/.test(ua),
        isSafari: /safari/.test(ua) && !/chrome/.test(ua)
      }
    }

    setBrowser(detectBrowser() || browser)
  }, [])

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <ShimmerButton className="shadow-xl" background="var(--rss-color-bg)">
        <span className="text-center text-sm text-[var(--rss-color-text)]">
          {t('get-free')}
        </span>
      </ShimmerButton>
      {(browser.isChrome || browser.isFirefox || browser.isEdge) && (
        <Button className="rounded-full" size="lg">
          <Image
            className="mr-1"
            width={18}
            height={18}
            src={
              browser.isChrome
                ? '/images/chrome.png'
                : browser.isFirefox
                  ? '/images/firefox.png'
                  : '/images/edge.png'
            }
            alt=""
          />
          {t('add-to-chrome', {
            browser: browser.isChrome
              ? 'Google Chrome'
              : browser.isFirefox
                ? 'Mozilla Firefox'
                : 'Microsoft Edge'
          })}
        </Button>
      )}
    </div>
  )
}
