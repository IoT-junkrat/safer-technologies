import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const CONSENT_KEY = 'saferCookieConsent'

// Called once consent is confirmed — updates Consent Mode v2 and loads GA4
export const initAnalytics = () => {
  if (typeof window !== 'undefined' && !window.__gaInitialised) {
    // Update consent signals before GA loads
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }
    import('react-ga4').then(({ default: ReactGA }) => {
      ReactGA.initialize('G-FSY9VK13T0', {
        gaOptions: { send_page_view: true },
      })
      window.__gaInitialised = true
    })
  }
}

const CookieConsent = () => {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      // Small delay so the page renders first
      const id = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(id)
    }
    if (stored === 'accepted') initAnalytics()
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    initAnalytics()
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className='fixed bottom-0 left-0 right-0 z-[1000] flex justify-center px-4 pb-4'
      style={{ animation: 'slideUpCookie 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both' }}
    >
      <div
        className='w-full max-w-[780px] flex sm:flex-row flex-col items-start sm:items-center gap-4 rounded-[16px] px-6 py-5'
        style={{
          background: 'linear-gradient(-168.39deg, #1a1a2e -278.56%, #11101d 91.61%)',
          border: '1px solid #3F3E45',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
        }}
      >
        {/* Icon + text */}
        <div className='flex items-start gap-3 flex-1'>
          <span className='text-[22px] mt-0.5 flex-shrink-0'>🍪</span>
          <div>
            <p className='font-poppins font-semibold text-white text-[15px] leading-[20px] mb-1'>
              {t.cookie.title}
            </p>
            <p className='font-poppins font-normal text-dimWhite text-[13px] leading-[20px]'>
              {t.cookie.body}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-row gap-3 flex-shrink-0'>
          <button
            onClick={decline}
            className='font-poppins font-medium text-[14px] text-dimWhite px-4 py-2 rounded-[8px] border border-[#3F3E45] bg-transparent hover:border-[rgba(255,255,255,0.3)] transition-colors duration-200 cursor-pointer'
          >
            {t.cookie.decline}
          </button>
          <button
            onClick={accept}
            className='font-poppins font-semibold text-[14px] text-primary px-5 py-2 rounded-[8px] cursor-pointer transition-opacity duration-200 hover:opacity-90'
            style={{
              background: 'linear-gradient(157.81deg,#def9fa -43.27%,#bef3f5 -21.24%,#9dedf0 12.19%,#7de7eb 29.82%,#5ce1e6 51.94%,#33bbcf 90.29%)',
            }}
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
