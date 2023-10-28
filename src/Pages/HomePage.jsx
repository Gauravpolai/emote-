import React from "react";
import Navbar from "../Components/Navbar";
import Calander from "../Components/Calander";
import bg from "../assets/bg.png"
import HomeCard from "../Components/HomeCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile,faFaceSadTear, faFaceGrinTears, faFaceGrimace } from '@fortawesome/free-solid-svg-icons';
const HomePage=()=>{

    return(
        <div className="bg-[#d3bd9e]  ">
            <div className="mx-14">
                <div className="bg-navbar bg-cover bg-center h-screen ">
                    <Navbar/>
                    <div className=" mt-[24rem] text-[#b37559]">
                        <h1 className="text-8xl font-heading mt-[10rem]">Be kind</h1>
                        <h1 className="text-8xl font-heading  mt-[1rem]">To yourself</h1>
                    </div>
                </div>

                <div>
                    <h1 className="text-6xl text-[#b37559] font-heading mt-[6rem]"> How it Works</h1>
                </div>

                <div className="flex flex-wrap mt-14 mb-24 gap-6 justify-center">
                    <HomeCard name="Mood" description="A personal emotional compass, designed to help you explore the vast terrain of your feelings. Start each day with a simple check-in. Take a moment to reflect on your current mood."/>
                    <HomeCard name="Explore" description="Explore our various features such as: Tap in for Help, Listen to Relaxing and Meditating Music and Podcasts. "/>
                    <HomeCard name="Social" description="Connect to the communtiy of like minded people. Share tips, ask for advice and make friends who share the same problems."/>
                </div> 

            </div>
            <div className="w-full  bg-[#d19a4852] h-[4rem] p-6">
                
                <p>&copy; 2023 Team KiloGram. All Rights Reserved.</p>
            </div> 
        </div>
    )
}
export default HomePage;