import React from 'react'
import styles from '../style'
import { useLanguage } from '../context/LanguageContext'

const Impressum = () => {
  const { t } = useLanguage()
  const im = t.impressum

  return (
    <section id='impressum' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col min-w-0 w-full'>
        <h3 className={styles.heading2}>{im.heading}</h3>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {im.tmgLabel}<br />
          {im.company}<br />
          {im.address.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}<br />

          {im.representedBy}<br />
          Dr. Pascal Oser<br /><br />

          {im.contact}<br />
          {im.mobileLabel} <a href='tel:4915157800439'>+49 (0)151 57800439</a><br />
          {im.emailLabel} <a href='&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;pa%73&#x63;%61%6c&#x40;%73a&#x66;%65&#x72;&#x2e;%6eetw%6f%72&#x6b;' title='pascal@safer.network'>pascal@safer.network</a><br />
          {im.contactCardLabel} <a href='https://safer.network/contact.vcf' title='Contact Card'><u>{im.contactCardText}</u></a><br /><br />

          {im.vatLabel} {im.vatNumber}<br />
          {im.registerLabel} {im.registerNumber}<br />
        </p>
      </div>
    </section>
  )
}

export default Impressum
