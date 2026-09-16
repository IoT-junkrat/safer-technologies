import React from 'react'
import styles from '../style'
import { useLanguage } from '../context/LanguageContext'

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary'

const Button = ({ label }) => (
  <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] ${focusRing}`}>
    <a href='&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;%69&#x6e;f&#x6f;&#x40;%73%61%66e%72&#x2e;n%65t%77or%6b' title='info@safer.network'>
      {label}
    </a>
  </button>
)

const ButtonVCard = ({ label }) => (
  <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] ${focusRing}`}>
    <a href='https://safer.network/contact.vcf'>{label}</a>
  </button>
)

const CTA = () => {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section id='contact' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col min-w-0 w-full'>
        <h2 className={styles.heading2}>{c.heading}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{c.body}</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-6 sm:mt-0`}>
        <Button label={c.email} />
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-4 sm:mt-0`}>
        <ButtonVCard label={c.vcard} />
      </div>
    </section>
  )
}

export default CTA
