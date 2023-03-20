import React from 'react'

export default function Navbar() {

    var navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }

  return (
    <>
    <nav>
        <h2>FeedWell</h2>
        <div class="nav-links" id="navLinks">
          <i class="fa fa-times" onclick={hideMenu()}></i>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#ABOUT">ABOUT</a></li>
            <li><a href="#course">COURSE</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
        <i class="fa fa-bars" onClick={()=>showMenu()}></i>
      </nav>
    </>
  )
}
