import React from "react";
import { Link,useNavigate } from "react-router-dom";



export default function Navbar() {
   const auth = localStorage.getItem("user");
   const navigate = useNavigate();
   const logout = () => {
      localStorage.clear();
      navigate("/login");
   };

   const handleClick = () => {
      if (!auth) {
         alert("Please log in to access this page.");
      }
   };

   return (
      <nav>
         <img src="./images/logo.png" alt="nope" height="50px" onClick={handleClick} />
         <h1 className="nav-head" onClick={handleClick}>uction Site</h1>
         <ul className="nav-ele">
            <li>
               <Link to="/Home" onClick={handleClick}>
                  Home
               </Link>
            </li>
            <li>
               <Link to="/About" onClick={handleClick}>
                  About
               </Link>
            </li>
            <li>
               <Link to="/Contact" onClick={handleClick}>
                  Contact Us
               </Link>
            </li>
            {
               auth ? <li><Link to="/Logout" onClick={logout}>Log out</Link></li>:
               <>
               <li>
                  <Link to="/SignIn" >
                     Login
                  </Link>
               </li>
               <li>
                  <Link to="/login">
                     Register
                  </Link>
               </li>
               </>
            }        
         </ul>
      </nav>
   );
}

