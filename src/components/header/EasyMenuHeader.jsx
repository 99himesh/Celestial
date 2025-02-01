import React, { useEffect, useState } from 'react';
import { Button, Collapse, Drawer, Radio, Space, Tooltip } from 'antd';
import { NavLink } from 'react-router';
import { FileSearchOutlined, HomeOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { FcLike } from 'react-icons/fc';
import { IoMdGitCompare } from 'react-icons/io';
import { ProfileIcon, ShopingBag, WishListIcon } from '../../icons/icon';
import { FaFacebook, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import closeIcon from "../../assets/closeicon.png"

import shopingCart from "../../assets/icons/shopYellow.png"
import wishListGreen from "../../assets/icons/wishlistGreen.png"
import similarYellow from "../../assets/icons/similarYellow.png"
import catalogueYellow from "../../assets/icons/catalogueYellow.png"
import homeGreen from "../../assets/icons/homeGreen.png"
import profileGreen from "../../assets/icons/GreenProfile.png"


import shopingCartYellow from "../../assets/icons/shopGreen.png"
import wishListYellow from "../../assets/icons/wishlistyellow.png"
import similarGreen from "../../assets/icons/similarGreen.png"
import catalogueGreen from "../../assets/icons/catalogueGreen.png"
import homeYellow from "../../assets/icons/homeYellow.png"
import greenBag from "../../assets/icons/greenBag.png"
import profileYellow from "../../assets/icons/profileYellow.png"




import api from '../../axios/axios';
import { getProductFilterApi, getProductSearch } from '../../feature/product/productApi';
import image from "../../assets/girl.jpg"
import Catalogue from '../catalogue/Catalogue';
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/Bag.png"
import Cart from '../cart/Cart';
import WishList from '../wishlist/WishList';
import SignIn from '../auth/SignIn';
import "./header.css"
import SignUp from '../auth/SignUp';
import { useDispatch } from 'react-redux';
import { addCategary, addproductToshop } from '../../feature/shop/shopSlice';
import { TbPointFilled } from 'react-icons/tb';
// this is my mobile nav. start here
const siderStyle = {
  height: "full",
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#214344',
};
const EasyMenuHeader = ({ open, setOpen }) => {
  const dispatch=useDispatch();
  // const [searchInput,setSearchInput]=useState("")
  // const [searchData,setSearchData]=useState([]);
  const [activeTab, setActiveTab] = useState("home")
  const onClose = () => {
    setOpen(false);
  };


  const filterSubcategary=async(data)=>{
      
    try {
      const filters={category:data}
      const res=await getProductFilterApi({filters});
      console.log(res);
      
      dispatch(addproductToshop(res?.products)) 
      dispatch(addCategary(data))   
    } catch (error) {
      console.log(error);
      
    }
  
  
    
     
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
      <div className='flex '>
        <Sider width="16%" style={siderStyle} className='h-[100vh]  '>
          <div className='flex flex-col justify-between items-center gap-5 py-5 cursor-pointer' >
            <div className='flex justify-center items-center' onClick={onClose}  >
              <div className=' w-[20px] h-[20px]  rounded-full flex items-center justify-center  '>
                <img src={closeIcon} />
              </div>
            </div>

            <div className='flex-col flex gap-4  items-center  '>
            <Tooltip placement="left" title={"Home"}><button  onClick={() => setActiveTab("home")} className={` rounded-full p-2   ${activeTab === "home" ? "bg-[#F0D5A0] " : "bg-transparent"} `}> <div className='h-[24px] w-[24px] flex items-center'><img className='w-full h-full' src={activeTab === "home"?homeGreen:homeYellow}/></div></button></Tooltip>
              <Tooltip placement="left" title={"Bag"}><button  onClick={() => setActiveTab("cart")} className={` rounded-full p-2   ${activeTab === "cart" ? "bg-[#F0D5A0] " : "bg-transparent"} `}> <div className='h-[24px] w-[24px] flex items-center'><img className='' src={activeTab === "cart"?shopingCartYellow:shopingCart} /></div></button></Tooltip>
              <Tooltip placement="left" title={"Add to Wishlist"}>  <div className=" rounded-full   cursor-pointer">
                <button onClick={() => setActiveTab("wishlist")} className={`p-2  rounded-full  ${activeTab === "wishlist" ? "bg-[#F0D5A0] " : "bg-transparent"} `}>
                  <div className='h-[24px] w-[24px]  flex justify-center items-center'>
                    <img className='object-fit' src={activeTab=="wishlist" ?wishListGreen:wishListYellow} />
                  </div>
                </button>
              </div>
              </Tooltip>
              <Tooltip placement="left" title={"Similer"}>
                <div className='className="bg-[#214344] rounded-full  cursor-pointer"'>
                  <button onClick={() => setActiveTab("similar")} className={`text-white    text-sm  p-2  ${activeTab === "similar" ? "bg-[#F0D5A0] " : "bg-transparent"}  rounded-full text-center"`}>
                    <div className='h-[24px] w-[24px]  flex justify-center items-center'>
                      <img className='w-full h-full' src={activeTab=="similar" ?similarGreen:similarYellow}/>

                    </div>
                  </button>
                </div></Tooltip>
              <Tooltip placement="left" title={"catalogue"}>
                <div className='className="bg-[#214344] rounded-full  cursor-pointer"'>
                  <button onClick={() => setActiveTab("catalogue")} className={`text-white   ${activeTab === "catalogue" ? "bg-[#F0D5A0] " : "bg-transparent"}   text-sm  p-2  rounded-full text-center"`}>
                    <div className='h-[24px] w-[24px] flex justify-center items-center'>
                      <img className='object-fit' src={activeTab=="catalogue" ?catalogueGreen:catalogueYellow} />
                    </div>
                  </button>
                </div></Tooltip>
              <Tooltip placement="left" title={"Profile"}>
                <div className='className="bg-[#214344] rounded-full  cursor-pointer"'>
                  <button onClick={() => setActiveTab("profile")} className={`text-white    ${activeTab === "profile" ? "bg-[#F0D5A0] " : "bg-transparent"}   text-sm  p-2  rounded-full text-center"`}>
                    <div className='h-[24px] w-[24px]'><img className='object-fit' src={activeTab=="profile" ?profileGreen:profileYellow} />
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
        {activeTab=="catalogue" && <Catalogue/>}
        {activeTab=="cart" && <Cart/>}
        {activeTab=="wishlist" && <WishList/>}
        {activeTab=="profile" && <SignUp/>}
     
      

        <div className=' pt-10 home-tab'>
             {activeTab==="home" && <div className='px-10 '><div className='relative '>
              <input placeholder='Search your products'  onChange={(e)=>{searchHandler(e)}} className=' bg-[#fff] rounded-full px-5 py-2 md:w-[300px]    ' />

              <div className='absolute top-2 right-2'><SearchOutlined style={{fontSize:"20px"}} /></div>
              </div></div>} 
              { activeTab=="home" &&  <div className='flex flex-col px-10 pt-5 gap-2'>
            <NavLink onClick={()=>{setOpen(false)}} className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]" to={"/"} > <div className='flex gap-2 items-center h-[20px] w-[20px]'><img src={homeGreen}/><h6> Home</h6></div></NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"  >
            
            <Collapse
            size="small"
            // showArrow={false}
            style={{padding:'0',background:"#efe6dc"}}
            expandIconPosition={"end"}
            bordered={false}
            // collapsible={"disable"}
            items={[{ key: '1', label: <div className='flex gap-2 items-center h-[20px] w-[20px]'><img src={shopingCartYellow}/><h6> Shop</h6></div>, children:<div className='flex flex-col gap-2'>
            <NavLink  onClick={()=>{filterSubcategary("pendents"),setOpen(false)}}  className={"hover:text-[#214344]"} to={"/shop"}><div className='flex gap-2 items-center'><TbPointFilled />Pendents</div></NavLink>
            <NavLink  onClick={()=>{filterSubcategary("ring"),setOpen(false)}}   className={"hover:text-[#214344]"} to={"/shop"}><div className='flex gap-2 items-center'><TbPointFilled />Rings</div></NavLink>
            <NavLink  onClick={()=>{filterSubcategary("bracelets"),setOpen(false)}}  className={"hover:text-[#214344]"} to={"/shop"}><div className='flex gap-2 items-center'><TbPointFilled />Bracelets</div></NavLink>
            <NavLink  onClick={()=>{filterSubcategary("earings"),setOpen(false)}}  className={"hover:text-[#214344]"} to={"/shop"}><div className='flex gap-2 items-center'><TbPointFilled />Earings</div></NavLink>
            <NavLink  onClick={()=>{filterSubcategary("nackeless"),setOpen(false)}}  className={"hover:text-[#214344]"} to={"/shop"}><div className='flex gap-2 items-center'><TbPointFilled />Nackless</div></NavLink>
      </div> }]}
    />
            </NavLink>
            <NavLink onClick={()=>{setActiveTab("cart")}} className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"><div className='flex gap-3 items-center h-[18px] w-[18px]'><img src={greenBag}/><h6> Bag</h6></div> </NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"><div className='flex ps-5 items-center'> About us</div></NavLink>
            </div>}
         
          </div>
         
        </div>
    </Drawer>
  )
}
export default EasyMenuHeader;
// this is my mobile nav. end here