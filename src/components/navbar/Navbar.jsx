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
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">COURSE</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
        </div>
        <i class="fa fa-bars" onclick="showMenu()"></i>
      </nav>
    </>
  )
}
