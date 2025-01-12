'use client'

interface CoupangBannerProps {
  id: number
  trackingCode: string
  width?: number
  height?: number
}

export default function CoupangBanner({
  id,
  trackingCode,
  width = 680,
  height = 140,
}: CoupangBannerProps) {
  const iframeUrl = `https://ads-partners.coupang.com/widgets.html?id=${id}&template=carousel&trackingCode=${trackingCode}&subId=&width=${width}&height=${height}&tsource=`

  return (
    <div className="my-8">
      <div className="mx-auto my-4 overflow-hidden">
        <iframe
          src={iframeUrl}
          width={width}
          height={height}
          frameBorder="0"
          scrolling="no"
          referrerPolicy="unsafe-url"
          browsingtopics="true"
          className="mx-auto"
          title="쿠팡 파트너스"
        />
      </div>
      <p className="mt-2 text-center text-xs text-gray-500">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </div>
  )
}
