import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card";
export default function App(){
    return(
        <div className="container">
            <Navbar />
            <Main />
            <Card />
        </div>
    )
}