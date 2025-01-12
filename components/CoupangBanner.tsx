'use client'

import { useEffect, useRef } from 'react'

interface CoupangBannerProps {
  id: number
  trackingCode: string
}

// 쿠팡 파트너스 타입 정의
interface PartnersCoupangG {
  G: new (config: {
    id: number
    trackingCode: string
    template: string
    width: string
    height: string
  }) => void
}

declare global {
  interface Window {
    PartnersCoupang: PartnersCoupangG
  }
}

export default function CoupangBanner({ id, trackingCode }: CoupangBannerProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const initialized = useRef(false)

  useEffect(() => {
    const loadCoupangBanner = () => {
      if (!scriptRef.current) {
        const script = document.createElement('script')
        script.src = 'https://ads-partners.coupang.com/g.js'
        script.async = true
        script.onload = () => {
          if (!initialized.current && window.PartnersCoupang) {
            new window.PartnersCoupang.G({
              id: id,
              trackingCode: trackingCode,
              template: 'carousel',
              width: '680',
              height: '140',
            })
            initialized.current = true
          }
        }
        document.body.appendChild(script)
        scriptRef.current = script
      }
    }

    loadCoupangBanner()

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current)
        scriptRef.current = null
        initialized.current = false
      }
    }
  }, [id, trackingCode])

  return (
    <div className="my-8">
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
