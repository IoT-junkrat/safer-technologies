import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import styles from '../style'

const Stats = () => {
  const { t } = useLanguage()
  const stats = t.stats

  return (
    <section id='stats' className={`grid grid-cols-2 sm:grid-cols-4 sm:mb-20 mb-6 gap-4 w-full`}>
      {stats.map((stat, i) => (
        <div
          key={stat.value + stat.title}
          className={`flex justify-start items-center flex-row px-4 py-2 ${
            i !== stats.length - 1 ? 'sm:border-r sm:border-r-[#3F3E45]' : ''
          }`}
        >
          <h4 className='font-poppins font-semibold text-[28px] sm:text-[36px] leading-tight text-white whitespace-nowrap'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal text-[11px] sm:text-[13px] leading-[16px] sm:leading-[18px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
