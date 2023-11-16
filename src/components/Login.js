import React from "react";
import {useNavigate} from "react-router-dom";



export default function Login(){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const collectData = async () =>{
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();   
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        if(result){
            navigate("/home");
        }
    }

    return(
        <form className="login">
            <form className="login--subset">

                <h1>LOGIN</h1>
                <input type="text" id="username" placeholder="Enter your username"   className="LoginInput" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="email" id="Email" placeholder="Enter your E-mail ID"  className="LoginInput" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" id="password" autoComplete="on" placeholder="Enter your password" className="LoginInput" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button type="button" onClick={collectData} className="SubmitButton">SUBMIT</button>
            </form>
        </form>
    )
}