import React from 'react'
import './Navbar.css'
import {AnimatePresence, motion, useScroll} from "framer-motion";

const Navbar = ({scrollPosition}) => {
  return (
    <AnimatePresence>
        {
            scrollPosition < 50 &&
            <motion.nav
                key={'navbar'}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: {duration: 0.5, ease: 'easeIn'}}}
                exit={{ y: -200, opacity: 0 }}
                className={'navbar'}>
                <a className={'flex-align-center'} href={'#welcome'}><img className={'nav-profile-img'} src={'/profile.png'} alt={'profile'}/></a>
                <div className={'nav-links'}>
                    <a className={'nav-link'} href={'#about'} >About</a>
                    <a className={'nav-link'} href={'#experience'} >Experience</a>
                    <a className={'nav-link'} href={'#projects'} >Projects</a>
                    <a className={'nav-link'} href={'#contact'} >Contact</a>
                </div>
            </motion.nav>
        }
    </AnimatePresence>
  )
}

export default Navbar
