import { Link, NavLink } from "react-router"
import {MenuOutlined,ShoppingCartOutlined  } from '@ant-design/icons';
import { useState } from "react";
import EasyMenuHeader from "./EasyMenuHeader";
import { useSelector } from "react-redux";
import headerImage from "../../assets/header.webp"
    // This is my main Header. start here
const Header=()=>{
    const [open, setOpen] = useState(false);
    const cart=useSelector(state=>state.product.cart)
    const showDrawer = () => {
        setOpen(true);
      };
    return(
        <>
        <div className="header fixed w-full z-[999] bg-[#214344]">
            <div className="flex justify-between px-8 lg:py-3 py-1  items-center">
               
                <div>
                <NavLink  className="text-[#fff]  relative"><ShoppingCartOutlined style={{fontSize:"30px",color:"#F0D5A0"}} />{cart.length >0 && <div className="flex justify-center text-[#214344] items-center absolute  text-[10px] text-center -top-1 -left-5 h-[20px] w-[20px] rounded-full bg-[#000]">{ cart?.length}</div>}</NavLink>
                </div>
                <div>
            <Link to={"/"}><img src={headerImage} className="lg:h-[110px] h-[70px]"/></Link>
            </div>
            <div className="flex gap-8 ">
                <NavLink onClick={()=>{showDrawer()}} className="text-[#fff]">{<MenuOutlined  style={{fontSize:"24px",color:"#F0D5A0"}} />}</NavLink>
            </div>
            </div>
        </div>
        <EasyMenuHeader open={open} setOpen={setOpen} />
        </>
    )
}
export default Header;
    // This is my main Header end here
