import React from "react";
export default function Main(){
   const date=new Date()
   const hours = date.getHours()
   let timeofday
   if (hours<12){
      timeofday = 'Morning'
   }else if(hours >= 12 && hours < 16){
      timeofday = 'Afternoon'
   }else{
      timeofday = 'Night'
   }

   return(
         <main>
            <h2>Good {timeofday} </h2>
            <h2>Welcome to The Auction Website</h2>
         </main>
      ) 
}