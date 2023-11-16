import React from "react";
export default function Login(){
    return(
        <form className="login">
            <form className="login--subset">

                <h1>LOGIN</h1>
                <input type="text" id="username" placeholder="Enter your username"   className="LoginInput" required/>
                <input type="email" id="Email" placeholder="Enter your E-mail ID"  className="LoginInput" required/>
                <input type="password" id="password" placeholder="Enter your password" className="LoginInput"  required/>
                <button type="submit" className="SubmitButton">Login</button>
            </form>
        </form>
    )
}