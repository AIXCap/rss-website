'use client'

export function LayoutBg() {
  return (
    <div className="relative flex h-[100%] w-full flex-col items-center justify-center overflow-hidden -z-1">
      <div className="z-8 mt-40 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        <div className="absolute top-[40%] left-0 perspective-4000 transform-style-3d perspective-origin-100-0">
          <div className="scale3d-[0.8] transform-origin-top-left translate-x-[0%] rotate-y-[10deg] rotate-x-[10deg] -rotate-[10deg] group-hover:-rotate-[5deg] transition-all duration-300">
            <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-r from-transparent to-background"></div>
            <img
              src="/images/pc.png"
              alt=""
              className="w-full rounded-[2px] border"
            />
          </div>
        </div>
        <div className="absolute top-[30%] left-[20%] perspective-4000 transform-style-3d perspective-origin-100-0">
          <div className="scale3d-[0.9] transform-origin-top-left translate-x-[0%] rotate-y-[10deg] rotate-x-[10deg] -rotate-[10deg] group-hover:-rotate-[5deg] transition-all duration-300">
            <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-r from-transparent to-background"></div>
            <img
              src="/images/pc1.png"
              alt=""
              className="w-full rounded-[2px] border"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
