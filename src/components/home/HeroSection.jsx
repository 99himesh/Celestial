import React from "react";
// This is my hero section .start here
import video from "../../assets/video.mp4"
import { RightOutlined } from "@ant-design/icons";
const HeroSection=()=>{
  // const video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    return(
      <div className="pt-[134px] relative bg-[#efe6dc]">
        <div className="max-lg:invisible">
        <video  className="w-full h-[500px]  md:h-[700px] object-cover"  muted loop autoPlay>
        <source    src={video} type="video/mp4"/>
        <source  src={video} type="video/ogg"/>
      </video>
      </div>
      <div className="absolute md:top-[278px] top-[240px]  left-0 right-0 mx-auto  w-[60%] text-center">
          <h1  className="md:text-[70px] text-[24px] font-semibold text-[#fff] ">Signature Collection Coming Soon </h1>
          <button className="px-7 bg-[transparent]    md:backdrop-blur-lg py-1 rounded-full md:text-[20px] text-[14px]   text-[#fff] mt-8">Know More <RightOutlined /></button> 
  
      </div>
      
</div>
    )
}
export default HeroSection;
// This is my hero section .end here
