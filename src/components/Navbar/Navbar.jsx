import React from 'react'
import './Navbar.css'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={'navbar'}>
        <a href={'#welcome'}><img className={'nav-profile-img'} src={'/profile.png'} alt={'profile'}/></a>
      <div className={'nav-links'}>
        <a className={'nav-link'} href={'#about'} >About</a>
        <a className={'nav-link'} href={'#experience'} >Experience</a>
        <a className={'nav-link'} href={'#projects'} >Projects</a>
        <a className={'nav-link'} href={'#contact'} >Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
