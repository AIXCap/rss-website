// cloudflare edge runtime
export const runtime = 'edge'

import Hero from './components/hero'
import Features from './components/features'
import Evaluate from './components/evaluate'
import GetFree from './components/get-free'
import HotFeeds from './components/hot-feeds'
// import Pricing from './components/pricing'
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <HotFeeds />
      {/* <Pricing /> */}
      <Evaluate />
      <GetFree />
    </div>
  )
}
