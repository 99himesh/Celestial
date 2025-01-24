import { Link, NavLink } from "react-router"
import {MenuOutlined,ShoppingCartOutlined  } from '@ant-design/icons';
import { useEffect, useState } from "react";
import EasyMenuHeader from "./EasyMenuHeader";
import { useDispatch, useSelector } from "react-redux";
import headerImage from "../../assets/header.png"
import CustomDrawer from "../CustomDrawer";
import Cart from "../cart/Cart";
import { MenuIcon, SerarchIcon, ShopingBag, WishListIcon } from "../../icons/icon";
import { CiSearch } from "react-icons/ci";
import { getCartData } from "../../feature/categary/cartApi";
import { addToCart } from "../../feature/categary/cartSlice";
import serach from "../../assets/search.png"
import bag from "../../assets/Bag.png"
import wishlist from "../../assets/wishlist.png"
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
          
            <div className="flex justify-between md:px-[56px] px-5 py-5    items-center">
           <div className="flex items-center">
                <div className="flex md:gap-[56px]  gap-5 items-center cursor-pointer">
                <div  onClick={cartShowDrawer} className="max-sm:hidden h-[32px] w-[31px] pt-[2px]">
          <img src={wishlist}/>
         
          </div>
          <NavLink onClick={cartShowDrawer}  className="text-[#fff]   relative"><div className="h-[28px] w-[25px]"><img className="object-fit" src={bag}/></div>{cart?.length >0 && <div className="flex justify-center  text-[#214344] items-center absolute  text-[10px] text-center top-1 -left-5 h-[20px] w-[20px] rounded-full bg-[#F0D5A0]">{ cart?.length}</div>}</NavLink>

                </div>
                </div>
                <div>
            <Link to={"/"}><img src={headerImage} className="lg:h-[70px] h-[70px]"/></Link>
            </div>
            <div className="flex items-center md:gap-[51px]  ">
              <div  className="max-sm:hidden h-[28px] w-[28px]">
          <img src={serach}  className="object-fit"/>
           </div>
           <div>
                <NavLink onClick={()=>{showDrawer()}} className="text-[#fff] ">{<MenuIcon   />}</NavLink>
                </div>
            </div>
            </div>
        </div>

        <div
        className={`fixed inset-0 transition-all duration-300 ${
          open ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        } ${open || cartOpen ? "z-[998]" : "z-[-1]"}`}
        onClick={onClose}
      ></div>
        <EasyMenuHeader open={open} setOpen={setOpen} />
        <CustomDrawer component={<Cart/>} open={cartOpen} setOpen={setOpen} onClose={cartOnClose}/>

        </>
    )
}
export default Header;
    // This is my main Header end here



// import { Link, NavLink } from "react-router";
// import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import { useEffect, useState } from "react";
// import EasyMenuHeader from "./EasyMenuHeader";
// import { useDispatch, useSelector } from "react-redux";
// import headerImage from "../../assets/header.png";
// import CustomDrawer from "../CustomDrawer";
// import Cart from "../cart/Cart";
// import { MenuIcon, SerarchIcon, ShopingBag, WishListIcon } from "../../icons/icon";
// import { CiSearch } from "react-icons/ci";
// import { getCartData } from "../../feature/categary/cartApi";
// import { addToCart } from "../../feature/categary/cartSlice";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart?.cart);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   const cartShowDrawer = () => {
//     setCartOpen(true);
//   };

//   const cartOnClose = () => {
//     setCartOpen(false);
//   };

//   const getDataCart = async () => {
//     try {
//       const res = await getCartData();
//       console.log(res);
//       dispatch(addToCart(res));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getDataCart();
//   }, []);

//   return (
//     <>
//       <div className="header fixed w-full z-[999] bg-[#214344]">
//         <div className="flex justify-between md:px-20 px-5 py-5 items-center">
//           <div className="flex md:gap-10 gap-5 items-center cursor-pointer">
//             <div onClick={cartShowDrawer} className="max-sm:hidden">
//               <WishListIcon />
//             </div>
//             <NavLink
//               onClick={cartShowDrawer}
//               className="text-[#fff] relative"
//             >
//               <ShopingBag />
//               {cart?.length > 0 && (
//                 <div className="flex justify-center text-[#214344] items-center absolute text-[10px] text-center top-1 -left-5 h-[20px] w-[20px] rounded-full bg-[#F0D5A0]">
//                   {cart?.length}
//                 </div>
//               )}
//             </NavLink>
//           </div>
//           <div>
//             <Link to={"/"}>
//               <img src={headerImage} className="lg:h-[70px] h-[70px]" />
//             </Link>
//           </div>
//           <div className="flex md:gap-10 gap-5">
//             <div className="max-sm:hidden">
//               <SerarchIcon />
//             </div>
//             <NavLink onClick={showDrawer} className="text-[#fff]">
//               {<MenuIcon />}
//             </NavLink>
//           </div>
//         </div>
//       </div>

//       {/* Wrapper for blur background */}
//       <div
//         className={`fixed inset-0 transition-all duration-300 ${
//           open ? " backdrop-blur-md" : "bg-transparent"
//         } `}
//         onClick={onClose}
//       ></div>

//       <EasyMenuHeader open={open} setOpen={setOpen} />
//       <CustomDrawer
//         component={<Cart />}
//         open={cartOpen}
//         setOpen={setOpen}
//         onClose={cartOnClose}
//       />
//     </>
//   );
// };

// export default Header;
