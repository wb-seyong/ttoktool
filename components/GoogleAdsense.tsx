'use client'

import Script from 'next/script'

export default function GoogleAdsense() {
  return (
    <Script
      id="adsbygoogle-init"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9453439435774354`}
    />
  )
}
