export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          개인정보처리방침
        </h1>
      </div>
      <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">
        <h2>수집하는 개인정보 항목</h2>
        <ul>
          <li>방문자 로그(IP 주소, 방문 시간)</li>
          <li>쿠키 및 유사 기술</li>
          <li>댓글 시스템 사용 시 이메일 주소</li>
        </ul>

        <h2>개인정보 수집 목적</h2>
        <ul>
          <li>서비스 제공 및 운영</li>
          <li>방문자 통계 분석</li>
          <li>광고 제공 및 최적화</li>
        </ul>

        <h2>개인정보 보관 기간</h2>
        <p>
          수집된 개인정보는 수집 목적이 달성된 후 지체 없이 파기합니다. 단, 관련 법령에 따라 보관이
          필요한 경우 해당 기간 동안 보관합니다.
        </p>

        <h2>제3자 제공</h2>
        <p>
          본 블로그는 Google AdSense 및 Google Analytics를 통해 수집된 정보를 제3자에게 제공할 수
          있습니다. 이 경우, 개인정보는 익명화되어 제공됩니다.
        </p>

        <h2>쿠키 사용</h2>
        <p>
          본 블로그는 쿠키를 사용하여 방문자의 웹사이트 사용 패턴을 분석하고, 맞춤형 광고를 제공하기
          위해 사용합니다. 쿠키 사용을 원하지 않으실 경우, 브라우저 설정을 통해 쿠키 저장을 거부할
          수 있습니다.
        </p>

        <h2>이용자 권리</h2>
        <p>
          이용자는 언제든지 개인정보의 열람, 정정, 삭제를 요청할 수 있습니다. 개인정보와 관련된
          문의는 아래의 연락처로 문의해주시기 바랍니다.
        </p>

        <h2>관리자 연락처</h2>
        <p>이메일: dddiwbsy@gmail.com</p>

        <p className="text-sm text-gray-500">
          본 개인정보처리방침은 2024년 1월 12일부터 적용됩니다.
        </p>
      </div>
    </div>
  )
}
