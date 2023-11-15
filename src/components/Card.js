import React from "react";

export default function Card(props){
    
    
    return(
        <div className="card">
            <div className="card--subset">
                <p><b>{props.name}</b></p>
                <img src={props.img} alt="Sed"  className="cardImg" height="150px" width="150px"/>
                <p>{props.price}</p>
            </div>
        </div>
                
    )
}