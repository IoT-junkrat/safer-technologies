import styles from '../style'
import { robot } from '../assets'
import GetStarted from './GetStarted'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>

      {/* Left content */}
      <div className={`flex-1 md:flex-[1.12] ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        {/* Badge */}
        <div className='flex flex-row items-center py-[8px] px-4 bg-discount-gradient rounded-[10px] mb-6'>
          <p className='font-poppins font-medium text-[14px] leading-[22px]'>
            <span className='text-white'>{h.badge}</span>
            <span className='text-dimWhite'>{h.badgeSeparator}</span>
            <span className='text-gradient font-semibold'>{h.badgeGradient}</span>
          </p>
        </div>

        {/* Headline */}
        <h1 className='w-full'>
          <div className='flex flex-row justify-between items-center w-full'>
            <span className='flex-1 min-w-0 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] break-words'>
              {h.headline1}<br className='sm:block hidden' />{' '}
              <span className='text-gradient'>{h.headlineGrad}</span>
            </span>
            <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted />
            </div>
          </div>
          <span className='block font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full break-words'>
            {h.headline2}
          </span>
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {h.body}
        </p>

        {/* Two-pillar pills */}
        <div className='flex flex-col gap-2 mt-6'>
          <div className='flex flex-row flex-wrap gap-2'>
            {h.pills.security.map(p => (
              <span key={p} className='font-poppins text-[13px] font-medium text-[#00f6ff] px-3 py-1 rounded-full border border-[rgba(0,246,255,0.25)] bg-[rgba(0,246,255,0.06)]'>
                {p}
              </span>
            ))}
            <span className='font-poppins text-[11px] font-semibold text-[rgba(0,246,255,0.5)] px-2 py-1 self-center uppercase tracking-widest'>
              {h.pills.secLabel}
            </span>
          </div>
          <div className='flex flex-row flex-wrap gap-2'>
            {h.pills.automation.map(p => (
              <span key={p} className='font-poppins text-[13px] font-medium text-[#fbbf24] px-3 py-1 rounded-full border border-[rgba(251,191,36,0.25)] bg-[rgba(251,191,36,0.06)]'>
                {p}
              </span>
            ))}
            <span className='font-poppins text-[11px] font-semibold text-[rgba(251,191,36,0.5)] px-2 py-1 self-center uppercase tracking-widest'>
              {h.pills.autoLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Right visual */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative xl:px-0 sm:px-16 px-6 md:pl-0`}>
        <img
          src={robot}
          alt='cybersecurity and automation'
          fetchpriority='high'
          decoding='async'
          className='w-[100%] h-[100%] relative z-[5] rounded-2xl opacity-80 brightness-110 object-cover'
          style={{ maxHeight: '520px' }}
        />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
