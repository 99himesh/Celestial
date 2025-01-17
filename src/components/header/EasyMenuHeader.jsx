import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { NavLink } from 'react-router';
import {SearchOutlined,ShoppingCartOutlined } from '@ant-design/icons';
  // this is my mobile nav. start here
const EasyMenuHeader=({open,setOpen})=>{
    const onClose = () => {
        setOpen(false);
      };
    return (
        <Drawer
        placement={"left"}
        width={400}
        onClose={onClose}
        className=''
        open={open}
        style={{background:"#efe6dc"}}  
      >
         <div className="flex flex-col gap-8 ">
         <NavLink  className="text-[#214344] font-[600] hover:text-[#214344]"  to={"/"} ><ShoppingCartOutlined  style={{fontSize:"20px"}}/> Home</NavLink>
         <NavLink  className="text-[#214344] font-[600] hover:text-[#214344]"  to={"/shop"} ><ShoppingCartOutlined style={{fontSize:"20px"}}/> Shop</NavLink>
         <NavLink  className="text-[#214344] font-[600] hover:text-[#214344]"> <ShoppingCartOutlined style={{fontSize:"20px"}}/>  wishlist</NavLink>
                <NavLink  className="text-[#214344] font-[600] hover:text-[#214344]"><ShoppingCartOutlined style={{fontSize:"20px"}} /> Cart</NavLink>
                </div>
      </Drawer>
    )
}
export default EasyMenuHeader;
// this is my mobile nav. end here