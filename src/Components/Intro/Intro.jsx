import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import me2 from '/me2.jpeg'


function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="introname">Ankit</span><br />a Web Developer</span>
            <p className="introPara">I am a skilled and passionate Web Developer with experience in creating<br /> visually appealing and user-friendly websites.</p>
            <Link to='/contact'><button className='introBtn'><i className="fa-solid fa-briefcase" id='briefcase' style={{marginRight:"0.5rem",color:"black"}}></i>Hire me</button></Link>
        </div>
        <img src={me2} alt="" className='introImg'/>
    </section>
  )
}

export default Intro
