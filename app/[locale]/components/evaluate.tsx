import { cn } from '@/lib/utils'
import Marquee from '@/components/ui/marquee'

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
    body: "I'm at a loss for words. This is amazing. I love it. good product! ha ~~~",
    img: 'https://avatar.vercel.sh/yongsen'
  },
  {
    name: '南方',
    username: '@lwy625035300',
    body: '很好用的产品，它解决了我在不同社区间切换阅读的痛点，非常感谢！',
    img: 'https://avatar.vercel.sh/lwy625035300'
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
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

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
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
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
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map(review => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map(review => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}
