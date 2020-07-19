import React, { useRef, useEffect } from 'react'
import pics from '../../images/sodiq5.jpg'
// import { gsap } from 'gsap'


function Showcase() {
  let okay = useRef(null)
  let name = useRef(null)
  let nigeria = useRef(null)
  let build = useRef(null)
  let btn = useRef(null)
  let front = useRef(null)
  let dev = useRef(null)
  let img = useRef(null)
  useEffect(() => {
    
    // gsap.from(okay,.5,{ x: '30vw', delay: .4})
    // gsap.from(name,1,{ opacity: 0,scale: 0, delay: .9})
    // gsap.from(nigeria,1,{ opacity: 0, delay: 1.9, x: '30vw'})
    // gsap.from(build,4,{ opacity: 0, delay: 2.7 })
    // gsap.from(btn, 2,{ opacity: 0, delay: 5.9 })
    // gsap.from(front,1.5,{ opacity: 0, delay: 4, y: '30vh' })
    // gsap.from(dev,1.5,{ opacity: 0, delay: 4.4, y: '30vh' })
    // gsap.from(img,1.2,{ opacity: 0, delay: 4.8, scale: 0 })
  },[])
  return (
    <section className="showcase">
      <div className="container2">
        <div className="flex">
          <div className="right">
            <h2 ref={el => okay = el} className="showcase-firstline"> Okay, so I'm </h2>
            <div ref={el => name = el} className="showcase-name">
              <div className="showcase-rec"></div>
              <h2 className="showcase-element">
                <span className="show">A</span>
                <span className="show">l</span>
                <span className="show">a</span>
                <span className="show">s</span>
                <span className="show">e</span>
                <span className="show"> </span>
                <span className="show">S</span>
                <span className="show">o</span>
                <span className="show">d</span>
                <span className="show">i</span>
                <span className="show">q</span>
                
              </h2>
            </div>
            <h2 ref={el => nigeria = el} className="nigeria">from <span className="green">Ni</span>ger<span className="green">ia...</span></h2>
            <h2 ref={el => build = el} className="build">I build <span className="red">beautiful </span>and <br /> <span className="red">stunning</span> websites that <br /> are  <span className="red">highly performing</span> and <span className="red">responsive...</span></h2>
            <div ref={el => btn = el} className="buttons">
              <a href="https://drive.google.com/file/d/1bJa63BrB9Urtje1RGKjottZJsMPq6Hu4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn1">View Resume</a>
              <a href="https://wa.me/2348136021545" target="_blank" rel="noopener noreferrer" className="btn2">Contact Me</a>

            </div>
          </div>
          <div className="left">
            <h2 ref={el => front = el} className="front">FRONTEND</h2>
            <h2 ref={el => dev = el} className="dev">DEVELOPER</h2>
            <img ref={el => img = el} src={pics} alt="" className="left-pics"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
