import React from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Card from "./components/Card";
import Product from "./components/Product";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import AddProduct  from "./components/AddProduct";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";

export default function App(){
    return(
        <div className="container">
            <BrowserRouter>
            <Navbar />
                <Routes>
                <Route element={<PrivateComponent />}>
                <Route path="/Home" element={
                    <div>
                        <Main />
                        <Product />
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
                } /> 
                
                <Route path="/About" element={<h1 className="About">About</h1>} />
                <Route path="/Contact" element={<h1 className="Contact">WASSUP FRAND!!</h1>} />
                </Route>

                <Route path="/SignIn" element={<SignIn/>}/>
                <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                <Route path="add" element={
                <div>
                    <Product/>
                    <AddProduct />
                </div>
                }/>
                <Route path="/products" element={<h1>Products</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}