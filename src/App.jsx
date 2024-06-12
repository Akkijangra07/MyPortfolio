import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import MyProjects from './Components/myProjects/Resume'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      
      
    </>
  )
}

export default App
