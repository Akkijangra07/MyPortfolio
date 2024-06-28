import React from 'react'
import './resume.css'
import corporate from '/corporate.jpg'
import resume from '/portfolioResume.pdf'

function Resume() {
  return (
    <>
      <section className='resume'>
        <div className="image-container">
          <img src={corporate} alt="Sample Image"/>
          <div className="overlay">
            <i className="fa-regular fa-user" id='userIcon'></i>
            <h1>Ankit</h1>
          </div>
        </div>

        <div className="container">
          <div className="container1">
            <h1 className='resumeHeading'>GET IN TOUCH!</h1>
            
            <br />
            <p className='resumeParas'>Mobile: 8684818038</p>
            <p className='resumeParas'>Email: ankitjangra847@gmail.com</p>
            <br />
            <hr />
            <br />

            <h1 className='resumeHeading'>PERSONAL DETAILS</h1>
            <ul>
              <li><p className='resumeParas'>Current location: Sector-46,Chandigarh</p></li>
              <li><p className='resumeParas'>Date of birth : Nov 22, 2002</p></li>
              <li><p className='resumeParas'>Gender: Male</p></li>
              <li><p className='resumeParas'>Father's Name: Mr.Rajesh Kumar</p></li>
              <li><p className='resumeParas'>Nationality: Indian</p></li>
            </ul> 
            <br />
            <hr />
            <br />

            <h1 className='resumeHeading'>SKILLS</h1>
            <ul>
              <li><p className='resumeParas'>HTML/CSS</p></li>
              <li><p className='resumeParas'>Bootstrap</p></li>
              <li><p className='resumeParas'>JavaScript</p></li>
              <li><p className='resumeParas'>ReactJs</p></li>
              <li><p className='resumeParas'>Git & Github</p></li>
              <li><p className='resumeParas'>Knowledge of Canva</p></li>
            </ul>
            <br />
            <hr />
            <br />

            <h1 className='resumeHeading'>LANGUAGES KNOWN</h1>
            <ul>
              <li><p className='resumeParas'>Hindi</p></li>
              <li><p className='resumeParas'>English</p></li>
            </ul>
            <br />
            <hr />
            <br />

            <h1 className='resumeHeading'>PROFILE SUMMARY</h1>
            <ul>
              <li><p className='resumeParas'>Seeking an entery-level opportunity with <br /> an esteemed organization where I can <br />utilize my skills and enhance learning in <br /> the filed of work.Capable of mastering <br />new technologies and preparing myself <br />to become a full stack web developer,and <br /> I've completed the front end part,which is <br />why I'm Focusing on front end roles in my <br />job search.</p></li>
              
            </ul>
            <br />
            <hr />
            <br />

            <h1 className='resumeHeading'>TECHNOLOGIES WHICH <br /> I WILL STUDY NEXT</h1>
            <ul>
              <li><p className='resumeParas'>Server-Side Languages</p></li>
              <li><p className='resumeParas'>Databases</p></li>
              <li><p className='resumeParas'>APIs</p></li>
              <li><p className='resumeParas'>Authentication & Authorization</p></li>
            </ul>
            <br />
            <hr />
            <br />
          </div>


          <div className="container2">
            <h1 className='resumeHeading'>EDUCATION</h1>
              <ul>
                <h4 style={{fontWeight:"300",marginBottom:"0.4rem"}}>Graduation</h4>
                
                <li><p className='resumeParas'>Course : BCA</p></li>
                <li><p className='resumeParas'>University : Guru Jambheshwar University of Science & Technology, Hisar(Haryana)</p></li>
                <li><p className='resumeParas'>Year of passing : Appearing(final year)</p></li>
                <br />
                <h4 style={{fontWeight:"300",marginBottom:"0.4rem"}}>XII</h4>
                <li><p className='resumeParas'>Board name : CBSE</p></li>
                <li><p className='resumeParas'>Medium : English</p></li>
                <li><p className='resumeParas'>Year of passing : 2021</p></li>
                <li><p className='resumeParas'>Percentage : 84%</p></li>
                <br />
                <h4 style={{fontWeight:"300",marginBottom:"0.4rem"}}>X</h4>
                <li><p className='resumeParas'>Board name : CBSE</p></li>
                <li><p className='resumeParas'>Medium : English</p></li>
                <li><p className='resumeParas'>Year of passing : 2019</p></li>
                <li><p className='resumeParas'>Percentage : 67%</p></li>
              </ul>
              <br />
              <hr />
              <br />

              <h1 className='resumeHeading'>INTERNSHIPS</h1>
            <ul>
              <li><p className='resumeParas'>Training of 6 months in 9iTechnologies(Chandigarh)   -From  May 2023 to Nov 2023</p></li>
            </ul>
            <br />
            <hr />
            <br />

            <h1 className='resumeHeading'>PROJECTS</h1>
            <ul><p style={{fontWeight:"500",marginBottom:"0.4rem"}}>School Website</p>
              <li><p className='resumeParas'>Developed a user-friendly website for a local school, enhancing communication <br />and engagement for students, parents, and staff.</p></li>
              <br />
              <p style={{fontWeight:"500",marginBottom:"0.4rem"}}>Portfolio</p>
              <li><p className='resumeParas'> This site is designed to showcase my skills, projects, and journey as a web developer. <br />Built using modern web technologies including HTML, CSS, JavaScript, and React.js</p></li>
              <br />
              <p style={{fontWeight:"500",marginBottom:"0.4rem"}}>Some other Mini projects like:-</p>
              <li><p className='resumeParas'>Rest Countries project to dynamically fetch and display detailed information about <br />countries using the REST Countries API.</p></li>
              <li><p className='resumeParas'>Random Password Generator</p></li>
              <li><p className='resumeParas'>Color Picker</p></li>
              <li><p className='resumeParas'>ToDo Box</p></li>
              <li><p className='resumeParas'>Quiz Project</p></li>
            </ul>
            <br />
          </div>
        </div>
        <a href={resume} download="Ankit's Resume" target='_blank'><button className='cv'>Download CV</button></a>
      </section>
    </>
  )
}

export default Resume
