import React from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Navbar(){
   const auth = localStorage.getItem("user");
   const navigate = useNavigate();
   const logout = () =>{
      localStorage.clear();
      navigate("/login");  
   }
   return(
      <nav>
         <img src="./images/logo.png" alt="nope" height="50px"/>
         <h1 className="nav-head">uction Site</h1>
         <ul className="nav-ele">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li>{auth ? <Link to="/logout" onClick={logout}>Logout</Link> : <Link to="/login">Sign up</Link>}</li>
         </ul>
      </nav>
   )
}

