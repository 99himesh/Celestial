import { Button, Empty, Progress, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import image from "../../assets/women.jpg"
import { addToCartData, deleteCartData, getCartData } from "../../feature/categary/cartApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feature/categary/cartSlice";
import { addToWishList } from "../../feature/wishlist/wishlistSlice";
import { deleteWishlistData, getWishlistData } from "../../feature/wishlist/wishlistApi";
import { useNavigate } from "react-router";
import Loading from "../loading/Loading";
import DrawerLoader from "../loading/DrawerLoader";
import { toast } from "react-toastify";
const WishList=()=>{
    const dispatch=useDispatch();
    const wishlistData=useSelector(state=>state?.wish.wishlist)
    const navigate=useNavigate();
    const user=localStorage.getItem("userId")
    const [loading,setLoading]=useState(false)
   
    const getwishlistDataHandler=async()=>{
        setLoading(true)
        try {
            const data=await getWishlistData()
            dispatch(addToWishList(data?.wishlist))
            setLoading(false)
        } catch (error) {  
            setLoading(false)
        }
    }
   
    const deleteWishlistHandler=async(item)=>{
        setLoading(true)
        
      const items={userId:user,prodId: item.prodId }
        
        try {
        const data=await deleteWishlistData(items)  

        setLoading(false)
        toast.success(data?.message)
        getwishlistDataHandler();
      localStorage.setItem("wish",parseInt(wishlistData.length)-1)

        } catch (error) {
            setLoading(false)
        toast.error(error?.response?.data?.message)
            throw error;
        }
    }
    
    useEffect(()=>{
        getwishlistDataHandler();
    },[])
    if(loading) return <DrawerLoader/>
    return(
        <>
          <div className="cart w-full    px-5 min-h-[calc(100vh-85px)]    bg-[#efe6dc]  pb-3">
            <div className="overflow-y-auto  ">
            {wishlistData?.length==0 && <Empty imageStyle={{height:"200px"}}  description={<div >
            <h3  className="text-center font-[400] text-[24px] text-[#000]">Empty Wishlist</h3>
            <h4 className="text-center font-[400] text-[15px] text-[#000] py-3">You have no items in your wishlist. Start adding!</h4>
            <button onClick={()=>navigate("/shop")} className="bg-[#214344] text-[#fff] px-10 py-3 rounded-full text-[16px]">Shop</button>
            </div>} />}
        { wishlistData?.map((item,idx)=>{
            return(
          
       <div className="flex justify-between px-5 pt-5  w-full">
        <div  className=" flex gap-3">
            <div className="h-[100px] w-[100px]">
        <img src={item.image[0]} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[16px] font-[400] ">{item?.title}</Typography.Text>
            <Typography.Text className="text-[16px] font-bold">Rs {item?.price}</Typography.Text>
        </div>
        </div>
        
        <div className="pt-2 cursor-pointer" onClick={()=>{deleteWishlistHandler(item)}}>
        <DeleteOutlined  style={{fontSize:"30px"}}/>
        </div>
      
       </div>
        )
            
        })}
              <div className="pt-5">

{wishlistData.length!=0 && <Button className="w-full rounded-full bg-[#214344] font-semibold text-[#fff] hover:!text-[#214344] hover:!border-[#214344]" onClick={()=>{navigate("/wishlist")}}>Open WishList Page</Button>}
</div>
</div>
    
         </div>
        </>
    )
}
export default WishList;