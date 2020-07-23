import React from 'react'
import { Link } from 'react-router-dom'
import cm from '../../images/coolmovies.png'
import shoepro from '../../images/shoepro.png'
import aptitude from '../../images/aptitude.png'
import portfolio from '../../images/portfolio.png'
import hlp from '../../images/hlp.png'
import salestracker from '../../images/salestracker.png'


function Projects() {
  return (
    <section className="projects">
      <div className="container3">
        <h2 className="project-heading">
          <span className="red">__</span>things i have built<span className="red">...</span></h2>
        <div className="project">
          <div className="project-name">Portfolio</div>
          <div className="project-img-wrap">
            <img src={portfolio} alt="" className="project-img"/>
          </div>
        </div>
        <Link to="/"  className="visit">Visit Website</Link>
        <div className="project">
          <div className="project-name">CoolMovies</div>
          <div className="project-img-wrap">
            <img src={cm} alt="" className="project-img"/>
          </div>
        </div>
        <a href="https://coolmovies.netlify.com" target="_blank" rel="noopener noreferrer" className="visit">Visit Website</a>
        <div className="project">
          <div className="project-name">Shoepro</div>
          <div className="project-img-wrap">
            <img src={shoepro} alt="" className="project-img"/>
          </div>
        </div>
        <a href="https://shoepro.netlify.com" target="_blank" rel="noopener noreferrer" className="visit">Visit Website</a>
        <div className="project">
          <div className="project-name">Aptitude Test</div>
          <div className="project-img-wrap">
            <img src={aptitude} alt="" className="project-img"/>
          </div>
        </div>
        <a href="https://aptitudetest.netlify.com" target="_blank" rel="noopener noreferrer" className="visit">Visit Website</a>
        <div className="project">
          <div className="project-name">Sales Tracker</div>
          <div className="project-img-wrap">
            <img src={salestracker} alt="" className="project-img"/>
          </div>
          
        </div>
        <a href="https://salestracker.netlify.com" target="_blank" rel="noopener noreferrer" className="visit">Visit Website</a>
        <div className="project">
          <div className="project-name">Huddle page</div>
          <div className="project-img-wrap">
            <img src={hlp} alt="" className="project-img"/>
          </div>
         
        </div>
        <a href="https://hlp.netlify.com" target="_blank" rel="noopener noreferrer" className="visit">Visit Website</a>
      </div>
    </section>
  )
}

export default Projects
