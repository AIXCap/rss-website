import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'
import { useTranslations } from 'next-intl'
const reviews = [
  {
    name: 'Isboyjc',
    username: '@isboyjc',
    body: "RssTabs has solved a problem I've been having with information, it's just great! 👍👍👍",
    img: 'https://avatar.vercel.sh/isboyjc'
  },
  {
    name: '言萧凡',
    username: '@cookieboty',
    body: "It's a product made with heart and hopefully will continue to iterate and get better and better!",
    img: 'https://avatar.vercel.sh/cookieboty'
  },
  {
    name: 'ヤマモ',
    username: '@ddle',
    body: 'どんどん良くなることを期待している。素晴らしい製品だし、AI翻訳も素晴らしいよ！',
    img: 'https://avatar.vercel.sh/ddle'
  },
  {
    name: 'Captain、',
    username: '@captain',
    body: 'This is really awesome, really like an RSS product! 🎉',
    img: 'https://avatar.vercel.sh/captain'
  },
  {
    name: '文如秋雨',
    username: '@zhiwei',
    body: '支持多种语言真的太棒了，AI Summary 可以让我快速的预览信息从而节省时间！',
    img: 'https://avatar.vercel.sh/zhiwei'
  },
  {
    name: '老骥farmer',
    username: '@yongsen',
    body: '他的出现简直是我的救星，这巧夺天工的设计，这丝滑流畅的体验，tql。',
    img: 'https://avatar.vercel.sh/yongsen'
  },
  {
    name: 'Miyue',
    username: '@miyuesc',
    body: 'The search is really so good, I love it, and the interaction is great, ah, encouragement!',
    img: 'https://avatar.vercel.sh/miyuesc'
  },
  {
    name: '林小帅',
    username: '@lin',
    body: '是的，我现在已经离不开 RssTabs 了，它真的太好用了！',
    img: 'https://avatar.vercel.sh/lin'
  },
  {
    name: 'タンジェリン',
    username: '@orange121',
    body: '素晴らしい製品で、今後もサポートが継続されることを願っている！ 😄',
    img: 'https://avatar.vercel.sh/orange121'
  },
  {
    name: '南方',
    username: '@lwy625035300',
    body: '很好用的产品，它解决了我在不同社区间切换阅读的痛点，非常感谢！',
    img: 'https://avatar.vercel.sh/lwy625035300'
  }
]

const chunkSize = Math.ceil(reviews.length / 3)
const firstRow = reviews.slice(0, chunkSize)
const secondRow = reviews.slice(chunkSize, chunkSize * 2)
const thirdRow = reviews.slice(chunkSize * 2)

const ReviewCard = ({
  img,
  name,
  username,
  body
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        'relative h-40 w-[100%] cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        // 'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-[var(--rss-color-border-1)] dark:bg-[var(--rss-color-bg-1)] dark:hover:bg-[var(--rss-color-bg-2)]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function Evaluate() {
  const t = useTranslations()

  return (
    <div className="relative max-w-screen-xl mx-auto py-40 px-5">
      {/* <div className="text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A6DDFF] via-[var(--rss-theme-primary)] to-[#0077FF]">
        {t('header.evaluate')}
      </div> */}
      <div className="text-center mt-4">
        <div className="text-center font-heading text-3xl font-bold leading-none sm:text-4xl">
          {t('evaluate.description')}
        </div>
      </div>
      <div className="text-center text-[var(--rss-color-text-2)] text-xl mb-40 mt-4">
        {t('evaluate.description-2')}
      </div>
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee
          pauseOnHover
          vertical
          className="w-full sm:w-1/2 md:w-1/3 [--duration:20s]"
        >
          {firstRow.map(review => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="hidden w-full sm:flex sm:w-1/2 md:flex md:w-1/3 [--duration:20s]"
        >
          {secondRow.map(review => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="hidden md:flex w-full md:w-1/3 [--duration:20s]"
        >
          {thirdRow.map(review => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  )
}
