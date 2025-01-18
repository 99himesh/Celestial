import React, { useEffect, useState } from "react";
import video from "../../assets/video.mp4"
import Loading from "../loading/Loading";
// This is my hero section .start here
const HeroSection=()=>{
  const [loading,setloading]=useState(false)
  const handleVideoLoaded = () => {
    setloading(false);
  };

  if(loading) return <Loading/>
    return(
      <div className="pt-[134px]">
        <video onLoadedData={handleVideoLoaded} className="w-full  md:h-[500px]"  muted loop autoPlay>
        <source   src={video} type="video/mp4"/>
        <source  src={video} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
      
</div>
    )
}
export default HeroSection;
// This is my hero section .end here
