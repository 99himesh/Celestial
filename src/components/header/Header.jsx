import { Link, NavLink } from "react-router"
import {MenuOutlined,ShoppingCartOutlined  } from '@ant-design/icons';
import { useEffect, useState } from "react";
import EasyMenuHeader from "./EasyMenuHeader";
import { useDispatch, useSelector } from "react-redux";
import headerImage from "../../assets/header.webp"
import CustomDrawer from "../CustomDrawer";
import Cart from "../cart/Cart";
import { ShopingBag, WishListIcon } from "../../icons/icon";
import { CiSearch } from "react-icons/ci";
import { getCartData } from "../../feature/categary/cartApi";
import { addToCart } from "../../feature/categary/cartSlice";
    // This is my main Header. start here
const Header=()=>{
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart?.cart)

      const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const cartShowDrawer = () => {
        setCartOpen(true);
      };
      const cartOnClose = () => {
        setCartOpen(false);
      };
const getDataCart=async()=>{
  try {
    const res=await getCartData();
    console.log(res);
    
    dispatch(addToCart(res))
    
  } catch (error) {
    
  }
}

useEffect(()=>{
  getDataCart()
},[])

    return(
        <>
        <div className="header fixed w-full z-[999] bg-[#214344]">
          
            <div className="flex justify-between px-8    items-center">
           
                <div className="flex md:gap-10 gap-5 items-center cursor-pointer">
                <div  onClick={cartShowDrawer}>
          <WishListIcon   />
          </div>
                <NavLink onClick={cartShowDrawer}  className="text-[#fff]  relative"><ShopingBag />{cart?.length >0 && <div className="flex justify-center  text-[#214344] items-center absolute  text-[10px] text-center top-1 -left-5 h-[20px] w-[20px] rounded-full bg-[#F0D5A0]">{ cart?.length}</div>}</NavLink>
                </div>
                <div>
            <Link to={"/"}><img src={headerImage} className="lg:h-[110px] h-[70px]"/></Link>
            </div>
            <div className="flex md:gap-10 gap-5 ">
            <CiSearch style={{fontSize:"24px",color:"F0D5A0"}} />
                <NavLink onClick={()=>{showDrawer()}} className="text-[#fff]">{<MenuOutlined  style={{fontSize:"24px",color:"#F0D5A0"}} />}</NavLink>
            </div>
            </div>
        </div>
        <EasyMenuHeader open={open} setOpen={setOpen} />
        <CustomDrawer component={<Cart/>} open={cartOpen} setOpen={setOpen} onClose={cartOnClose}/>

        </>
    )
}
export default Header;
    // This is my main Header end here
