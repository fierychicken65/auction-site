import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
   return(
      <nav>
         <img src="./images/logo.png" alt="nope" height="50px"/>
         <h1 className="nav-head">uction Site</h1>
         <ul className="nav-ele">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/Login">Login</Link></li>
         </ul>
      </nav>
   )
}

