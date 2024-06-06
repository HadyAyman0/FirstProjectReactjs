import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StickyNavbar } from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout/Layout.jsx'
function App() {

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {index:true, element:<Home/>},
      {path:"about", element: <About/>},
      {path:"portfolio", element: <Portfolio/>},
      {path:"contact" , element:<Contact/>},
    ]
  }
])
  return (
    
   <>
    <RouterProvider router={routes}></RouterProvider>
   </>
      
  )
}

export default App
