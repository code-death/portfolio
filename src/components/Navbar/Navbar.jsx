import React from 'react'
import './Navbar.css'
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={'navbar'}>
        <img className={'nav-profile-img'} src={'/profile.png'} alt={'profile'}/>
      <div className={'nav-links'}>
        <NavLink to={'#about'} >About</NavLink>
        <NavLink to={'#experience'} >Experience</NavLink>
        <NavLink to={'#projects'} >Projects</NavLink>
        <NavLink to={'#contact'} >Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
