import React from 'react'
import styles from '../style'
import { useLanguage } from '../context/LanguageContext'

const PrivacyPolicy = () => {
  const { t } = useLanguage()
  const p = t.privacy

  return (
    <section id='privacy' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex flex-col min-w-0 w-full'>
        <h3 className={styles.heading2}>{p.heading}</h3>
        <p className={`${styles.paragraph} mt-2 text-[14px]`}>{p.updated}</p>

        <div className='flex flex-col gap-6 mt-8'>
          {p.sections.map((s) => (
            <div key={s.heading}>
              <h4 className='font-poppins font-semibold text-white text-[18px] leading-[26px] mb-2 break-words'>
                {s.heading}
              </h4>
              <p className={`${styles.paragraph} max-w-[760px]`}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
