import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,Route,
  RouterProvider,createRoutesFromElements
} from "react-router-dom";
import Intro from './Components/Intro/Intro.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Works from './Components/Works/Works.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Resume from './Components/myProjects/Resume.jsx';

const router = createBrowserRouter([
  {
    path: "/MyPortfolio/",
    element: <App/>,
    children:[
      {
        path: "/MyPortfolio/",
        element: <Intro/>,
      },
      {
        path: "/MyPortfolio/about",
        element: <Skills/>,
      },
      ,
      {
        path: "/MyPortfolio/works",
        element: <Works/>,
      },
      {
        path: '/MyPortfolio/resume',
        element: <Resume/>
      },
      {
        path: "/MyPortfolio/contact",
        element: <Contact/>
      },
      {
        path: "/MyPortfolio/hireMe",
        element: <Contact/>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
