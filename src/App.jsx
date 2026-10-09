import React, { useEffect, useState } from 'react'
import {
  Hero, Navbar, Stats, Business, Billing, Testimonials as Industries,
  CTA, Footer, Impressum, CookieConsent,
} from './components'
import PrivacyPolicy from './components/PrivacyPolicy'
import styles from './style'
import uparrowimg from './assets/uparrow.png'
import { LanguageProvider } from './context/LanguageContext'
import SEOMeta from './components/SEOMeta'

const App = () => {
  const [showTopButton, setShowTopButton] = useState(false)

  const handleScrollToTopEvent = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleTopEvent = () => {
      setShowTopButton(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', handleTopEvent)
    return () => window.removeEventListener('scroll', handleTopEvent)
  }, [])

  return (
    <LanguageProvider>
      <SEOMeta />
      <div className='bg-primary w-full overflow-hidden'>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <Industries />
            <CTA />
            <Footer />
            <Impressum />
            <PrivacyPolicy />
          </div>
        </div>

        {/* Scroll-to-top button */}
        {showTopButton && (
          <button
            onClick={handleScrollToTopEvent}
            className='fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-blue-gradient flex items-center justify-center shadow-lg cursor-pointer border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
            aria-label='Back to top'
          >
            <img src={uparrowimg} alt='back to top' className='w-5 h-5 object-contain' />
          </button>
        )}

        {/* Cookie consent banner — shown after 800ms on first visit */}
        <CookieConsent />

      </div>
    </LanguageProvider>
  )
}

export default App
