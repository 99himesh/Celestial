

import Slider from "react-slick";
import ringImage from "../../assets/rings.jpg";
import { Card } from "antd";
import diamond from "../../assets/diamond.webp"
import { useState } from "react";
import "./subcategary.css"
const subCategaryData=["Earing","Bracelets","Ring","Pendents","Necklaces","Band","Watch","Jackets"];
const settings = {
    className:"center",
    dots: false,
    infinite: true,
    speed: 200,
    focusOnSelect: true, 
    slidesToShow: 5,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll:1,
            infinite: true,
            initialSlide: 1,

            dots: false,
            autoplaySpeed: 2000,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false,
            autoplaySpeed: 2000,
            display:"flex",

          }

        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            dots: false,
            centerMode: true,
          }
        }
      ]
  };


  
const SubCategary=()=>{
  const [hoverSub,setHoverSub]=useState();
  const [hoverId,setHoverId]=useState(null)


  const hoverSubHandler=(idx)=>{
    setHoverSub(true)
    setHoverId(idx)
  }

    return (
        <div className="md:px-1 px-0  subcategary my-10 w-full">
        <div  className="   w-[90%] mx-auto  " >
            <Slider {...settings} >
           {subCategaryData?.map((item,idx)=>{
            return(
              <>
              <div
              key={idx}
                onMouseEnter={() => hoverSubHandler(idx)}
                onMouseLeave={() => setHoverSub(false)}
                className="cursor-pointer"
                style={{
                  display: 'flex',
                  margin:"0 auto",
                  width:"100%",
                  justifyContent: 'center',
                  alignItems: 'center',
                  // height: '100vh',
                  
                }}
              >
                <Card
                className={`2xl "bg-[#fff] subCategary "  `}
                  style={{
                    borderRadius: '50%',
                    // border:"2px solid #747676",
                    width: 240,
                    height: 240,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                  styles={{
                    body:{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    }
                  }}
                >
                  <div
                  
                    style={{
                      width: 100,
                      height: 50,
                      backgroundColor: '#fff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // border: '2px solid #747676',
                      borderRadius: 4,
                      position:"relative"
                    }}
                  >
                   <div className="absolute flex items-center  justify-center   ">
                   <div className="w-[90px] h-[60px] flex items-center justify-center">
                    <img className="w-full h-[40px] " src={diamond}/>
                    </div>
                    {(hoverSub &&  hoverId===idx ) && <h4 className="absolute left-0 right-0 mx-auto flex justify-center text-[20px]   text-[#214344] font-bold    ">{item}</h4>}
                   </div>
                  </div>
                </Card>
                </div>
                </>
            )
           })}
        </Slider>
        </div>

        </div>
    )
}
export default SubCategary;