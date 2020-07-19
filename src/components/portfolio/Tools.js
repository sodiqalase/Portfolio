import React from 'react'
import ai from '../../icons/ai.png'
import babel from '../../icons/babel.png'
import contentful from '../../icons/contentful.png'
import figma from '../../icons/figma.png'
import firebase from '../../icons/bootstrap.png'
import git from '../../icons/git.png'
import gulp from '../../icons/gulp.png'
import jest from '../../icons/jest.png'
import netlify from '../../icons/netlify.png'
import node from '../../icons/node.png'
import npm from '../../icons/npm.png'
import ps from '../../icons/ps.png'
import redux from '../../icons/redux.png'
import sass from '../../icons/sass.png'
import webpack from '../../icons/webpack.png'
import wordpress from '../../icons/wordpress.png'
import xd from '../../icons/xd.png'

function Tools() {
  return (
    <section className="tools">
      <div className="container3">
        <h2 className="tools-heading">
        <span className="red">__</span>tools<span className="red">...</span></h2>
        <div className="grid">
          <div className="know-icons"><img src={redux} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={sass} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={git} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={webpack} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={npm} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={node} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={babel} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={wordpress} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={ai} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={ps} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={figma} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={xd} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={firebase} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={gulp} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={jest} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={netlify} alt="" className="know-icons-png"/></div>
          <div className="know-icons"><img src={contentful} alt="" className="know-icons-png"/></div>
        </div>
      </div>
    </section>
  )
}

export default Tools
