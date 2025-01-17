import React from "react";
// This is my hero section .start here
const HeroSection=()=>{
    return(
      <div className="pt-[134px]">
        <video className="w-full md:h-[500px] " controls>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4"/>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
      
</div>
    )
}
export default HeroSection;
// This is my hero section .end here
