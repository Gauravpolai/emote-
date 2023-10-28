import React from "react";

const HomeCard=({name, description,emoji})=>{
    return(
        <div className="h-[25rem] w-[25rem] bg-[#b390406c] rounded-[4rem] flex flex-col items-center bg-[#eead174a] mb-5">
            <h1 className="text-4xl mt-5 font-heading text-[#6e5723]">{name}</h1>
            <p className="text-2xl m-10 mt-6 font-heading text-[#41300ac0]">{description}</p>
        </div>
    )
}

export default HomeCard;