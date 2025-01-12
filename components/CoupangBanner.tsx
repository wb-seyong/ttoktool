'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

interface CoupangBannerProps {
  id: number
  template?: 'carousel' | 'banner'
  trackingCode: string
  tsource?: string
}

export default function CoupangBanner({
  id,
  template = 'carousel',
  trackingCode,
  tsource = '',
}: CoupangBannerProps) {
  const initialized = useRef(false)
  const [width, setWidth] = useState('680')
  const [height, setHeight] = useState('140')

  useEffect(() => {
    const updateBannerSize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 640) {
        // sm
        setWidth('320')
        setHeight('100')
      } else if (windowWidth < 768) {
        // md
        setWidth('500')
        setHeight('120')
      } else {
        // lg 이상
        setWidth('680')
        setHeight('140')
      }
    }

    // 초기 사이즈 설정
    updateBannerSize()

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', updateBannerSize)

    if (!initialized.current) {
      // @ts-ignore: PartnersCoupang is loaded from external script
      if (window.PartnersCoupang) {
        // @ts-ignore
        new window.PartnersCoupang.G({
          id,
          template,
          trackingCode,
          width,
          height,
          tsource,
        })
        initialized.current = true
      }
    }

    return () => {
      window.removeEventListener('resize', updateBannerSize)
    }
  }, [id, template, trackingCode, width, height, tsource])

  return (
    <>
      <Script
        src="https://ads-partners.coupang.com/g.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          new window.PartnersCoupang.G({
            id,
            template,
            trackingCode,
            width,
            height,
            tsource,
          })
        }}
      />
      <div
        id={`coupang-banner-${id}`}
        className="mx-auto my-4"
        style={{
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      />
    </>
  )
}
