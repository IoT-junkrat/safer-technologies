import { useLanguage } from '../context/LanguageContext'
import styles from '../style'

const pillarStyle = {
  security: {
    iconBg:     'bg-[rgba(0,246,255,0.08)] border-[rgba(0,246,255,0.15)]',
    tagBg:      'bg-[rgba(0,246,255,0.06)] border-[rgba(0,246,255,0.18)]',
    tagText:    'text-secondary',
    badge:      'bg-[rgba(0,246,255,0.08)] border-[rgba(0,246,255,0.2)] text-[#00f6ff]',
    badgeLabel: '🔒 Cybersecurity',
    badgeLabelDE: '🔒 Cybersicherheit',
  },
  automation: {
    iconBg:     'bg-[rgba(251,191,36,0.08)] border-[rgba(251,191,36,0.2)]',
    tagBg:      'bg-[rgba(251,191,36,0.06)] border-[rgba(251,191,36,0.2)]',
    tagText:    'text-[#fbbf24]',
    badge:      'bg-[rgba(251,191,36,0.08)] border-[rgba(251,191,36,0.25)] text-[#fbbf24]',
    badgeLabel: '⚡ Automation & Data',
    badgeLabelDE: '⚡ Automatisierung & Daten',
  },
}

const IndustryCard = ({ emoji, title, subtitle, description, tags, pillar, lang }) => {
  const s = pillarStyle[pillar] || pillarStyle.security
  const badge = lang === 'de' ? s.badgeLabelDE : s.badgeLabel
  return (
    <div className='flex flex-col p-8 rounded-[20px] industry-card flex-1 min-w-[280px]'>
      <div className='mb-4'>
        <span className={`font-poppins text-[11px] font-semibold px-3 py-1 rounded-full border uppercase tracking-wider ${s.badge}`}>
          {badge}
        </span>
      </div>
      <div className='flex items-center gap-4 mb-5'>
        <div className={`w-[64px] h-[64px] rounded-[18px] border flex items-center justify-center text-[28px] flex-shrink-0 ${s.iconBg}`}>
          {emoji}
        </div>
        <div>
          <h4 className='font-poppins font-semibold text-white text-[20px] leading-[26px]'>{title}</h4>
          <p className={`font-poppins font-normal text-[13px] leading-[18px] mt-0.5 ${s.tagText}`}>{subtitle}</p>
        </div>
      </div>
      <p className='font-poppins font-normal text-dimWhite text-[15px] leading-[26px] flex-1 mb-5'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {tags.map(tag => (
          <span key={tag} className={`font-poppins text-[12px] font-medium px-3 py-1 rounded-full border ${s.tagBg} ${s.tagText}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

const Testimonials = () => {
  const { t, lang } = useLanguage()
  const ind = t.industries

  return (
    <section id='industries' className={`${styles.paddingY} flex flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />

      <div className='w-full flex justify-between items-end md:flex-row flex-col sm:mb-12 mb-6 relative z-[1] gap-6'>
        <div>
          <p className='font-poppins font-semibold text-[14px] text-secondary uppercase tracking-[3px] mb-3'>
            {ind.sectionLabel}
          </p>
          <h2 className={styles.heading2}>
            {ind.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <>{' '}<br className='sm:block hidden' /></>}</span>
            ))}
          </h2>
        </div>
        <p className={`${styles.paragraph} max-w-[420px] md:text-right`}>
          {ind.description}
        </p>
      </div>

      <div className='flex flex-wrap lg:flex-nowrap gap-6 relative z-[1]'>
        {ind.cards.map(card => (
          <IndustryCard key={card.id} {...card} lang={lang} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
