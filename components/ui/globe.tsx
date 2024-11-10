'use client'

import createGlobe, { COBEOptions } from 'cobe'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from 'react'

import { cn } from '@/lib/utils'

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0.102, 0.302, 0.831],
  glowColor: [0.082, 0.082, 0.106],
  opacity: 0.9,
  markers: [
    { location: [39.9042, 116.4074], size: 0.1 }, // 北京，中国
    { location: [55.7558, 37.6173], size: 0.09 }, // 莫斯科，俄罗斯
    { location: [51.5074, -0.1278], size: 0.07 }, // 伦敦，英国
    { location: [35.6762, 139.6503], size: 0.05 }, // 东京，日本
    { location: [37.5665, 126.978], size: 0.05 }, // 首尔，韩国
    { location: [39.0392, 125.7625], size: 0.02 }, // 平壤，朝鲜
    { location: [41.9028, 12.4964], size: 0.08 }, // 罗马，意大利
    { location: [38.8977, -77.0365], size: 0.09 }, // 华盛顿，美国
    { location: [28.6139, 77.209], size: 0.09 }, // 新德里，印度
    { location: [52.52, 13.405], size: 0.08 }, // 柏林，德国
    { location: [48.8566, 2.3522], size: 0.08 }, // 巴黎，法国
    { location: [59.3293, 18.0686], size: 0.07 }, // 斯德哥尔摩，瑞典
    { location: [40.4168, -3.7038], size: 0.08 }, // 马德里，西班牙
    { location: [38.7223, -9.1393], size: 0.07 }, // 里斯本，葡萄牙
    { location: [50.8503, 4.3517], size: 0.07 } // 布鲁塞尔，比利时
  ]
}

export interface GlobeRef {
  globe: any
  toggle: (bool: boolean) => void // 添加 toggle 方法的类型定义
}

interface GlobeProps {
  className?: string
  config?: COBEOptions
}

const Globe = forwardRef<GlobeRef, GlobeProps>(
  ({ className, config = GLOBE_CONFIG }, ref) => {
    let phi = 0
    let width = 0
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerInteracting = useRef(null)
    const pointerInteractionMovement = useRef(0)
    const [r, setR] = useState(0)

    const updatePointerInteraction = (value: any) => {
      pointerInteracting.current = value
      if (canvasRef.current) {
        canvasRef.current.style.cursor = value ? 'grabbing' : 'grab'
      }
    }

    const updateMovement = (clientX: any) => {
      if (pointerInteracting.current !== null) {
        const delta = clientX - pointerInteracting.current
        pointerInteractionMovement.current = delta
        setR(delta / 200)
      }
    }

    const onRender = useCallback(
      (state: Record<string, any>) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + r
        state.width = width * 2
        state.height = width * 2
      },
      [r]
    )

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    const globeInstance = useRef<any>(null)

    useEffect(() => {
      window.addEventListener('resize', onResize)
      onResize()

      const globe = createGlobe(canvasRef.current!, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender
      })

      globeInstance.current = globe

      setTimeout(() => {
        canvasRef.current!.style.opacity = '1'
        globe.toggle(false)
      })
      return () => globe.destroy()
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        globe: globeInstance.current,
        toggle: (bool: boolean) => {
          if (globeInstance.current) {
            globeInstance.current.toggle(bool)
          }
        }
      }),
      []
    )

    return (
      <div
        className={cn(
          'absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]',
          className
        )}
      >
        <canvas
          className={cn(
            'size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]'
          )}
          ref={canvasRef}
          onPointerDown={e =>
            updatePointerInteraction(
              e.clientX - pointerInteractionMovement.current
            )
          }
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={e => updateMovement(e.clientX)}
          onTouchMove={e =>
            e.touches[0] && updateMovement(e.touches[0].clientX)
          }
        />
      </div>
    )
  }
)

export default Globe
