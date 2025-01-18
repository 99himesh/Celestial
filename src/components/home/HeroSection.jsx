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
        <source   src={"https://s31.aconvert.com/convert/p3r68-cdx67/fm91q-c01pr.mp4"} type="video/mp4"/>
        <source  src={"https://s31.aconvert.com/convert/p3r68-cdx67/fm91q-c01pr.mp4"} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
      
</div>
    )
}
export default HeroSection;
// This is my hero section .end here
