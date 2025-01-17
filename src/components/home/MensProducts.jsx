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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

const MensProduct=()=>{  
  console.log("Mens product");
  
  const dispatch=useDispatch();
  const data=useSelector(state=>state.product.products)
  const mensData=data.filter((item,id)=>item.category==="Men");
  const getProduct = async () => {
    const data = await getProductApi();
    dispatch(addProducts(data))
  }
  useEffect(() => {
    console.log("mens api");
    
    getProduct();
  }, [])
 
      return (
        <div className="w-full px-5 md:px-20 pt-10 ">
          <Slider {...settings}>
            {mensData.map((item) => (
              <div key={item.id} style={{  padding: "10px", textAlign: "center"}}>
                <Card item={item}/>
              </div>
            ))}
          </Slider>
        </div>
      )
}

export default MensProduct;

