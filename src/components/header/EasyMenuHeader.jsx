import React, { useState } from 'react';
import { Button, Drawer, Radio, Space, Tooltip } from 'antd';
import { NavLink } from 'react-router';
import { FileSearchOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { FcLike } from 'react-icons/fc';
import { IoMdGitCompare } from 'react-icons/io';
import { ProfileIcon, ShopingBag, WishListIcon } from '../../icons/icon';
import { FaFacebook, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import closeIcon from "../../assets/closeicon.png"
import shopingCart from "../../assets/Bag.png"
import wishList from "../../assets/wishlist.png"
import profile from "../../assets/profile.png"
import similar from "../../assets/similar.png"
import catalogue from "../../assets/catalogue.png"
// this is my mobile nav. start here
const siderStyle = {
  height: "full",
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#214344',
};
const EasyMenuHeader = ({ open, setOpen }) => {
  const [activeTab, setActiveTab] = useState("cart")
  const onClose = () => {
    setOpen(false);
  };


  const searchHandler=(e)=>{
       

  }




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
          <div className='flex flex-col justify-between items-center gap-6 py-5 cursor-pointer' >
            <div className='flex justify-center items-center' onClick={onClose}  >
              <div className=' w-[20px] h-[20px]  rounded-full flex items-center justify-center  '>
                <img src={closeIcon} />
              </div>
            </div>

            <div className='flex-col flex  items-center  '>
              <Tooltip placement="left" title={"Cart"}><button  onClick={() => setActiveTab("cart")} className={`bg-[#efe6dc] rounded-full p-2   ${activeTab === "cart" ? "bg-[#efe6dc] " : "bg-transparent"} `}> <div className='h-[24px] w-[24px] flex items-center'><img className='' src={shopingCart} /></div></button></Tooltip>
              <Tooltip placement="left" title={"Add to Wishlist"}>  <div className="bg-[#214344] rounded-full p-2  cursor-pointer">
                <button onClick={() => setActiveTab("wishlist")} className={`p-2  rounded-full  ${activeTab === "wishlist" ? "bg-[#efe6dc] " : "bg-transparent"} `}>
                  <div className='h-[24px] w-[24px]  flex justify-center items-center'>
                    <img className='object-fit' src={wishList} />
                  </div>
                </button>
              </div>
              </Tooltip>
              <Tooltip placement="left" title={"Compare"}>
                <div className='className="bg-[#214344] rounded-full p-2 cursor-pointer"'>
                  <button onClick={() => setActiveTab("similar")} className={`text-white    text-sm  p-2  ${activeTab === "similar" ? "bg-[#efe6dc] " : "bg-transparent"}  rounded-full text-center"`}>
                    <div className='h-[24px] w-[24px]  flex justify-center items-center'>
                      <img className='object-fit' src={similar} />

                    </div>
                  </button>
                </div></Tooltip>
              <Tooltip placement="left" title={"Compare"}>
                <div className='className="bg-[#214344] rounded-full p-2 cursor-pointer"'>
                  <button onClick={() => setActiveTab("catalogue")} className={`text-white   ${activeTab === "catalogue" ? "bg-[#efe6dc] " : "bg-transparent"}   text-sm  p-2  rounded-full text-center"`}>
                    <div className='h-[24px] w-[24px] flex justify-center items-center'>
                      <img className='object-fit' src={catalogue} />
                    </div>
                  </button>
                </div></Tooltip>
              <Tooltip placement="left" title={"Compare"}>
                <div className='className="bg-[#214344] rounded-full p-2 cursor-pointer"'>
                  <button onClick={() => setActiveTab("profile")} className={`text-white    ${activeTab === "profile" ? "bg-[#efe6dc] " : "bg-transparent"}   text-sm  p-2  rounded-full text-center"`}>
                    <div className='h-[24px] w-[24px]'><img className='object-fit' src={profile} />
                    </div>
                  </button>
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
              <div className='relative'>
              <input placeholder='Search your products'  onChange={(e)=>{searchHandler(e)}} className=' bg-[#fff] rounded-full px-5 py-2 md:w-[300px]    ' />
              <div className='absolute top-2 right-2'><SearchOutlined style={{fontSize:"20px"}} /></div>
              </div>
            </div>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]" to={"/"} > Home</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]" to={"/shop"} >Shop</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]">  wishlist</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"> Cart</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"> About us</NavLink>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </Drawer>
  )
}
export default EasyMenuHeader;
// this is my mobile nav. end here