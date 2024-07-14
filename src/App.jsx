import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Profile from './components/profile'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <div className='font-jbmono '>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
