import Ripple from '@/components/ui/ripple'
import { ScanSearch } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SearchBg({ className }: { className?: string }) {
  return (
    <div className="relative flex h-[120%] w-full flex-col items-center justify-center overflow-hidden">
      <p className="z-10 mt-20 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-white">
        <ScanSearch size={48} strokeWidth={2} color="#cccccc" />
      </p>
      <Ripple classNameChildren={cn('', className)} />
    </div>
  )
}
