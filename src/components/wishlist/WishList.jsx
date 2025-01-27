import { Progress, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import image from "../../assets/women.jpg"
import { addToCartData, deleteCartData, getCartData } from "../../feature/categary/cartApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feature/categary/cartSlice";
import { addToWishList } from "../../feature/wishlist/wishlistSlice";
import { deleteWishlistData, getWishlistData } from "../../feature/wishlist/wishlistApi";
const WishList=()=>{
    const dispatch=useDispatch();
    const [deleteUpdate,setDeleteUpdate]=useState(false)
    const wishlistData=useSelector(state=>state?.wish.wishlist)
    console.log(wishlistData);
   
    const getwishlistDataHandler=async()=>{
        try {
            const data=await getWishlistData()
            dispatch(addToWishList(data))
        } catch (error) {   
        }
    }
   
    const deleteWishlistHandler=async(id)=>{
        debugger
        try {
        const data=await deleteWishlistData(id)  
        setDeleteUpdate(true)   
        } catch (error) {
            throw error;
            
        }
    }
    useEffect(()=>{
        getwishlistDataHandler();
    },[deleteUpdate])
    return(
        <>
          <div className="cart bg-[#efe6dc]   px-5  py-10">
            <h4 className="text-start font-[400] text-[16px]">Congrats! You are eligible for more to enjoy FREE Shipping</h4>
            <Progress   />
        { wishlistData?.map((item,idx)=>{
            return(
          
       <div className="flex justify-between px-5 pt-5 ">
        <div  className=" flex gap-3">
            <div className="h-[100px] w-[100px]">
        <img src={image} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[16px] font-[400] ">{item?.title}</Typography.Text>
            <Typography.Text className="text-[16px] font-bold">Rs {item?.price}</Typography.Text>
            <button>+</button>
        </div>
        </div>
        
        <div className="pt-2 cursor-pointer" onClick={()=>{deleteWishlistHandler(item?.id)}}>
        <DeleteOutlined  style={{fontSize:"30px"}}/>
        </div>
       </div>
        )
            
        })}
         </div>
        </>
    )
}
export default WishList;