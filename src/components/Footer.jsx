import styles from '../style'
import { logo } from '../assets'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-[1] flex flex-col justify-start mr-10'>
          <img src={logo} alt='SAFER Technologies' className='object-left w-[400px] h-[200px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            Empowering Digital Resilience: Elevate Your Security with Our Expertise.
          </p>
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col gap-3 pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          {t.footer.copyright}
        </p>
        <a
          href='#privacy'
          className='font-poppins font-normal text-[14px] leading-[21px] text-dimWhite underline hover:text-white transition-colors duration-200'
        >
          {t.cookie.moreInfo}
        </a>
      </div>
    </section>
  )
}

export default Footer
