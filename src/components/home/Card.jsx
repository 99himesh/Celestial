
import cardImage from "../../assets/shoes.jpg"
import React, { useEffect, useState } from 'react';
import { Button, Modal, Tooltip, Typography } from 'antd';
import { EyeFilled, ReloadOutlined, ShareAltOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Flex, Progress } from 'antd';
import {Link} from "react-router-dom"
import CardModal from "./CardModal";
// import { addToCart } from "../../feature/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/girl.jpg"
import ringimage from "../../assets/rings.jpg"
import { WishListIcon } from "../../icons/icon";
import CustomDrawer from "../CustomDrawer";
import { addToCartData } from "../../feature/categary/cartApi";
import { addToCart } from "../../feature/categary/cartSlice";
import Cart from "../cart/Cart";
import { addToWishlistData } from "../../feature/wishlist/wishlistApi";
import video from "../../assets/video.mp4"
import wishlist from "../../assets/wishlist.png"
import bag from "../../assets/icons/bagYellow.png"
import similarYellow from "../../assets/icons/similarYellow.png"
// This is my card .start here
const Card = ({item,shop}) => {
  const [open, setOpen] = useState(false);
  const [thumbnailButton,setThumbnailButton]=useState(false)
  const dispatch=useDispatch();
  const [cardId,setCardId]=useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discountPercentage,setDiscountPercentage]=useState();
  const token=localStorage.getItem("token")
  const user=localStorage.getItem("userId")
  
  // This function work as add to cart functionality
  const addCartHandler=async(item)=>{
    const data={
      userId:user ,
      productId: item._id,
      quantity: item.quantity,
      price: item.price
    }
    try {
      const res=await addToCartData(data,token)      
    } catch (error) {
      console.log(error);
    }

    setOpen(true)
   }
  // This function work as to show modal
  const showModal = (idx) => {
    setCardId(idx)
    setIsModalOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // This function calculate percentage discount
 const percentageCalculate=()=>{
  const percentage=Math.floor(((item?.discountPrice-item?.price)/item?.discountPrice)*100)
  setDiscountPercentage(percentage);
 }
const addToWishlistHandler=async(item,token)=>{  
  console.log(item);
  const data={userId: localStorage.getItem("userId"),   prodId: item?._id} 
  
  try {
    const res=await addToWishlistData(data)    
  } catch (error) {
    console.log(error);
    
    
  }
  setOpen(true)
}


 useEffect(()=>{
  percentageCalculate()
 },[])
 
  return (  
    <>
      <div onMouseEnter={()=>{ setThumbnailButton(true)}} onMouseLeave={()=>{ setThumbnailButton(false)}}  className="w-[87%] mx-auto  bg-[214344] border border-gray-200 rounded-xl ">
       <div className=" relative">
       <div className=" border-[#214344] hover:rounded-t-xl h-[330px]  ">
       {!thumbnailButton && <img className=" rounded-t-2xl w-full  h-full object-cover " src={item.images[0]} alt="product image " />}
       {thumbnailButton  && <div className="w-full   border-[3px] border-[#214344] rounded-t-[19px]"> <video  className="w-full h-[360px] rounded-t-2xl object-cover"  muted loop autoPlay>
               <source    src={item?.video[0]} alt="...Loading" type="video/mp4"/>
               <source  src={item?.video[0]} type="video/ogg"/>
             </video></div>}
        </div>
       <div className="absolute flex flex-col gap-2 right-5 top-5 h-[35px] w-[35px] cursor-pointer" onClick={()=>{addToWishlistHandler(item)}}>
       <Tooltip placement="left" title={"Add to Wishlist"}>  <div className="bg-[#214344]  rounded-full p-2 cursor-pointer  ">
          {/* <WishListIcon /> */}<img className="w-full h-[full]" src={wishlist}/>
          </div>
          </Tooltip>
       

             {/* {thumbnailButton &&<Tooltip placement="left" title={"Compare"}> <button  className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><ReloadOutlined   style={{fontSize:"20px" ,color:"#F0D5A0"}} /></button></Tooltip>} */}
             {thumbnailButton &&<Tooltip placement="left" title={"Cart"}> <button  onClick={()=>{addCartHandler(item)}} className="text-white bg-[#214344] hover:bg-[#214344]  text-sm  p-2  rounded-full text-center"><img src={bag}/></button></Tooltip>}
            
             {thumbnailButton &&<Tooltip placement="left" title={"Share"}> <button onClick={()=>{showModal(item?.id)}} className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><ShareAltOutlined  style={{fontSize:"20px" ,color:"#F0D5A0"}} /></button></Tooltip>}
             {thumbnailButton &&<Tooltip placement="left" title={"similar"}> <button  className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><img src={similarYellow}/></button></Tooltip>}
       
       
        </div>
        </div>

  
    
        <div className="relative ">
        <Link to={`/product/${item?._id}`}>
        <div className={`px-3 pt-1 pb-12 flex flex-col bg-[#214344]  rounded-b-3xl`}>
          <div>
          <h5 className="md:text-[24px] text-[20px] font-semibold tracking-tight  text-white">{item?.title}</h5>
          </div>
          <div className="flex items-center justify-between py-2 ">
            <div className="flex gap-2 items-center ">
              <span className="text-[15px] font-semibold text-[#F0D5A0] ">Rs. {item?.price}</span>
            </div>
          </div>
         {thumbnailButton && <div className="absolute w-[90%] bottom-2">
            <Flex vertical>
              <Progress   showInfo={false} trailColor="white" percent={null} status="active" />
              <div className="flex justify-between">
                <div className="flex gap-1">
              <Typography.Text className="font-semibold text-[14px] text-[#F0D5A0] ">Sold : </Typography.Text>
              <Typography.Text className="font-bold text-[14px] text-[#fff] ">{item?.sold}</Typography.Text>
              </div>
             <div className="flex gap-1">            
                <Typography.Text className="font-semibold text-[#F0D5A0]">Available :</Typography.Text>
              <Typography.Text className="font-bold text-[14px] text-[#fff] ">{item?.quantity}</Typography.Text>
              </div>
              </div>
            </Flex>
          </div>}
        </div>
        </Link>
        </div>
        </div>
    
      <CardModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  id={cardId}/>
      <CustomDrawer component={<Cart/>} open={open} setOpen={setOpen} onClose={onClose}  />
    </>

  )
}
export default Card;
// This is my card .End here
