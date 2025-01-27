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
import shopingCart from "../../assets/Bag.png"
import wishList from "../../assets/wishlist.png"
import profile from "../../assets/Profile.png"
import similar from "../../assets/similar.png"
import catalogue from "../../assets/catalogue.png"
import api from '../../axios/axios';
import { getProductSearch } from '../../feature/product/productApi';
import image from "../../assets/girl.jpg"
import Catalogue from '../catalogue/Catalogue';
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/Bag.png"
import Cart from '../cart/Cart';
import WishList from '../wishlist/WishList';
import SignIn from '../auth/SignIn';
// this is my mobile nav. start here
const siderStyle = {
  height: "full",
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#214344',
};
const EasyMenuHeader = ({ open, setOpen }) => {
  // const [searchInput,setSearchInput]=useState("")
  // const [searchData,setSearchData]=useState([]);
  const [activeTab, setActiveTab] = useState("")
  const onClose = () => {
    setOpen(false);
  };


  // const searchHandler=async(e)=>{
  //   // if(e.target.value==="") setSearchData([])
  //   setSearchInput(e?.target?.value)
  //   const res=await getProductSearch(searchInput)
  //      setSearchData(res)
  // }
// useEffect(()=>{
//   searchHandler()
// },[searchInput])


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
        <Sider width="16%" style={siderStyle} className='h-[100vh]  '>
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
        {activeTab=="catalogue" && <Catalogue/>}
        {activeTab=="cart" && <Cart/>}
        {activeTab=="wishlist" && <WishList/>}
        {activeTab=="profile" && <SignIn/>}
     
      

        <div className=' pt-10'>
        
           
             {activeTab==="" && <div className='px-10 '><div className='relative '>
              <input placeholder='Search your products'  onChange={(e)=>{searchHandler(e)}} className=' bg-[#fff] rounded-full px-5 py-2 md:w-[300px]    ' />

              <div className='absolute top-2 right-2'><SearchOutlined style={{fontSize:"20px"}} /></div>
              </div></div>}
           
          {/* {searchData.length!=0 && activeTab=="" &&  <div className='h-[300px] w-[200px]  overflow-auto'>
              {searchData.map((item,idx)=>{
                return(
                  <div key={idx} className='flex gap-5'>
                       <div className='h-[200px] w-[200px] rounded'>
                        <img src={image}/>
                       </div>
                       <div>
                        <h6>{item.title}</h6>
                       </div>

                  </div>
                )
              })}
              </div>} */} 
              { activeTab=="" &&  <div className='flex flex-col px-10 pt-5 gap-2'>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]" to={"/"} ><HomeOutlined /> Home</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"  >
            
            <Collapse
            size="small"
            showArrow={false}
            expandIconPosition={"end"}
            bordered={false}
            collapsible={"disable"}
      items={[{ key: '1', label: 'Shop', children:<div className='flex flex-col gap-2'>
        <p>Pendents</p>
        <p>Rings</p>
        <p>Bracelets</p>
        <p>Earings</p>
        <p>Necklaces</p>


      </div> }]}
    />
            </NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"> Wishlist</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"> Cart</NavLink>
            <NavLink className="text-[#214344] text-[16px] font-[600] hover:text-[#214344]"> About us</NavLink>
            </div>}
         
          </div>
         
        </div>
    </Drawer>
  )
}
export default EasyMenuHeader;
// this is my mobile nav. end here