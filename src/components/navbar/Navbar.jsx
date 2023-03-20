import React,{useState} from 'react'

export default function Navbar() {

      const [style,setStyle]=useState(-200)

  return (
    <>
    <nav id="nav">
        <h2>FeedWell</h2>
        <div class="nav-links" id="navLinks" style={{right:`${style}px`}}>
          <i class="fa fa-times text-dark" onClick={()=>setStyle(-200)}></i>
          <ul class="nav-mod">
            <li style={{fontSize:'20px'}}><a href="#home">HOME</a></li>
            <li style={{fontSize:'20px'}}><a href="#ABOUT">ABOUT</a></li>
            <li style={{fontSize:'20px'}}><a href="#course">CONTACT</a></li>
            <li style={{fontSize:'20px'}}><a href="#blog">REVIEW</a></li>
          </ul>
        </div>
        <i class="fa fa-bars text-dark" onClick={()=>setStyle(0)}></i>
      </nav>
    </>
  )
}
