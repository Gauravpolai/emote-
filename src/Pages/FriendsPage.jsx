import React from "react";
import Navbar from "../Components/Navbar";
import down from "../assets/down.jpeg"
const FriendsPage=()=>{
    return(
        <div>
            <Navbar/>
        <div className="flex justify-center items-center">
            <img src={down} alt="" />
            <h1 className="font-display text-4xl">Coming soon</h1>
        </div>
        </div>
    )
}
export default FriendsPage