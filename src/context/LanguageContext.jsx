import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext()
const STORAGE_KEY = 'saferLang'
const DACH = ['DE', 'AT', 'CH']

export const LanguageProvider = ({ children }) => {
  // null = still detecting; avoids flash of wrong language
  const [lang, setLang] = useState(null)

  useEffect(() => {
    // 1. User has already chosen → honour it immediately
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'de' || stored === 'en') {
      setLang(stored)
      return
    }

    // 2. Browser / OS language preference
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase()
    if (browserLang.startsWith('de')) {
      setLang('de')
      return
    }

    // 3. IP-based geo detection
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 3000)

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        clearTimeout(timer)
        setLang(DACH.includes(data.country_code) ? 'de' : 'en')
      })
      .catch(() => {
        // Fallback: try Accept-Language header via a simpler service
        fetch('https://api.country.is/', { signal: AbortSignal ? undefined : undefined })
          .then(r => r.json())
          .then(data => setLang(DACH.includes(data.country) ? 'de' : 'en'))
          .catch(() => setLang('en'))
      })

    return () => { clearTimeout(timer); controller.abort() }
  }, [])

  const setLanguage = (l) => {
    setLang(l)
    localStorage.setItem(STORAGE_KEY, l)
  }

  const toggleLang = () => setLanguage(lang === 'de' ? 'en' : 'de')

  // Use English while detecting to avoid layout jump
  const t = translations[lang] ?? translations['en']

  return (
    <LanguageContext.Provider value={{ lang: lang ?? 'en', toggleLang, setLanguage, t, detecting: lang === null }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
