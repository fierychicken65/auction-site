import React from "react";
 export default function Navbar(){
    return (
      <nav>
         <img src="./images/logo.png" alt="nope" height="50px"/>
         <h1 className="nav-head">uction Site</h1>
         <ul className="nav-ele">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
         </ul>
      </nav>
    )
 }