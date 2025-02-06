import React from "react";
import bg from "../assets/bg.png";

function BG_Image({children}){
    return(

        <header className="relative w-full h-[700px] bg-black bg-blend-darken">
        <img className="absolute inset-0 w-full h-full object-fill opacity-30" src={bg} alt="background image"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
         {children}
        </div>
       
      </header>
    );
}

export default BG_Image;