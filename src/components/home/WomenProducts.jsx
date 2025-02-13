import React, { useEffect } from "react";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../feature/product/productSlice";
import { getProductApi } from "../../feature/product/productApi";
const settings = {
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "80px",
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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
  centerPadding: "30px",
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
  centerPadding: "40px",


        }
      }
    ]
};

const WomenProducts=()=>{
  const dispatch=useDispatch();
  const data=useSelector(state=>state.product.products)
    const getProduct = async () => {
      const data = await getProductApi();
      dispatch(addProducts(data))
    }
    useEffect(() => {
      getProduct();
    }, [])
      return (
        <div className="w-full py-10 ">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} style={{  padding: "10px", textAlign: "center"}}>
              <Card item={item}/>
              </div>
            ))}
          </Slider>
        </div>
      )
}

export default WomenProducts;