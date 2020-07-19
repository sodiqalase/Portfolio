import React from 'react'
import Navbar from './Navbar'
import Showcase from './Showcase'
import About from './About'
import Lang from './Lang'
import Tools from './Tools'
import Why from './Why'
import Contact from './Contact'
import Projects from './Projects'
import Availability from './Availability'

function Porfolio() {
  return (
    <main className="portfolio-main">
      <div className="portfolio-bg"></div>
      <div className="portfolio-overlay"></div>
      <Navbar />
      <Showcase />
      <About />
      <Lang />
      <Tools />
      <Projects />
      <Why />
      <Availability />
      <Contact />
      
      
    </main>
  )
}

export default Porfolio
