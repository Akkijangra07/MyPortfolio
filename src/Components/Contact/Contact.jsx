import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import Footer from '../Footer/Footer';

function Contact() {


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_iisa256', 'template_6vgms9x', form.current, {
            publicKey: '0mZwIowxNmelTFAfD',
          })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email sent")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        }
  return (
    <>
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <p className='contactDesc'>Please fill out the form below to discuss any work opportunity.</p>
                <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your email'name='your_email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                    <input type='Submit' value="send" className="submitBtn" />
                    <div className='links'>
                        <a className='link' href="https://www.facebook.com/profile.php?id=100010891484474&mibextid=LQQJ4d"><i className="fa-brands fa-facebook"></i></a>
                        <a className='link' href="https://twitter.com/akkijangra07"><i className="fa-brands fa-square-twitter"></i></a>
                        <a className='link' href="https://www.instagram.com/akkijangra07?igsh=MTRlYjB1NWJtd2FieA%3D%3D&utm_source=qr"><i className="fa-brands fa-instagram"></i></a>
                        <a className='link' href="https://github.com/Akkijangra07"><i className="fa-brands fa-square-github"></i></a>
                    </div>

                </form>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Contact
