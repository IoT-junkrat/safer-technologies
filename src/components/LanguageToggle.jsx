import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const LanguageToggle = () => {
  const { lang, setLanguage } = useLanguage()

  return (
    <div className='flex items-center gap-1 ml-6 flex-shrink-0'>
      <button
        onClick={() => setLanguage('de')}
        className={`font-poppins font-semibold text-[13px] px-2.5 py-1 rounded-[6px] cursor-pointer transition-all duration-200 ${
          lang === 'de'
            ? 'bg-[rgba(0,246,255,0.15)] text-secondary border border-[rgba(0,246,255,0.35)]'
            : 'text-dimWhite border border-transparent hover:text-white'
        }`}
      >
        DE
      </button>
      <span className='text-[#3F3E45] text-[12px] select-none'>|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`font-poppins font-semibold text-[13px] px-2.5 py-1 rounded-[6px] cursor-pointer transition-all duration-200 ${
          lang === 'en'
            ? 'bg-[rgba(0,246,255,0.15)] text-secondary border border-[rgba(0,246,255,0.35)]'
            : 'text-dimWhite border border-transparent hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageToggle
