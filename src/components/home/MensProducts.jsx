import React, { useEffect } from "react";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../feature/product/productApi";
import { addProducts } from "../../feature/product/productSlice";

const settings = {
  dots: false,
  infinite: true,
  speed: 200,
  focusOnSelect: true, 
  slidesToShow: 3,
  slidesToScroll: 1, 
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        //  centerPadding: "60px",

          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        // centerPadding: "40px",

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        // centerPadding: "40px",

        }
      }
    ]
};

const MensProduct=()=>{  
  
  const dispatch=useDispatch();
  const data=useSelector(state=>state?.product?.products)
  const mensData=data?.filter((item,id)=>item?.madefor==="Women");
  const getProduct = async () => {
    const data = await getProductApi();
    dispatch(addProducts(data))
  }
  useEffect(() => {
    getProduct();
  }, [])
 
      return (
        <div className=" md:w-[78%] w-[100%] mx-auto pt-10 overflow-hidden">
          <Slider {...settings}>
            {mensData?.map((item,idx) => (
              <div key={idx} style={{  padding: "10px", textAlign: "center"}}>
                <Card item={item}/>
              </div>
            ))}
          </Slider>
        </div>
      )
}

export default MensProduct;

