import { Modal, Tooltip, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { ReloadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Flex, Progress } from 'antd';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../feature/product/productSlice';
import image from "../../assets/girl.jpg"
import { WishListIcon } from "../../icons/icon";
// This is my cardModal start here
const CardModal = ({ isModalOpen, setIsModalOpen, id }) => {
  const [thumbnailButton, setThumbnailButton] = useState(false)
  const dispatch = useDispatch();
  const [discountPercentage, setDiscountPercentage] = useState()
  const data = useSelector(state => state.product?.products)
  const items = data?.filter((item) => item?.id === id);
  const percentageCalculate = () => {
    const percentage = Math.floor(((items[0]?.discountPrice - items[0]?.price) / items[0]?.discountPrice) * 100)
    setDiscountPercentage(percentage);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const addCartHandler = (item) => {
    dispatch(addToCart(item))
  }
  useEffect(() => {
    percentageCalculate();
  }, [id])
  return (
    <>
      <Modal width={416} style={{ top: "20px" }} className='flex justify-center' title={<Typography.Text className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>Silk Scarf</Typography.Text>} open={isModalOpen} footer={false} onOk={handleOk} onCancel={handleCancel}>
        <div onMouseEnter={() => { setThumbnailButton(true) }} onMouseLeave={() => { setThumbnailButton(false) }} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <div className=" relative">
            <div className="absolute flex flex-col gap-2 right-5 top-5">
            <Tooltip placement="left" title={"Add to Wishlist"}> 
               <div className="bg-[#214344] rounded-full p-2 cursor-pointer">
              
                <WishListIcon />
              </div>
              </Tooltip>

              {thumbnailButton && <Tooltip placement="left" title={"Compare"}>  <button className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><ReloadOutlined style={{ fontSize: "20px", color: "#F0D5A0" }} /></button></Tooltip>}
              {thumbnailButton && <Tooltip placement="left" title={"Add to Wishlist"}>  <button onClick={() => { addCartHandler(items[0]) }} className="text-white bg-[#214344] hover:bg-[#214344]  text-sm  p-2  rounded-full text-center"><ShoppingCartOutlined style={{ fontSize: "20px", color: "#F0D5A0" }} /></button></Tooltip>}
            </div>
          </div>
          <Link to="/product/1">
            <img className=" rounded-t-lg w-full" src={image} alt="product image" />
          </Link>
          <div className="px-3 py-5  bg-[#214344] rounded-b-2xl  flex flex-col ">
            <div>
            </div>
            <div className="flex items-center justify-between pb-4 ">
              <div className="flex gap-2 items-center ">
                <span className="text-xl font-semibold text-[#F0D5A0]  dark:text-white">Rs .{items[0]?.price}</span>
                <span className="text-lg text-gray-400 line-through dark:text-white">Rs .{items[0]?.discountPrice}</span>
                <span className="text-sm text-red-500  dark:text-white">{discountPercentage}% Off</span>
              </div>
              <div>
                {/* <button onClick={showModal} className="text-[#fff] bg-[#214344] h-[30px] w-[30px] rounded-full "><EyeFilled /></button> */}
              </div>
            </div>
            <div className="flex justify-between ">
            </div>
            <div className="progress ">
              <Flex vertical>
                <Progress showInfo={false} trailColor="white" percent={null} status="active" />
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Typography.Text className="font-semibold text-[14px] text-[#F0D5A0] ">Sold : </Typography.Text>
                    <Typography.Text className="font-bold text-[14px] text-[#fff] ">{items[0]?.bookedStock}</Typography.Text>
                  </div>
                  <div className="flex gap-1">
                    <Typography.Text className="font-semibold text-[#F0D5A0]">Available :</Typography.Text>
                    <Typography.Text className="font-bold text-[14px] text-[#fff] ">{items[0]?.availableStock}</Typography.Text>
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default CardModal;
// This is my cardModal end here
