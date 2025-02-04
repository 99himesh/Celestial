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
const WishList=()=>{
    const dispatch=useDispatch();
    const [deleteUpdate,setDeleteUpdate]=useState(false)
    const wishlistData=useSelector(state=>state?.wish.wishlist)
    const navigate=useNavigate();
    const user=localStorage.getItem("userId")
   
    const getwishlistDataHandler=async()=>{
        try {
            const data=await getWishlistData()
            console.log(data.wishlist   );
            
            dispatch(addToWishList(data.wishlist))
        } catch (error) {   
        }
    }
   
    const deleteWishlistHandler=async(item)=>{
        console.log(item);
        
      const items={userId:user,prodId: item.prodId }
        
        try {
        const data=await deleteWishlistData(items)  
        setDeleteUpdate(true)   
        } catch (error) {
            throw error;
            
        }
    }
    console.log(wishlistData);
    
    useEffect(()=>{
        getwishlistDataHandler();
    },[deleteUpdate,dispatch])
    return(
        <>
          <div className="cart w-full    px-5  py-16 bg-[#efe6dc] h-[100%]">
            <div className="overflow-y-auto  ">
            {/* <Progress   /> */}

            {wishlistData?.length==0 && <Empty imageStyle={{height:"200px"}}  description={<div >
            {/* <Progress   />  */}
            <h3  className="text-center font-[400] text-[24px] text-[#000]">Empty Wishlist</h3>
            <h4 className="text-center font-[400] text-[15px] text-[#000] py-3">You have no items in your wishlist. Start adding!</h4>
<button className="bg-[#214344] text-[#fff] px-10 py-3 rounded-full text-[16px]">Shop</button>
            </div>} />}
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