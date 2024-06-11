import React from 'react'
import styles from '../style'

const impressum = () => {
  return (
    <section id='impressum' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h3 className={styles.heading2}>Impressum</h3>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Information according to § 5 DDG: <br/>
          SAFER Technologies UG (haftungsbeschränkt)<br/>
          Hauptstraße 35a<br/>
          77839, Lichtenau, Germany <br/><br/>

          Represented by:  <br/>
          Dr. Pascal Oser<br/><br/>

          Contact: <br/>
          Mobile: <a href="tel: 4915157800439"> +49 (0)151 57800439</a><br/>
          E-Mail: <a href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;pa%73&#x63;%61%6c&#x40;%73a&#x66;%65&#x72;&#x2e;%6eetw%6f%72&#x6b;" title="&#x70;asc&#x61;l@safe&#x72;.ne&#x74;&#x77;or&#x6b;">&#x70;asc&#x61;l@safe&#x72;.ne&#x74;&#x77;or&#x6b;</a><br/>
	  Contact Card: <a href="https://safer.network/contact.vcf" title="Contact Card"><u>Press here</u></a><br/><br/>

          USt-IdNr.: DE 365778955 <br/>
          Trade Register: Mannheim, HRB 749608<br/>
        </p>
      </div>
    </section>
  )
}

export default impressum
