import { Link, NavLink } from "react-router"
import {MenuOutlined,ShoppingCartOutlined  } from '@ant-design/icons';
import { useEffect, useState } from "react";
import EasyMenuHeader from "./EasyMenuHeader";
import { useDispatch, useSelector } from "react-redux";
import headerImage from "../../assets/header.png"
import CustomDrawer from "../CustomDrawer";
import Cart from "../cart/Cart";
import { getCartData } from "../../feature/categary/cartApi";
import { addToCart } from "../../feature/categary/cartSlice";
import serach from "../../assets/search.png"
import bag from "../../assets/Bag.png"
import wishlist from "../../assets/wishlist.png"
import menuIcon from "../../assets/Menuicon.png"
import { Input } from "antd";
import { getProductFilterApi } from "../../feature/product/productApi";
import { searchProducts } from "../../feature/product/productSlice";
import CustomSearch from "../home/CustomSearch";
    // This is my main Header. start here
const Header=()=>{
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const dispatch=useDispatch();
    const [search,setSearch]=useState(false)
    const cart=useSelector(state=>state.cart?.cart)
  const searchData=useSelector(state=>state.product.searchData)

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
    dispatch(addToCart(res?.data?.cartItems))
    
  } catch (error) {
    
  }
}

console.log(search);


useEffect(()=>{
  getDataCart()
},[])

    return(
        <>
        <div className={`header fixed w-full z-[999] bg-[#214344]    ${open?"backdrop-blur-md":"bg-[#214344]"}`}>   
            <div className="flex justify-between md:px-[56px] px-[30px] py-5    items-center">
           <div className="flex items-center">
                <div className="flex md:gap-[56px]  gap-5 items-center cursor-pointer">
                <div  onClick={cartShowDrawer} className="max-sm:hidden h-[32px] w-[31px] pt-[2px]">
          <img src={wishlist}/>
         
          </div>
          <NavLink onClick={cartShowDrawer}  className="text-[#fff]   relative"><div className="md:h-[28px] h-[20px] md:w-[25px] w-[16px]"><img className="object-fit" src={bag}/></div>{cart?.length >0 && <div className="flex justify-center  text-[#214344] items-center absolute  text-[10px] text-center  -top-1  -right-3 h-[16px] w-[16px] rounded-full bg-[#F0D5A0]">{ cart?.length}</div>}</NavLink>

                </div>
                </div>
                <div>
            <Link to={"/"}><img src={headerImage} className="lg:h-[70px] h-[35px]"/></Link>
            </div>
            <div   className="flex gap-[51px]  cursor-pointer">
            {/* {search && <Input onChange={(e)=>{
              searchHandler(e)
            }} className="bg-[#e4cc9b] border-none  rounded-full" placeholder="Search Your Products"/>
         } */}
            <div className="flex items-center md:gap-[51px]  ">

              <div onClick={()=>{setSearch(prev=>!prev)}}   className="max-sm:hidden h-[28px] w-[28px]">
          <img src={serach}  className="object-fit"/>
           </div>
           <div className="">
                <NavLink onClick={()=>{showDrawer()}} className="text-[#fff] ">{<div className=" md:h-[12px] md:w-[24px] h-[8px] w-[18px]"><img className="object-fit" src={menuIcon}/></div>}</NavLink>
                </div>
            </div>
            </div>
        </div>
        </div>
       

        <div
        className={`fixed inset-0 transition-all duration-300 ${
          open ? " backdrop-blur-md" : "bg-transparent"
        } ${open || cartOpen ? "z-[998]" : "z-[-1]"}`}
        onClick={onClose}
      ></div>
       <CustomSearch search={search} items={searchData} />
    

        <EasyMenuHeader open={open} setOpen={setOpen} />
        <CustomDrawer component={<Cart/>} open={cartOpen} setOpen={setOpen} onClose={cartOnClose}/>

        </>
    )
}
export default Header;
 