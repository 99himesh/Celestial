import { Drawer, Space, Tooltip } from "antd";
import Cart from "./cart/Cart";
import { CloseCircleOutlined, EyeFilled, ReloadOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { WishListIcon } from "../icons/icon";
import { FcLike } from "react-icons/fc";
import { IoMdGitCompare } from "react-icons/io";
import { useState } from "react";
import wishList from "../assets/wishlist.png"
import  similer from "../assets/Similar.png"
import WishList from "./wishlist/WishList";
import closeIcon from "../assets/closeIcon.png"

const CustomDrawer=({component,open,onClose,title,placement,width})=>{
  const [activeDrawer,setActiveDrawer]=useState("cart")
   
    return(
        <>
         <Drawer
        //  autoFocus={true}
        title={<div className="flex justify-between items-center">
          <div onClick={onClose} className="h-[20px] w-[20px]"><img src={closeIcon} /></div>
          <div className="flex items-center gap-3">
          <Tooltip placement="left" title={"Cart"}> <button  onClick={()=>{setActiveDrawer("cart")}}   className={`text-white ${activeDrawer==="cart" && "bg-[#F0D5A0]"}   text-sm  p-2  rounded-full text-center"`}><ShoppingCartOutlined  style={{fontSize:"24px" ,color:activeDrawer==="cart"? "#214344":"#F0D5A0"}} /></button></Tooltip>
          <Tooltip placement="left" title={"Add to Wishlist"}>  <div className="bg-[#214344] rounded-full p-2 cursor-pointer">
            <button onClick={()=>{setActiveDrawer("wishList")}}  className={`text-white ${activeDrawer==="wishList" && "bg-[#F0D5A0]"}   text-sm  p-2  rounded-full text-center"`}>
          {/* <FcLike style={{fontSize:"24px", color:activeDrawer==="wishlist"? "#214344":"#F0D5A0"}}/> */}
          <img src={wishList} className="h-[20px] w-[20px]" style={{ color:activeDrawer==="wishlist"? "#214344":"#F0D5A0"}}/>
          </button>
          </div>
          </Tooltip>
              <Tooltip placement="left" title={"similer"}> <button onClick={()=>{setActiveDrawer("compare")}}  className={`text-white ${activeDrawer==="compare" && "bg-[#F0D5A0]"}   text-sm  p-2  rounded-full text-center "`}> <img src={similer} className="h-[20px] w-[20px]" style={{ color:activeDrawer==="compare"? "#214344":"#F0D5A0"}}/>   </button></Tooltip>
          </div>
        </div>}
        closable={false}
        placement={placement ?? "right"}
        width={width ?? 500}
        onClose={onClose}
        open={open}
        styles={{
          body:{background:"#fff"},
          header:{background:"#214344"}
        }}
        
      >
    {activeDrawer=="cart" ? <Cart/> :
     <WishList/>}
      </Drawer>
      </>
    )
}
export default CustomDrawer;
