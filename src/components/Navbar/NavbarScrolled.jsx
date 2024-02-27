import React from 'react'
import {NavLink} from "react-router-dom";

const NavbarScrolled = () => {
    return (
            <nav className={'navbar-scrolled'}>
                <a className={'flex-align-center'} href={'#welcome'}><img className={'nav-profile-img'} src={'/profile.png'} alt={'profile'}/></a>
                <div className={'nav-links-scrolled'}>
                    <a className={'nav-link'} href={'#about'} >About</a>
                    <a className={'nav-link'} href={'#experience'} >Experience</a>
                    <a className={'nav-link'} href={'#projects'} >Projects</a>
                    <a className={'nav-link'} href={'#contact'} >Contact</a>
                </div>
            </nav>
    )
}

export default NavbarScrolled
