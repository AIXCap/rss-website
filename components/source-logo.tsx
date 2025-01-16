/*
 * @LastEditTime: 2025-01-17 01:59:47
 * @Description: ...
 * @Date: 2025-01-08 23:29:23
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SourceLogoProps {
  logo?: string
  name: string
}

export function SourceLogo({ logo, name }: SourceLogoProps) {
  const [error, setError] = useState(!logo)

  if (error || !name) {
    return <span>{name?.[0] || ''}</span>
  }

  return (
    <Image
      src={logo!}
      alt={name}
      width={20}
      height={20}
      className="object-cover"
      onError={() => setError(true)}
      unoptimized
    />
  )
}
