import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../constants/firebase'
export default function Navbar() {

  const [style, setStyle] = useState(-200)
  useEffect(e=>{
    document.title="Home | FeedWell"
  },[])
  return (
    <>
      <nav id="nav">
        <h2>FeedWell</h2>
        <div className="nav-links" id="navLinks" style={{ right: `${style}px` }}>
          <i className="fa fa-times text-dark" onClick={() => setStyle(-200)}></i>
          <ul className="nav-mod">
            <li style={{ fontSize: '20px' }}><a href="#home">HOME</a></li>
            <li style={{ fontSize: '20px' }}><a href="#about">ABOUT</a></li>
            <li style={{ fontSize: '20px' }}><a href="#review">REVIEW</a></li>

           <Link to={(auth.currentUser)?"/home":"/Login"}><button className='btn btn-dark'>{(auth.currentUser)?"Go Home":"Log in"}</button></Link>
          </ul>
        </div>
        <i className="fa fa-bars text-dark" onClick={() => setStyle(0)}></i>
      </nav>
    </>
  )
}
