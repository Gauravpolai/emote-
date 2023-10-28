import React from "react";
import Calander from "../Components/Calander";
import Navbar from "../Components/Navbar";
const MoodPage=()=>{
    return(
        <div>
            <div className="bg-[#f2cd9c]  h-screen w-full">    
                <Navbar/>
                <Calander/>
            </div>
        </div>
    )
}

export default MoodPage;