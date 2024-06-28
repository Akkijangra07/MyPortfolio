import React from 'react'
import "./canva.css"
import canva1 from "/canva1.png"
import canva2 from "/canva2.png"

function Canva() {
    
  return (
    <>
        <div className="section">
            <div className="upper">
                <h1 className="canvaHeading">Canva</h1>
                <p className="canvaDesc">Welcome to my collection of Canva designs. Here, you’ll find few examples of visually striking and thoughtfully crafted designs that highlight my creative skills and versatility.</p>
            </div>
            <h1 className='canvaHeading2'>Here're few examples highlighting my Canva skills:</h1>
            <div className="imgContainer">
                <div className="box">
                    <img src={canva1} alt="" />
                    <a href={canva1} download="canva image"><button className='btn download'>Download PNG</button></a>
                </div>

                <div className="box">
                    <img src={canva2} alt="" />
                    <a href={canva2} download="canva image2"><button className='btn download'>Download PNG</button></a>

                </div>
            </div>
        </div>

    </>
  )
}

export default Canva
