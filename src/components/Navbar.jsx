import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

const navIds = ['home', 'features', 'experience', 'industries', 'contact', 'impressum']

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { t } = useLanguage()

  const navLinks = navIds.map(id => ({ id, title: t.nav[id] }))

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='SAFER Technologies' className='w-[150px] h-[75px]' />

      {/* Desktop links */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Language toggle — desktop */}
      <div className='sm:flex hidden'>
        <LanguageToggle />
      </div>

      {/* Mobile hamburger */}
      <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
        <LanguageToggle />
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(prev => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
