import React from 'react'
import html from '../../icons/html.png'
import css from '../../icons/css.png'
import js from '../../icons/js.png'
import es6 from '../../icons/es6.png'
import bootstrap from '../../icons/bootstrap.png'
import materialize from '../../icons/materialize.png'
import react from '../../icons/react (2).png'

function Lang() {
  return (
    <section className="lang">
      <div className="container3">
        <h2 className="lang-heading">
        <span className="red">__</span>languages &amp; frameworks<span className="red">...</span>
        </h2>
        <div className="grid">
          <div className="know-icons"><img src={html} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={css} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={js} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={es6} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={bootstrap} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={materialize} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={react} alt="" className="know-icons-png"/></div>
        </div>
      </div>
    </section>
  )
}

export default Lang
