import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const SEO = {
  en: {
    title:       'SAFER Technologies – Cybersecurity & Automation Consulting | safer.network',
    description: 'SAFER Technologies UG – Expert cybersecurity consulting (IoT, IT, GRC, IEC 62443, NIS2, TISAX) and data-driven automation including large-scale web crawling and business intelligence. Serving pharmaceutical, machinery and automotive industries from Germany.',
    ogTitle:     'SAFER Technologies – Cybersecurity & Automation Consulting',
    ogDesc:      'Expert IoT/IT cybersecurity, GRC compliance and web crawling / data intelligence from Germany.',
  },
  de: {
    title:       'SAFER Technologies – Cybersicherheit & Automatisierung | safer.network',
    description: 'SAFER Technologies UG – Experten für Cybersicherheit (IoT, IT, GRC, IEC 62443, NIS2, TISAX) und datengetriebene Automatisierung mit Web-Crawling und Business Intelligence. Kunden aus Pharma, Maschinenbau und Automobilbranche.',
    ogTitle:     'SAFER Technologies – Cybersicherheit & Automatisierung',
    ogDesc:      'Experten für IoT/IT-Sicherheit, GRC-Compliance und Web-Crawling / Datenanalyse aus Deutschland.',
  },
}

const setMeta = (name, content, prop = false) => {
  const attr   = prop ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const SEOMeta = () => {
  const { lang } = useLanguage()
  const seo = SEO[lang] ?? SEO.en

  useEffect(() => {
    document.title = seo.title
    document.documentElement.lang = lang

    setMeta('description', seo.description)
    setMeta('og:title',       seo.ogTitle, true)
    setMeta('og:description', seo.ogDesc,  true)
    setMeta('twitter:title',       seo.ogTitle)
    setMeta('twitter:description', seo.ogDesc)
  }, [lang, seo])

  return null
}

export default SEOMeta
