

import Slider from "react-slick";
import ringImage from "../../assets/rings.jpg";
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
const SubCategary=()=>{
    return (
        <div className="md:px-3 px-0  ">

            <div  className="bg-[#214344]">
        <Slider {...settings} >

           {subCategaryData.map((item,idx)=>{
            return(
                <div className="px-2" key={idx}>
                <div className={`cursor-pointer  border m-5 rounded-full ${(item==="Ring"|| item==="Necklaces") && "bg-[#fff]"} `} >
                <div key={idx} >
                    <div   className="rounded-full  flex justify-center items-center ">
                        <div className="flex items-center justify-center  h-[220px] w-[220px] ">
                        <div className="w-[160px] py-5 rounded-md  border border-[#abb8c3] ">
                            <div className="relative">
                                <div className="flex justify-between items-center px-2 blur">
                               <img className="h-[40px] w-full" src={ringImage}/>
                                </div>
                             <h4 className="absolute top-0 left-0 right-0 mx-auto text-center text-[#214344] blur hover:blur-0  text-[24px] font-bold">{item}</h4>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            )
           })}
        </Slider>

        </div>

        </div>
    )
}
export default SubCategary;