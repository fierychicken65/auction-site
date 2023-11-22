import React from "react";
import { Link } from "react-router-dom";

export default function Product(){
    return(
        <div className="nav-2">
            <ul className="Product-Nav">
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/add">ADD PRODUCT</Link></li>
            </ul>
        </div>
    )
}