import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
    if (stored) {
      if (stored === 'accepted') initAnalytics()
      return
    }

    // Only show the banner once the page has finished its heavy initial work
    // (render, image decode, paint). Showing it earlier meant it appeared while
    // the main thread was still busy, so it looked frozen / unclickable.
    let cancelled = false
    const show = () => {
      if (cancelled) return
      const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200))
      idle(() => { if (!cancelled) setVisible(true) })
    }
    const cap = setTimeout(show, 4000)
    if (document.readyState === 'complete') show()
    else window.addEventListener('load', show, { once: true })

    return () => {
      cancelled = true
      clearTimeout(cap)
      window.removeEventListener('load', show)
    }
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

  // Portal to <body>: keeps the banner out of the page wrapper's overflow/stacking
  // context so nothing in the page layout can sit on top of it or swallow taps.
  return createPortal(
    <div
      className='fixed bottom-0 left-0 right-0 z-[1000] flex justify-center px-3 pb-3 sm:px-4 sm:pb-4'
      style={{ animation: 'slideUpCookie 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both' }}
    >
      <div
        className='w-full max-w-[780px] max-h-[80vh] overflow-y-auto flex sm:flex-row flex-col items-start sm:items-center gap-3 sm:gap-4 rounded-[16px] px-4 py-3.5 sm:px-6 sm:py-5'
        style={{
          background: 'linear-gradient(-168.39deg, #1a1a2e -278.56%, #11101d 91.61%)',
          border: '1px solid #3F3E45',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
        }}
      >
        {/* Icon + text */}
        <div className='flex items-start gap-2 sm:gap-3 flex-1'>
          <span className='text-[18px] sm:text-[22px] mt-0.5 flex-shrink-0'>🍪</span>
          <div>
            <p className='font-poppins font-semibold text-white text-[14px] sm:text-[15px] leading-[18px] sm:leading-[20px] mb-1'>
              {t.cookie.title}
            </p>
            <p className='font-poppins font-normal text-dimWhite text-[12px] sm:text-[13px] leading-[17px] sm:leading-[20px]'>
              {t.cookie.body}{' '}
              <a
                href='#privacy'
                onClick={() => setVisible(false)}
                className='underline text-secondary hover:text-white transition-colors duration-200'
              >
                {t.cookie.moreInfo}
              </a>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex flex-row gap-2 sm:gap-3 flex-shrink-0 self-end sm:self-auto'>
          <button
            onClick={decline}
            className='font-poppins font-medium text-[13px] sm:text-[14px] text-dimWhite px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[8px] border border-[#3F3E45] bg-transparent hover:border-[rgba(255,255,255,0.3)] transition-colors duration-200 cursor-pointer touch-manipulation'
          >
            {t.cookie.decline}
          </button>
          <button
            onClick={accept}
            className='font-poppins font-semibold text-[13px] sm:text-[14px] text-primary px-4 py-1.5 sm:px-5 sm:py-2 rounded-[8px] cursor-pointer transition-opacity duration-200 hover:opacity-90 touch-manipulation'
            style={{
              background: 'linear-gradient(157.81deg,#def9fa -43.27%,#bef3f5 -21.24%,#9dedf0 12.19%,#7de7eb 29.82%,#5ce1e6 51.94%,#33bbcf 90.29%)',
            }}
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default CookieConsent
