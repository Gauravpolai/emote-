import React from "react";
import {useState} from "react"
import { useParams } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinSquintTears, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

const DayDetail = () => {
  const { date } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload=(event) => {
    const file=event.target.files[0];

    if(file){
      const reader=new FileReader();
      reader.onload=()=>{
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className="bg-[#d3bd9e] px-14 max-h-full h-full">
      <Navbar/>
    <div className="container mx-auto mt-8 text-center">
      <div className="mb-10">
        <h1 className="font-photo flex  text-5xl mb-5">Pick the best photo of the day</h1>

        <div className=" flex flex-col justify-center items-start w-full">
          <label htmlFor="image" className="h-24 flex justify-center items-center gap-3">
            <FontAwesomeIcon icon={faCameraRetro} className="h-8 cursor-pointer"/>
            <h1 className="font-photo font-semibold">Upload Image</h1>
          </label>
          <input 
            type="file"
            name="myImage"
            id="image"
            onChange={handleImageUpload}
            className="invisible"
            />
            {selectedImage && (
          <div>
            <img src={selectedImage} alt="Uploaded" className="mt-4 flex justify-center items-center w-[35%] "/>
          </div>
      )}
        </div>
      </div>


      <h1 className="text-2xl font-photo font-bold mb-4">Day {date} Journal</h1>
      <textarea
        className="p-6 placeholder-black black-white h-screen w-full bg-[#c8a45032] text-black font-heading tracking-wider text-lg"
        placeholder="Write about your day..."
        ></textarea>
    </div>
    </div>
  );
};

export default DayDetail;