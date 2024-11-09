import Hero from './components/hero'
import Features from './components/features'
import Pricing from './components/pricing'
import Evaluate from './components/evaluate'
import TextReveal from '@/components/ui/text-reveal'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      {/* <div className="z-10 flex min-h-64 items-center justify-center">
        <TextReveal text="Magic UI will change the way you design." />
      </div> */}
      <Features />
      <Pricing />
      <Evaluate />
    </div>
  )
}
