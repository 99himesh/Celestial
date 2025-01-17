
import cardImage from "../../assets/shoes.jpg"
import React, { useEffect, useState } from 'react';
import { Button, Modal, Tooltip, Typography } from 'antd';
import { EyeFilled, ReloadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Flex, Progress } from 'antd';
import {Link} from "react-router-dom"
import CardModal from "./CardModal";
import { addToCart } from "../../feature/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/girl.jpg"
import { WishListIcon } from "../../icons/icon";
// This is my card .start here
const Card = ({item}) => {
  const [thumbnailButton,setThumbnailButton]=useState(false)
  const dispatch=useDispatch();
  const [cardId,setCardId]=useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discountPercentage,setDiscountPercentage]=useState();
  // This function work as add to cart functionality
  const addCartHandler=(item)=>{
    dispatch(addToCart(item))
   }
  // This function work as to show modal
  const showModal = (idx) => {
    setCardId(idx)
    setIsModalOpen(true);
  };
  // This function calculate percentage discount
 const percentageCalculate=()=>{
  const percentage=Math.floor(((item?.discountPrice-item?.price)/item?.discountPrice)*100)
  setDiscountPercentage(percentage);
 }
 useEffect(()=>{
  percentageCalculate()
 },[])
  return (  
    <>
      <div onMouseEnter={()=>{setThumbnailButton(true)}} onMouseLeave={()=>{setThumbnailButton(false)}}  className="w-full max-w-sm bg-[214344] border border-gray-200 rounded-lg shadow dark:bg-gray-800 mx-4 dark:border-gray-700">
       <div className=" relative">
       <div className="absolute flex flex-col gap-2 right-5 top-5">
       <Tooltip placement="left" title={"Add to Wishlist"}>  <div className="bg-[#214344] rounded-full p-2 cursor-pointer">
          <WishListIcon />
          </div>
          </Tooltip>
             {thumbnailButton && <Tooltip placement="left" title={"Compare"}> <button  className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><ReloadOutlined  style={{fontSize:"20px" ,color:"#F0D5A0"}} /></button></Tooltip>}
             {thumbnailButton &&<Tooltip placement="left" title={"Quick View"}> <button onClick={()=>{showModal(item?.id)}} className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><EyeFilled  style={{fontSize:"20px" ,color:"#F0D5A0"}}/></button></Tooltip>}
              {thumbnailButton && <Tooltip placement="left" title={"Cart"}> <button onClick={()=>{addCartHandler(item)}} className="text-white bg-[#214344] hover:bg-[#214344]  text-sm  p-2  rounded-full text-center"><ShoppingCartOutlined  style={{fontSize:"20px" ,color:"#F0D5A0"}} /></button></Tooltip>}
        </div>
        </div>

    <Link to={`/product/${item?.id}`}>
     <div className="hover:border-[7px] border-[#214344] hover:rounded-t-2xl">
        <img className=" rounded-t-2xl w-full" src={image} alt="product image" />
        </div>
        </Link>
        <div className="px-3 py-5 flex flex-col bg-[#214344]  rounded-b-3xl">
          <div>
          <h5 className="text-[24px] font-semibold tracking-tight  text-white">{item?.title}</h5>
          </div>
          <div className="flex items-center justify-between py-2 ">
            <div className="flex gap-2 items-center ">
              <span className="text-[15px] font-semibold text-[#F0D5A0] ">Rs. {item?.price}</span>
            </div>
          </div>
          <div className="progress">
            <Flex vertical>
              <Progress   showInfo={false} trailColor="white" percent={null} status="active" />
              <div className="flex justify-between">
                <div className="flex gap-1">
              <Typography.Text className="font-semibold text-[14px] text-[#F0D5A0] ">Sold : </Typography.Text>
              <Typography.Text className="font-bold text-[14px] text-[#fff] ">{item.bookedStock}</Typography.Text>
              </div>
             <div className="flex gap-1">            
                <Typography.Text className="font-semibold text-[#F0D5A0]">Available :</Typography.Text>
              <Typography.Text className="font-bold text-[14px] text-[#fff] ">{item.availableStock}</Typography.Text>
              </div>
              </div>
            </Flex>
          </div>
        </div>
      </div>
      <CardModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  id={cardId}/>

    </>

  )
}
export default Card;
// This is my card .End here
