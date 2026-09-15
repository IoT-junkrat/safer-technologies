import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { shield, star, send } from '../assets'
import styles from '../style'

const icons = { shield, star, send }

const accentClasses = {
  cyan:   { bg: 'bg-[rgba(0,246,255,0.12)]',   border: 'border-[rgba(0,246,255,0.2)]' },
  blue:   { bg: 'bg-[rgba(99,102,241,0.12)]',   border: 'border-[rgba(99,102,241,0.25)]' },
  green:  { bg: 'bg-[rgba(52,211,153,0.1)]',    border: 'border-[rgba(52,211,153,0.2)]' },
  amber:  { bg: 'bg-[rgba(251,191,36,0.1)]',    border: 'border-[rgba(251,191,36,0.2)]' },
  purple: { bg: 'bg-[rgba(192,132,252,0.1)]',   border: 'border-[rgba(192,132,252,0.2)]' },
  orange: { bg: 'bg-[rgba(251,146,60,0.1)]',    border: 'border-[rgba(251,146,60,0.2)]' },
}

// Map feature ids to icon keys for display
const iconForFeature = { 'feature-1': shield, 'feature-2': shield, 'feature-3': star, 'feature-4': send, 'feature-5': star, 'feature-6': send }

const ServiceCard = ({ id, title, content, accent }) => {
  const cls = accentClasses[accent] || accentClasses.cyan
  const icon = iconForFeature[id] || shield
  return (
    <div className={`flex flex-col p-6 rounded-[20px] border ${cls.border} service-card group cursor-default transition-all duration-300`}>
      <div className={`w-[56px] h-[56px] rounded-[14px] ${cls.bg} flex justify-center items-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
        <img src={icon} alt={title} className='w-[50%] h-[50%] object-contain' />
      </div>
      <h4 className='font-poppins font-semibold text-white text-[17px] leading-[22px] mb-3'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[15px] leading-[26px]'>
        {content}
      </p>
    </div>
  )
}

const PillarHeader = ({ label, title, description, labelColor }) => (
  <div className='flex md:flex-row flex-col justify-between items-start mb-8 gap-4'>
    <div>
      <p className={`font-poppins font-semibold text-[13px] uppercase tracking-[3px] mb-2 ${labelColor}`}>
        {label}
      </p>
      <h3 className='font-poppins font-semibold text-white xs:text-[32px] text-[26px] xs:leading-[44px] leading-[36px]'>
        {title}
      </h3>
    </div>
    <p className={`${styles.paragraph} max-w-[380px] md:text-right text-[15px]`}>
      {description}
    </p>
  </div>
)

const Business = () => {
  const { t } = useLanguage()
  const b = t.business
  const secFeatures  = t.features.filter(f => f.category === 'security')
  const autoFeatures = t.features.filter(f => f.category === 'automation')

  return (
    <section id='features' className={`${styles.paddingY} flex flex-col`}>

      {/* Section intro */}
      <div className='mb-14'>
        <p className='font-poppins font-semibold text-[14px] text-secondary uppercase tracking-[3px] mb-3'>
          {b.sectionLabel}
        </p>
        <h2 className={styles.heading2}>
          {b.heading.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br className='sm:block hidden' />}</span>
          ))}
        </h2>
        <p className={`${styles.paragraph} max-w-[560px] mt-4`}>
          {b.description}
        </p>
      </div>

      {/* Pillar 1 */}
      <div className='mb-4 pb-4 border-b border-[#3F3E45]'>
        <PillarHeader
          label={b.pillar1Label}
          title={b.pillar1Title}
          description={b.pillar1Desc}
          labelColor='text-secondary'
        />
        <div className='grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-5'>
          {secFeatures.map(f => <ServiceCard key={f.id} {...f} />)}
        </div>
      </div>

      {/* Pillar 2 */}
      <div className='mt-10'>
        <PillarHeader
          label={b.pillar2Label}
          title={b.pillar2Title}
          description={b.pillar2Desc}
          labelColor='text-[#fbbf24]'
        />
        <div className='grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-5'>
          {autoFeatures.map(f => <ServiceCard key={f.id} {...f} />)}
        </div>
      </div>
    </section>
  )
}

export default Business
