import React,{useState} from 'react'

export default function Navbar() {

      const [style,setStyle]=useState(0)

  return (
    <>
    <nav id="nav">
        <h2>FeedWell</h2>
        <div class="nav-links" id="navLinks" style={{right:`${style}px`}}>
          <i class="fa fa-times" onclick={()=>setStyle(0)}></i>
          <ul class="nav-mod">
            <li><a href="#home">HOME</a></li>
            <li><a href="#ABOUT">ABOUT</a></li>
            <li><a href="#course">CONTACT</a></li>
            <li><a href="#blog">REVIEW</a></li>
          </ul>
        </div>
        <i class="fa fa-bars" onClick={()=>setStyle(-200)}></i>
      </nav>
    </>
  )
}
