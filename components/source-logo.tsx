'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SourceLogoProps {
  logo?: string
  name: string
}

export function SourceLogo({ logo, name }: SourceLogoProps) {
  const [error, setError] = useState(!logo)

  if (error) {
    return <span>{name.charAt(0)}</span>
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
