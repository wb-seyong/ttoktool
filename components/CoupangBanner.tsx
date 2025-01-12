'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

interface CoupangBannerProps {
  id: number
  trackingCode: string
  subId?: string | null
}

export default function CoupangBanner({ id, trackingCode, subId = null }: CoupangBannerProps) {
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
          trackingCode,
          subId,
          template: 'carousel',
          width,
          height,
        })
        initialized.current = true
      }
    }

    return () => {
      window.removeEventListener('resize', updateBannerSize)
    }
  }, [id, trackingCode, subId, width, height])

  return (
    <div className="my-8">
      <Script
        src="https://ads-partners.coupang.com/g.js"
        strategy="lazyOnload"
        nonce="coupang-partners"
        onLoad={() => {
          // @ts-ignore
          new window.PartnersCoupang.G({
            id,
            trackingCode,
            subId,
            template: 'carousel',
            width,
            height,
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
      <p className="mt-2 text-center text-xs text-gray-500">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </div>
  )
}
