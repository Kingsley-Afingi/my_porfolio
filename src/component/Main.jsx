import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../layout/Hero'
import Skills from '../layout/Skills'
import Projects from '../layout/Projects'
import Testimonials from '../layout/Testimonials'
import Contact from '../layout/Contact'
import Footer from '../layout/Footer'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main