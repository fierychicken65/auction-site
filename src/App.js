import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card";
export default function App(){
    return(
        <div className="container">
            <Navbar />
            <Main />
            <div className="LiveBox">
                <h2>LIVE</h2>
                <Card 
                    name="DELL G15"
                    img = "./images/dell_g15.png"
                    price = "$ 800"
                />
                <Card 
                    name="Macbook 2023 M3 Chip"
                    img="./images/macbook.png"
                    price ="$ 1,000"
                />
                <Card 
                    name="LEGION Y540 81SY"
                    img="./images/legion_y540.jpg"
                    price="$ 900"
                />
            </div>
        </div>
    )
}