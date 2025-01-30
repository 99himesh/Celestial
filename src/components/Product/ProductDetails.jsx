import { Col, Row } from "antd";
import React, { useEffect, useState,Component  } from 'react';
import { Typography, Rate } from 'antd';
import { Flex, Progress } from 'antd';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../feature/product/productApi";
import { addProducts } from "../../feature/product/productSlice";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import girlImage from "../../assets/girl.jpg"
import Slider from "react-slick";
import manya from "../../assets/Manya.png"
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import InnerImageZoom from "react-inner-image-zoom";
// product details page start here

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [activeImage,setActiveImage]=useState(1);
  const data = useSelector(state => state.product?.products)
  const [discountPercentage, setDiscountPercentage] = useState()
  const { id } = useParams();
  const items = data.find(ele=>ele._id===id)
  console.log(id);
  
  const getData = async () => {
    const data = await getProductApi();
    dispatch(addProducts(data));
  }
  const percentageCalculate = () => {
    const percentage = Math.floor(((items?.discountPrice - items?.price) / items?.discountPrice) * 100)
    setDiscountPercentage(percentage);
  }
  const addCartHandler = (item) => {
    // dispatch(addToCart(item))
  }




  
  useEffect(() => {
    percentageCalculate();
  }, [id, dispatch, data]);
  useEffect(() => {
    getData()
  }, [dispatch])
  return (
    <Row className="pt-[120px]">
      <Col xl={12} lg={8} md={8} sm={24} xs={24}>
        {/* <div className="py-5 px-3   mx-auto">
          <img className="rounded h-[400px] w-full" src={girlImage} alt="product image" />
          <div className="flex justify-between pt-10">
            <button onClick={() => { addCartHandler(items) }} className="text-white bg-[#214344] hover:bg-[#214344] font-medium rounded-lg text-sm px-5 py-2  text-center">Add to Bag</button>
            <button className="text-[#214344] border bg-[#fff] hover:text-[#fff] hover:bg-[#214344] font-medium rounded-lg text-sm px-5 py-2  text-center">Buy Now</button>
          </div>
        </div> */}
        <Row  className="px-10">
          <Col span={4}>
          <div className="flex flex-col gap-3">
            <div onClick={()=>{setActiveImage(1)}}  className={`h-[60px] w-[60px] cursor-pointer ${activeImage==1 && "border-[2px] border-[#214343] rounded-md"} `}><img className="w-[100%] h-[100%] rounded" src={items?.images[0]} /></div>
            <div onClick={()=>{setActiveImage(2)}}  className={`h-[60px] w-[60px] cursor-pointer ${activeImage==2 && "border-[2px] border-[#214343] rounded-md"} `}><img className="w-[100%] h-[100%] rounded" src={items?.images[1]} /></div>
            <div onClick={()=>{setActiveImage(3)}}  className={`h-[60px] w-[60px] cursor-pointer ${activeImage==3 && "border-[2px] border-[#214343] rounded-md"} `}><img className="w-[100%] h-[100%] rounded" src={items.images[2]} /></div>
            <div onClick={()=>{setActiveImage(4)}}  className={`h-[60px] w-[60px] cursor-pointer ${activeImage==4 && "border-[2px] border-[#214343] rounded-md"} `}><img className="w-[100%] h-[100%] rounded" src={items.images[3]} /></div>
            </div>
          </Col>
          <Col span={20}>
          {/* <div className="slick-slider "> */}

          {/* <Slider {...settings}>   */}
      <div className="h-[400px] w-[100%]">
      {/* <img className="w-[s100%] h-[100%] rounded" src={girlImage} /> */}
      <InnerImageZoom  style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }} className="w-[100%] h-[100%] rounded-xl" src={items?.images[0]} />

      </div>
      
      
    {/* </Slider> */}
    {/* </div> */}
          
          </Col>
        </Row>
      </Col>
      <Col xl={12} lg={16} md={16} sm={24} xs={24}>
        <div className="w-full  bg-white   px-5  dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-5  gap-5">
            <div>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{items?.title}</h5>
            </div>

            <div className="flex items-center justify-between py-4 ">
              <div className="flex gap-2 items-center ">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">Rs. {items?.price}</span>
                <span className="text-lg text-gray-400 line-through dark:text-white">Rs. {items?.discountPrice}</span>
                <span className="text-sm text-red-500  dark:text-white">{discountPercentage && discountPercentage}% Off</span>
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              <div>
                <Typography.Text className="tetx-lg font-bold">Material : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.material}</Typography.Text>
              </div>
              <div>
                <Rate disabled allowHalf defaultValue={items?.rating} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="pt-5">
                <Typography.Text className="tetx-lg font-bold">Review : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.review}</Typography.Text>
              </div>
              <div>
                <Typography.Text className="tetx-lg font-bold">Available size : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.size}</Typography.Text>
              </div>
              <div className="pb-5">
                <Typography.Text className="tetx-lg font-bold">Color : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.color}</Typography.Text>
              </div>
            </div>
            <div className="progress">
              {/* <Flex vertical className="gap-2">
                <Typography.Text className="font-semibold">Booked stock</Typography.Text>
                <Progress strokeColor={"#214344"} percent={items?.availableStock} status="active" />
                <Typography.Text className="font-semibold pt-5">Available stock</Typography.Text>
                <Progress strokeColor={"#214344"} percent={items?.availableStock} status="active" />
              </Flex> */}
               <Flex vertical>
                            <Progress strokeColor={"#214344"}  showInfo={false} trailColor="white" percent={items?.quantity} status="active" />
                            <div className="flex justify-between">
                              <div className="flex gap-1">
                            <Typography.Text className="font-semibold text-[14px] text-[#214344] ">Sold : </Typography.Text>
                            <Typography.Text className="font-bold text-[14px] text-[#214344] ">{items?.sold}</Typography.Text>
                            </div>
                           <div className="flex gap-1">            
                              <Typography.Text className="font-semibold text-[#214344]">Available :</Typography.Text>
                            <Typography.Text className="font-bold text-[14px] text-[#214344] ">{items?.quantity}</Typography.Text>
                            </div>
                            </div>
                          </Flex>
                          <div className="flex justify-between py-2">
            <button onClick={() => { addCartHandler(items) }} className="text-white bg-[#214344] hover:bg-[#214344] font-medium rounded-full text-sm  w-[200px] py-2  text-center">Add to Bag</button>
            <button className="text-[#214344] border bg-[#fff] hover:text-[#fff] hover:bg-[#214344] font-medium rounded-full text-sm w-[200px] py-2  text-center">Buy Now</button>
          </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default ProductDetails;
// product details page end here




const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

