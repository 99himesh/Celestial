import React from "react";
// This is my hero section .start here
const HeroSection=()=>{
  const video="https://s31.aconvert.com/convert/p3r68-cdx67/fm91q-c01pr.mp4"
    return(
      <div className="pt-[134px]">
        <video className="w-full  md:h-[500px]" muted loop autoPlay>
        <source   src={video} type="video/mp4"/>
        <source  src={video} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
      
</div>
    )
}
export default HeroSection;
// This is my hero section .end here
