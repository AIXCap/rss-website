import OrbitingCircles from '@/components/ui/orbiting-circles'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import {
  LogosCSharp,
  LogosDotnet,
  LogosAndroidIcon,
  LogosJavascript,
  LogosJava,
  LogosAwesome,
  LogosRedditIcon,
  LogosGoogleDevelopers,
  LogosStackoverflowIcon,
  LogosSifou,
  LogosJuejin,
  LogosGithub,
  LogosMediumIcon
} from './hot-feed-icons'

export function AggregationBg({
  duration = 20,
  className
}: {
  duration?: number
  className?: string
}) {
  const t = useTranslations()

  return (
    <div className="relative ml-[0%] sm:ml-[25%] mt-[10%] group-hover:scale-[1.1] transition-all duration-300 flex h-[120%] flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        {t('features.aggregation-i')}
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className={cn('size-[30px] border-none bg-transparent', className)}
        duration={duration}
        delay={10}
        radius={70}
      >
        <LogosGithub />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[30px] border-none bg-transparent', className)}
        duration={duration}
        delay={17}
        radius={70}
      >
        <LogosMediumIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[30px] border-none bg-transparent', className)}
        duration={duration}
        delay={24}
        radius={70}
      >
        <LogosRedditIcon className="w-full h-full" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className={cn('size-[50px] border-none bg-transparent', className)}
        radius={140}
        duration={duration}
        delay={0}
        reverse
      >
        <LogosJuejin className="w-[65%] h-[65%]" />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[50px] border-none bg-transparent', className)}
        radius={140}
        duration={duration}
        delay={7}
        reverse
      >
        <LogosStackoverflowIcon className="w-[60%] h-[60%]" />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[50px] border-none bg-transparent', className)}
        radius={140}
        duration={duration}
        delay={14}
        reverse
      >
        <LogosGoogleDevelopers className="w-[60%] h-[60%]" />
      </OrbitingCircles>

      <OrbitingCircles
        className={cn('size-[65px] border-none bg-transparent', className)}
        radius={200}
        duration={duration}
        delay={0}
      >
        <LogosAwesome className="w-[60%] h-[60%]" />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[65px] border-none bg-transparent', className)}
        radius={200}
        duration={duration}
        delay={4}
      >
        <LogosDotnet className="w-[60%] h-[60%]" />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[65px] border-none bg-transparent', className)}
        radius={200}
        duration={duration}
        delay={8}
      >
        <LogosAndroidIcon className="w-[60%] h-[60%]" />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[65px] border-none bg-transparent', className)}
        radius={200}
        duration={duration}
        delay={12}
      >
        <LogosJavascript className="w-[60%] h-[60%]" />
      </OrbitingCircles>
      <OrbitingCircles
        className={cn('size-[65px] border-none bg-transparent', className)}
        radius={200}
        duration={duration}
        delay={16}
      >
        <LogosJava className="w-[60%] h-[60%]" />
      </OrbitingCircles>
    </div>
  )
}
