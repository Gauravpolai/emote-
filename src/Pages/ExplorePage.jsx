import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import trial from "../assets/trial.mp3"
import one from "../assets/one.jpeg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";
import six from "../assets/six.jpeg";
import seven from "../assets/seven.jpeg";
import eight from "../assets/eight.jpeg";
import nine from "../assets/nine.jpeg";
import ten from "../assets/ten.jpeg";

const ExplorePage=()=>{
    const onee=useRef(null);
    const twoo=useRef(null);
    const threee=useRef(null);
    const fourr=useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

    const [isPlaying,setIsplaying]= useState(false);
    const playAudio=(trial)=>{
        const audio= new Audio(trial);
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
          console.log(isPlaying)
        setIsplaying(!isPlaying);
    }

    const callme=()=>{
        window.location.href='tel:+919903139400'
    }

    return(
        <div className="px-14 pb-10 bg-[#d3bd9e] h-full">
            <Navbar/>
            <div className="mt-14 flex flex-col justify-center items-center gap-5">
                <div className="h-[3rem] w-[12rem] bg-red-600 flex justify-center items-center rounded-3xl mb-5 cursor-pointer text-xl"
                onClick={callme}
                >
                    <FontAwesomeIcon icon={faHandHoldingMedical}/>
                    <h1 className="font-photo text-white ml-3">I Need Help
                    </h1>
                </div>
                <div className="flex gap-5">
                    <div className="h-[10rem] bg-[#c5a14c85] w-[20rem] rounded-3xl p-10 flex justify-center items-center cursor-pointer"
                    onClick={()=>scrollToSection(onee)}
                    >
                        <h1 className="text-5xl font-display">Sleep</h1>
                    </div>
                    <div className="h-[10rem] bg-[#c5a14c85] w-[20rem] rounded-3xl p-10 flex justify-center items-center cursor-pointer"
                    onClick={()=>scrollToSection(twoo)}
                    >
                        <h1 className="text-5xl font-display">Anxiety</h1>
                    </div>
                    <div className="h-[10rem] bg-[#c5a14c85] w-[20rem] rounded-3xl p-10 flex justify-center items-center cursor-pointer"
                    
                    >
                        <h1 className="text-5xl font-display">Relaxing</h1>
                    </div>
                    <div className="h-[10rem] bg-[#c5a14c85] w-[20rem] rounded-3xl p-10 flex justify-center items-center cursor-pointer">
                        <h1 className="text-5xl font-display">Meditation</h1>
                    </div>
                </div>
                <hr className=" h-6 border-[#5d4714d8] border-t-2 solid w-full"/>
            </div>
            <div className="flex flex-col justify-center items-center">
            <h1 ref={onee} className="text-3xl font-photo mb-5 underline">Sleep</h1>
            <div className="flex flex-wrap gap-6">
                <div className="h-[15rem] w-[14rem] bg-slate-400 cursor-pointer" onClick={()=>playAudio(trial)}>
                    <img src={one} alt="asdfasf" className="h-full w-full" />
                </div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 ">
                    <img src={two} alt="asdfasf" className="h-full w-full" />
                </div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 ">
                    <img src={three} alt="" className="h-full w-full"/>
                </div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 ">
                    <img src={four} alt="" className="h-full w-full"/>
                </div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 ">
                    <img src={five} alt="" className="h-full w-full" />
                </div>
            </div>
            <h1 ref={twoo} className="text-3xl font-photo mb-5 mt-5 underline">Anxiety</h1>
            <div className="flex flex-wrap gap-6">
                <div className="h-[15rem] w-[14rem] bg-slate-400 ">
                    <img src={six} alt="" className="h-full w-full" />
                </div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 "><img src={seven} alt="asdf" className="h-full w-full" /></div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 "><img src={eight} alt="asdf" className="h-full w-full" /></div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 "><img src={nine} alt="asdf" className="h-full w-full" /></div>
                <div className="h-[15rem] w-[14rem] bg-slate-400 "><img src={ten} alt="asdf" className="h-full w-full" /></div>

            </div>
            </div>
        </div>
    )
}

export default ExplorePage