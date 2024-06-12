import React from 'react'
import './work.css'
import restCountries from "/restCountries.jpg"
import school from '/school.jpg'
import colorPicker from '/colorPicker.jpeg'
import { Link } from 'react-scroll'
import pwdGenerator from "/pwdGenerator.png"
import quiz from '/quiz.jpg'


function Works() {
    
  return (
    <>
        <section className="works">
            <span className="workTitle" >My Portfolio</span>
            <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="workImgs">
                <div className="card" >
                    <a href=" https://akkijangra07.github.io/sgsschool.github.io/" >
                    <img src={school} className="workImg" alt="..." />
                     <div className="card-body">
                     
                     <h3 className="card-title">School Website</h3>
                     <hr />
                     <p className="card-text">Developed a user-friendly website for a local school, enhancing communication and engagement for students, parents, and staff.</p>
                     </div>
                    </a>
                </div>

                <div className="card" >
                    <a href="" >
                    <img src={restCountries} className="workImg" alt="..." />
                     <div className="card-body">
                     
                     <h3 className="card-title">Rest Countries</h3>
                     <hr />
                     <p className="card-text">Implemented a React.js application to dynamically fetch and display detailed information about countries using the REST Countries API.</p>
                     </div>
                    </a>
                </div>
                <div className="card" >
                    <a href="https://akkijangra07.github.io/Color-Picker/" >
                    <img src={colorPicker} className="workImg" alt="..." />
                     <div className="card-body">
                     {/* <hr /> */}
                     <h3 className="card-title">Color Picker</h3>
                     <hr />
                     <p className="card-text">I developed a color picker project using JavaScript, which allows users to easily select different random Hex values.</p>
                     </div>
                    </a>
                </div>
                <div className="card" >
                    <a href="https://akkijangra07.github.io/Random-Password-Generator/" >
                    <img src={pwdGenerator} className="workImg" alt="..." />
                     <div className="card-body">
                     {/* <hr /> */}
                     <h3 className="card-title">Random Password Generator</h3>
                     <hr />
                     <p className="card-text">Develop a customizable random password generator using JavaScript, featuring adjustable length and characters.</p>
                     </div>
                    </a>
                </div>
                <div className="card" >
                    <a href="https://akkijangra07.github.io/Quiz-Project/" >
                    <img src={quiz} className="workImg" alt="..." />
                     <div className="card-body">
                     {/* <hr /> */}
                     <h3 className="card-title">Quiz Project</h3>
                     <hr />
                     <p className="card-text">Develop a dynamic quiz application using JavaScript, featuring interactive multiple-choice questions.</p>
                     </div>
                    </a>
                </div>
                

               
                    

            </div>
            
        </section>
    </>
  )
}

export default Works
