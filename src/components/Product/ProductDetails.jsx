import { Col, Collapse, Row } from "antd";
import React, { useEffect, useState, Component } from 'react';
import { Typography, Rate } from 'antd';
import { Flex, Progress } from 'antd';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../feature/product/productApi";
import { addProducts } from "../../feature/product/productSlice";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import girlImage from "../../assets/girl.jpg"
import Slider from "react-slick";
import CustomDrawer from "../CustomDrawer";
import startWhite from "../../assets/StarWhite.png";
// import starYellow from "../../assets/starYellow.png"
import starOrange from "../../assets/starOrange.png"
import manya from "../../assets/Manya.png";
import "./productDetails.css"
import bag from "../../assets/icons/greenBag.png"
import wishlist from "../../assets/icons/wishlistGreen.png"
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import InnerImageZoom from "react-inner-image-zoom";
import Cart from "../cart/Cart";
import { addToCartData } from "../../feature/categary/cartApi";
import { TbPointFilled } from "react-icons/tb";
import { addToWishlistData } from "../../feature/wishlist/wishlistApi";
// product details page start here

import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import OrderModal from "../order/order";

const ProductDetails = () => {
  const { error, isLoading, Razorpay } = useRazorpay();
  const [counterPeople,setCounterPeople]=useState(5);
  const dispatch = useDispatch(); 1
  const [activeImageId, setActiveImageId] = useState(1);
  const data = useSelector(state => state.product?.products)
  const [discountPercentage, setDiscountPercentage] = useState()
  const { id } = useParams();
  const items = data.find(ele => ele._id === id)
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState(items?.images[0]);
    const [cartStatus,setCartStatus]=useState("");
  
  const user = localStorage.getItem("userId")

  const getData = async () => {
    const data = await getProductApi();
    dispatch(addProducts(data));
  }
  const percentageCalculate = () => {
    const percentage = Math.floor(((items?.discountPrice - items?.price) / items?.discountPrice) * 100)
    setDiscountPercentage(percentage);
  }

  const activeImageHAndler = (imageUrl, id) => {
    setActiveImageId(id)
    setActiveImageUrl(imageUrl)
  }


  const addCartHandler = async (item) => {
    setCartStatus("cart")
    setOpen(true)
    const token = localStorage.getItem("token")
    const data = {
      userId: user,
      productId: item._id,
      quantity: item.quantity,
      price: item.price
    }
    try {
      
      const res = await addToCartData(data, token)

    } catch (error) {
      console.log(error);
    }

  }


  const onClose = () => {
    setOpen(false);
  };


  const addTowishlistHandler=async(item)=>{
    setCartStatus("wishlist")
    setOpen(true);
        const data = { userId: localStorage.getItem("userId"), prodId: item?._id };
    
        try {
          const res = await addToWishlistData(data);
        } catch (error) {
          console.log(error);
        }
  }





  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",

    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };



  const createOrder=async()=>{
    try {
    const order=await addOrder()
    

      
    } catch (error) {
      
    }
  }





  useEffect(()=>{
    if(counterPeople===0)  return

    const counttime= setInterval(()=>{
   
      setCounterPeople(prev=>prev-1)
    },[7000])
   clearInterval(counttime)

  },[counterPeople])

  useEffect(() => {
    percentageCalculate();
  }, [id, dispatch, data]);
  useEffect(() => {
    getData()
    
  }, [dispatch])




  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="relative">
        {isLoading && <p>Loading Razorpay...</p>}
        {error && <p>Error loading Razorpay: {error}</p>}
    <Row className="md:pt-[120px] pt-[70px] bg-[#efe6dc] md:px-20   pb-5">
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <Row className="max-lg:px-5  "  >
          <Col xl={{span:3,order:1}} lg={{span:24,order:2}} md={{span:24,order:2}} sm={{span:24,order:2}}  xs={{span:24,order:2}}  >
            <div className="flex lg:flex-col   max-lg:py-3 py-1  gap-[20px] max-lg:justify-center">
              <div onClick={() => { activeImageHAndler(items?.images[0], 1) }} className={`md:size-[90px] size-[70px] cursor-pointer ${activeImageId == 1 && "border-[2px] border-[#214343] rounded-md"} `}>{items?.images?.length>0 && <img className="w-[100%] h-[100%] rounded" src={items?.images[0]} />}</div>
              <div onClick={() => { activeImageHAndler(items?.images[1], 2) }} className={`md:size-[90px] size-[70px] cursor-pointer ${activeImageId == 2 && "border-[2px] border-[#214343] rounded-md"} `}>{items?.images?.length>0 && <img className="w-[100%] h-[100%] rounded" src={items?.images[1]} />}</div>
              <div onClick={() => { activeImageHAndler(items?.images[2], 3) }} className={`md:size-[90px] size-[70px] cursor-pointer ${activeImageId == 3 && "border-[2px] border-[#214343] rounded-md"} `}>{items?.images?.length>0 && <img className="w-[100%] h-[100%] rounded" src={items.images[2]} />}</div>
              <div onClick={() => { activeImageHAndler(items?.images[3], 4) }} className={`md:size-[90px] size-[70px] cursor-pointer ${activeImageId == 4 && "border-[2px] border-[#214343] rounded-md"} `}>{items?.images?.length>0 && <img className="w-[100%] h-[100%] rounded" src={items.images[3]} />}</div>
            </div>
          </Col>
          <Col xl={{span:21,order:2}} lg={{span:4,order:1}} md={{span:24,order:1}} sm={{span:24,order:1}}  xs={{span:24,order:1}} >
          <div className="flex gap-2 md:hidden items-center max-md:pt-4 ">
                <Typography.Text className="text-[14px] font-semibold text-[#214344]">Home </Typography.Text>
                <TbPointFilled  style={{color:"#214344"}}/>

                <Typography.Text className="text-[14px] font-semibold text-[#214344]">{(items?.category)?.toUpperCase()} </Typography.Text>
              </div>
            <div className="md:h-[400px]  h-[]   md:w-[400px] mx-auto relative max-md:pt-2">
             {items?.images?.length>0 &&  <InnerImageZoom
             fadeDuration={0} 
             fullscreenOnMobile={true}
             mobileBreakpoint={640}
             hideCloseButton={false}
             hideHint={true}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                className="w-full h-full rounded-xl"
                src={activeImageUrl}
              />}
            </div>
          </Col>
        </Row>
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24} >
        <div className="w-full  bg-[#efe6dc]   px-5 ">
          <div className="px-3   gap-5">
            <div className="pb-3">
              <div className="flex gap-2 max-md:hidden items-center ">
                <Typography.Text className="text-[14px] text-[214344] font-semibold ">Home </Typography.Text>
                <TbPointFilled />

                <Typography.Text className="text-[14px] text-[#214344] font-semibold">{(items?.category)?.toUpperCase()} </Typography.Text>
              </div>
              <div className="flex max-sm:flex-col justify-between md:items-center">
                <div>
              <h5 className="md:text-[30px] text-[24px] font-semibold tracking-tight text-[#214344]">{items?.title}</h5>

                </div>
                <div>
                <div className="flex gap-2 items-center py-4">
                  {[1, 2, 3, 4, 5]?.map((item) => {
                    return (<>
                      {item <= 3 ? <div className="h-[18px] w-[18px]">
                        <img src={starOrange} />
                      </div> : <div className="h-[18px] w-[18px]">
                        <img src={startWhite} />
                      </div>}
                    </>)
                  })}
                </div>

                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center sm:pt-7">
              <span className="text-xl font-semibold text-[#214344] ">Rs. {items?.price}</span>
              <span className="text-lg text-gray-400 line-through ">Rs. {items?.discountPrice}</span>
              <span className="text-sm text-red-500  ">{discountPercentage && discountPercentage}% Off</span>
            
            </div>
            <Flex vertical className="p-0">
              <Progress strokeColor={"#214344"} showInfo={false} trailColor="white" percent={items?.quantity} status="active" />
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Typography.Text className="font-semibold text-[16px] text-[#214344] ">Sold : </Typography.Text>
                  <Typography.Text className="font-bold text-[16px] text-[#214344] ">{items?.sold}</Typography.Text>
                </div>
                <div className="flex gap-1">
                  <Typography.Text className="font-semibold text-[16px] text-[#214344]">Available :</Typography.Text>
                  <Typography.Text className="font-bold text-[16px] text-[#214344] ">{items?.quantity}</Typography.Text>
                </div>
              </div>
            </Flex>

            <div className="flex justify-between  md:px-7  items-center pt-[12px] pb-[15px]  ">
            <button  onClick={() => { addCartHandler(items,"cart") }}  className=" rounded-full cursor-pointer"><div className="p-2 h-[45px] w-[40px] cursor-pointer"><img src={bag}  className="h-full w-full" /></div></button>

                {/* <button className="text-[#214344] border bg-[#fff] hover:text-[#fff] hover:bg-[#214344] font-medium rounded-full text-sm md:w-[250px] w-[120px]  h-[45px]  text-center">Buy Now</button> */}
               
                {/* <button class="btn rounded-full md:h-[50px] h-[40px] flex  max-md:w-[0px]">Buy Now</button> */}
              
                <button onClick={()=>{setIsModalOpen(true)}} class="bg-[#214344] rounded-full w-[350px] text-[15px] font-seemibold md:py-4 py-2  text-[#fff] max-md:w-[200px]">Buy Now</button>
                <button onClick={()=>{addTowishlistHandler(items,"wishlist")}} className="size-[30px]  cursor-pointer"><img src={wishlist}/></button>
              </div>
            <div className="flex flex-col   gap-[20px] ">
            
               <div className="w-[100%] shadow-xl bg-[#fffcf2]   rounded-full flex justify-start md:px-5 ps-4 pe-6  items-center h-[50px]"><div className=" flex items-center h-[20px] w-[20px]"><img className="w-[100%] " src={bag} /></div>
           <marquee direction="left">
            <Typography.Text className="max-sm:ps-1 sm:ps-4 text-[16px]">{counterPeople} people have this in their carts right now. It's running out! </Typography.Text>
            </marquee>
            </div>
              <div className="">
              <Collapse
                style={{ borderRadius: "30px", background: "#fff" }}
                  className="shadow-xl"
                size="medium"
                items={[{ key: '1', label: <Typography.Text  className="text-[16px] text-start">Additional Information</Typography.Text>, children: <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}</p> }]} />
              </div>
              <div>
              <Collapse
                style={{ borderRadius: "30px", background: "#fff" }}
                className="shadow-xl"

                size="medium"
                items={[{ key: '1', label: <Typography.Text  className="text-[16px] text-start">Story</Typography.Text>, children: <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}</p> }]} />
            </div>
            </div>
            <div className="progress">
            </div>
          </div>
        </div>
        
        <CustomDrawer cartStatus={cartStatus} component={<Cart />} open={open} setOpen={setOpen} onClose={onClose} />
        {isModalOpen && <OrderModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}  items={items}/>}
      </Col>
    </Row>
    <div
        className={`fixed inset-0 transition-all duration-300 ${open ? " backdrop-blur-md" : "bg-transparent"} ${open  ? "z-[998]" : "z-[-1]"}`}
        onClick={onClose}
      ></div>
 
    </div>
  )
}
export default ProductDetails;
// product details page end here




