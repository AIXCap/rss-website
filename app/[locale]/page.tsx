import Hero from './components/hero'
import Features from './components/features'
import Pricing from './components/pricing'
import Evaluate from './components/evaluate'
import GetFree from './components/get-free'
import HotFeeds from './components/hot-feeds'
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      {/* <div className="z-10 flex min-h-64 items-center justify-center">
        <TextReveal text="Magic UI will change the way you design." />
      </div> */}
      <Features />
      <HotFeeds />
      <Pricing />
      <Evaluate />
      <GetFree />
    </div>
  )
}
