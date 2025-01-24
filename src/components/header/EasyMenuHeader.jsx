import React, { useState } from 'react';
import { Button, Drawer, Radio, Space, Tooltip } from 'antd';
import { NavLink } from 'react-router';
import { FileSearchOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { FcLike } from 'react-icons/fc';
import { IoMdGitCompare } from 'react-icons/io';
import { ProfileIcon, ShopingBag, WishListIcon } from '../../icons/icon';
import { FaFacebook, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
// this is my mobile nav. start here
const siderStyle = {
  height: "full",
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#214344',
};
const EasyMenuHeader = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      placement={"left"}
      width={550}
      onClose={onClose}
      closable={false}
      className=''
      open={open}
      style={{ background: "#efe6dc" }}
    >
      <div className='flex'>
        <Sider width="16%" style={siderStyle} className='h-[100vh]'>
          <div className='flex flex-col justify-between items-center gap-6 py-3'>
            <div className='flex justify-center items-center' onClick={onClose}  >
              <div className='bg-[#F0D5A0] w-[40px] h-[40px] pt-0  rounded-full flex items-center justify-center  '>
                <button className=' absolute top-2  text-[28px] text-[#214344]  '>x</button>
              </div>
            </div>

            <div className='flex-col flex  items-center  '>
              <Tooltip placement="left" title={"Cart"}> <button className={`text-white    text-sm  p-2  rounded-full text-center"`}><ShopingBag style={{ fontSize: "24px", color: "#F0D5A0" }} /></button></Tooltip>
              <Tooltip placement="left" title={"Add to Wishlist"}>  <div className="bg-[#214344] rounded-full p-2 cursor-pointer">
                <button className={`text-white   text-sm  p-2  rounded-full text-center"`}>
                  <WishListIcon />
                </button>
              </div>
              </Tooltip>
              <Tooltip placement="left" title={"Compare"}>
                <div className='className="bg-[#214344] rounded-full p-2 cursor-pointer"'>
                  <button className={`text-white    text-sm  p-2  rounded-full text-center"`}><IoMdGitCompare style={{ fontSize: "24px", color: "#F0D5A0" }} /></button>
                </div></Tooltip>
              <Tooltip placement="left" title={"Compare"}>
                <div className='className="bg-[#214344] rounded-full p-2 cursor-pointer"'>
                  <button className={`text-white    text-sm  p-2  rounded-full text-center"`}><FileSearchOutlined style={{ fontSize: "24px", color: "#F0D5A0" }} /></button>
                </div></Tooltip>
              <Tooltip placement="left" title={"Compare"}>
                <div className='className="bg-[#214344] rounded-full p-2 cursor-pointer"'>
                  <button className={`text-white    text-sm  p-2  rounded-full text-center"`}><ProfileIcon /></button>
                </div></Tooltip>

            </div>
            <div className='pt-16 flex flex-col gap-3'>
              
              <FaInstagram style={{ fontSize: "20px", color: "#F0D5A0" }} />
              <FaFacebook style={{ fontSize: "20px", color: "#F0D5A0" }} />
              <FaPinterestP style={{ fontSize: "20px", color: "#F0D5A0" }} />
              <FaYoutube style={{ fontSize: "20px", color: "#F0D5A0" }} />
            </div>
          </div>

        </Sider>
        <div className='flex flex-col justify-between px-10 py-20 '>
          <div className="flex flex-col gap-2 ">
            <div className=''>
            <input className=' bg-[#fff] rounded px-10 py-2 w-[300px]    ' />
            </div>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]" to={"/"} > Home</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]" to={"/shop"} >About</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]">  wishlist</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"> Cart</NavLink>
          </div>
          {/* <div>kknk</div> */}
        </div>
      </div>
    </Drawer>
  )
}
export default EasyMenuHeader;
// this is my mobile nav. end here