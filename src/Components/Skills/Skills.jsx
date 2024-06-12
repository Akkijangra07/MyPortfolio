import React from 'react'
import './skills.css'
import pic3 from '/pic3.jpg'
import pic5 from '/pic5.png'
import pic4 from '/pic4.jpg'

function Skills() {
  return (
    <>
        <section className="skills">
            <span className="skillTitle">Front End Developer</span>
            <span className="skillDesc">Seasoned and independent Front End Developer with 1 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development.As a front-end developer, I craft visually stunning and highly interactive user interfaces with <b>HTML, CSS,Bootstrap</b> and <b>JavaScript</b>, leveraging the power of <b>ReactJs</b> to bring engaging digital experiences to life.</span>
            <div className="skillBars">
                <div className="skillBar" id='skillBar1'>
                    <img src={pic5} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p className='skillBarText'>I specialize in crafting intuitive and engaging user experiences through meticulous UI design and comprehensive UX research, transforming complex problems into seamless, user-friendly solutions.</p>
                    </div>
                </div>

                <div className="skillBar" id='skillBar2'>
                    <img src={pic4} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p className='skillBarText'>I create visually compelling and highly functional websites, focusing on user-centric design principles to ensure an optimal user experience and effective digital presence.</p>
                    </div>
                </div>

                <div className="skillBar" id='skillBar3'>
                    <img src={pic3} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p className='skillBarText'>I design intuitive and visually appealing mobile apps, prioritizing seamless user experiences and innovative interfaces to enhance user engagement and satisfaction.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills
