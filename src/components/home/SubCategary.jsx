

import Slider from "react-slick";
import ringImage from "../../assets/rings.jpg";
import { Card } from "antd";
const subCategaryData=["Earing","Bracelets","Ring","Pendents","Necklaces","Band","Watch","Jackets"];
const settings = {
    className:"center",
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
   
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false,
            display:"flex",

          }

        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,

          }
        }
      ]
  };
const SubCategary=()=>{
    return (
        <div className="md:px-3 px-0  ">

            <div  className="bg-[#214344] py-3 slider-container ">
        <Slider {...settings} >

           {subCategaryData.map((item,idx)=>{
            return(
                <div
                className=" cursor-pointer "
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  
                }}
              >
                <Card
                className={`2xl ${idx==3 || idx===5?"bg-[#fff]" :"bg-[#214344]"} `}
                  style={{
                    borderRadius: '50%',
                    border:"2px solid #747676",
                    width: 200,
                    height: 200,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                  bodyStyle={{
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: 150,
                      height: 70,
                      backgroundColor:(idx==3 || idx===5) ? '#fff':"#214344",
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '2px solid #747676',
                      borderRadius: 4,
                      position:"relative"
                    }}
                  >
                   <div className="absolute flex items-center   ">
                    <img className="h-[100px] w-[100px] blur-sm " src={"https://zoci.in/wp-content/uploads/2024/10/2.png"}/>
                    <h4 className="absolute left-0 right-0 mx-auto text-[20px] text-[#214344] font-bold blur hover:blur-0   ">{item}</h4>
                   </div>
                  </div>
                </Card>
                </div>
            )
           })}
        </Slider>

        </div>

        </div>
    )
}
export default SubCategary;