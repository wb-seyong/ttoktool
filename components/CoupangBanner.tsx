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
        console.log('Loading Coupang script...')
        const script = document.createElement('script')
        script.src = 'https://ads-partners.coupang.com/g.js'
        script.async = true

        script.onload = () => {
          console.log('Script loaded, PartnersCoupang:', window.PartnersCoupang)
          if (!initialized.current && window.PartnersCoupang) {
            try {
              console.log('Initializing banner with:', { id, trackingCode })
              new window.PartnersCoupang.G({
                id,
                trackingCode,
                template: 'carousel',
                width: '680',
                height: '140',
              })
              initialized.current = true
              console.log('Banner initialized successfully')
            } catch (error) {
              console.error('Error initializing banner:', error)
            }
          }
        }

        script.onerror = (error) => {
          console.error('Error loading script:', error)
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
        console.log('Cleanup: Script removed')
      }
    }
  }, [id, trackingCode])

  return (
    <div className="my-8">
      <div
        className="mx-auto my-4"
        style={{
          maxWidth: '100%',
          overflow: 'hidden',
          minHeight: '140px',
          border: '1px solid #eee',
        }}
      />
      <p className="mt-2 text-center text-xs text-gray-500">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </div>
  )
}
