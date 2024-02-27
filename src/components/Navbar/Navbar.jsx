import React from 'react'
import './Navbar.css'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={'navbar'}>
        <img className={'nav-profile-img'} src={'/profile.png'} alt={'profile'}/>
      <div className={'nav-links'}>
        <NavLink className={'nav-link'} to={'#about'} >About</NavLink>
        <NavLink className={'nav-link'} to={'#experience'} >Experience</NavLink>
        <NavLink className={'nav-link'} to={'#projects'} >Projects</NavLink>
        <NavLink className={'nav-link'} to={'#contact'} >Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
