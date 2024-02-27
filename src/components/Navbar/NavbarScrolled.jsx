import React from 'react'
import {NavLink} from "react-router-dom";

const NavbarScrolled = () => {
    return (
            <nav className={'navbar-scrolled'}>
                <img className={'nav-profile-img'} src={'/profile.png'} alt={'profile'}/>
                <div className={'nav-links-scrolled'}>
                    <NavLink className={'nav-link'} to={'#about'} >About</NavLink>
                    <NavLink className={'nav-link'} to={'#experience'} >Experience</NavLink>
                    <NavLink className={'nav-link'} to={'#projects'} >Projects</NavLink>
                    <NavLink className={'nav-link'} to={'#contact'} >Contact</NavLink>
                </div>
            </nav>
    )
}

export default NavbarScrolled
