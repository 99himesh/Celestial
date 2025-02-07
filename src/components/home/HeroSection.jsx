import React from "react";
// This is my hero section .start here
import video from "../../assets/video.mp4"
import { RightOutlined } from "@ant-design/icons";
import "./hero.css"
import scrollDown from "../../assets/scrolldown.png"
const HeroSection=()=>{
  // const video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    return(
      <div className="sm:pt-[110px] pt-[70px] relative bg-[#efe6dc]">
        <div className="">
        <video  className="w-full h-[700px]    md:h-[700px] object-cover"  muted loop autoPlay>
        <source    src={video} type="video/mp4"/>
        <source  src={video} type="video/ogg"/>
      </video>
      </div>
      <div className="absolute md:top-[200px] top-[300px]  left-0 right-0 mx-auto  w-[60%] text-center ">
          <h1  className="md:text-[70px] text-[24px] font-[600] text-[#fff] ">Signature Collection Launching Soon </h1>
          <button className="px-7 bg-[transparent]    backdrop-blur-lg py-1 rounded-full md:text-[20px] text-[20px]   text-[#fff] mt-8">Know More <RightOutlined /></button> 
        <div className="sm:pt-20 pt-[180px]">
        <div className="sm:h-[60px] sm:w-[36px] h-[40px] w-[26px] animate-bounce absolute transition-all duration-[5000] ease-in-out left-0 right-0 mx-auto">

             <img src={scrollDown} className="h-full w-full"/>
          </div>
          </div>
      </div>
      
</div>
    )
}
export default HeroSection;
// This is my hero section .end here
