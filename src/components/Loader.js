import React, {  useRef, useEffect } from 'react';
import { gsap } from 'gsap'



function Loader(props) {
  let head = useRef(null)
  let bar = useRef(null)
  let sec = useRef(null)
  let load = useRef(null)
  
  useEffect(() => {
    setTimeout(() => {
      props.history.push('/portfolio');
    },5000)
    // gsap.from(head,1,{ x: '30vw', opacity: 0, delay: .4})
    // gsap.from(bar,2,{ scale: 0, opacity: 0, delay: .9})
    // gsap.from(sec,1,{ opacity: 0, y: '20vh', delay: 1.9})
    // gsap.from(load,1,{ opacity: 0, delay: 2.4})
    
    
    // eslint-disable-next-line
  },[])

  return (
    <main className="loader-main">
      <div className="loader-bg">
        <div className="loader-overlay">
        </div>
      </div>
      <div className="loader-content">
        <h2 ref={el => (head = el) } className="loader-wt"><span className="white">"</span>Welcome to my Porfolio<span className="white">"</span></h2>
        <div ref={ el => bar = el } className="bar-wrapper">
          <div className="bar-rec"></div>
          <h2 className="bar-element">
            <span className="bar">I</span>
            <span className="bar">'</span>
            <span className="bar">m</span>
            <span className="bar"> </span>
            <span className="bar">v</span>
            <span className="bar">e</span>
            <span className="bar">r</span>
            <span className="bar">y</span>
            <span className="bar"> </span>
            <span className="bar">g</span>
            <span className="bar">l</span>
            <span className="bar">a</span>
            <span className="bar">d</span>
            <span className="bar"> </span>
            <span className="bar">y</span>
            <span className="bar">o</span>
            <span className="bar">u</span>
            <span className="bar"> </span>
            <span className="bar">a</span>
            <span className="bar">r</span>
            <span className="bar">e</span>
            <span className="bar"> </span>
            <span className="bar">h</span>
            <span className="bar">e</span>
            <span className="bar">r</span>
            <span className="bar">e</span>
            <span className="bar"></span>
          </h2>
        </div>
        <div ref={ el => sec = el } className="just-a-second">
        Just a second, please !
        </div>
       
        <div ref={ el => load = el } class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
        

    </main>
  )
}

export default Loader
