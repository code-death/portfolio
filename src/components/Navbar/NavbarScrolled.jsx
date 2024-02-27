import React from 'react'
import {NavLink} from "react-router-dom";
import {AnimatePresence, motion, useScroll} from "framer-motion";

const NavbarScrolled = ({scrollPosition}) => {
    return (
            <AnimatePresence>
                {
                    scrollPosition >= 40 &&
                    <motion.nav
                        key={'navbar-scrolled'}
                        whileHover={{opacity: 1}}
                        initial={{ y: -200, opacity: 0, scale: 0.5}}
                        animate={{ y: 0, opacity: 0.6, scale: 1, transition: {duration: 0.3, ease: "easeInOut"} }}
                        exit={{ y: -200, opacity: 0, scale: 0.5, transition: {duration: 0.3, ease: "easeInOut"} }}
                        className={'navbar-scrolled'}>
                        <a className={'flex-align-center'} href={'#welcome'}><img className={'nav-profile-img'} src={'/profile.png'} alt={'profile'}/></a>
                        <div className={'nav-links-scrolled'}>
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

export default NavbarScrolled
