import React, { useState } from 'react'
import './navbar.css'
import logo from '/logo.png'
import {Link,NavLink} from 'react-router-dom'
import Intro from '../Intro/Intro'


function Navbar() {
    const [showMenu , setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        
        <img src={logo} alt="" className='logo'/>
        <div className="desktopMenu">
            <NavLink  to="/"  className='desktopMenuListItem'>Home</NavLink>
            <NavLink  to="/MyPortfolio/about" className='desktopMenuListItem'>About</NavLink>
            <NavLink  to="/MyPortfolio/works" className='desktopMenuListItem'>Portfolio</NavLink>
            <NavLink  to='/MyPortfolio/resume' className='desktopMenuListItem'>Resume</NavLink>
        </div>
        <Link to='/contact'><button className="desktopMenuBtn"><i className="fa-regular fa-message" style={{marginRight:"0.5rem"}}></i>Contact me</button></Link>
        <button className='mobMenu' onClick={()=>setShowMenu(!showMenu)}><i className="fa-solid fa-bars"></i></button>
        <div className="navMenu" style={{display: showMenu?"flex":"none"}}>
            <NavLink activeClass='active' to="/"  className='listItem' onClick={()=>setShowMenu(false)}>Home</NavLink>
            <NavLink activeClass='active' to="/about" className='listItem' onClick={()=>setShowMenu(false)}>About</NavLink>
            <NavLink activeClass='active' to="/resume" className='listItem' onClick={()=>setShowMenu(false)}>Resume</NavLink>
            <NavLink activeClass='active' to="/works" className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</NavLink>
            <NavLink activeClass='active' to="/contact" className='listItem' onClick={()=>setShowMenu(false)}>Contact</NavLink>

        </div>
    </nav>
  )
}

export default Navbar

