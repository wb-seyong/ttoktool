import { useEffect } from 'react'

export default function Adsense() {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // 본인의 애드센스 ID
        data-ad-slot="XXXXXXXXXX" // 광고 슬롯 ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
