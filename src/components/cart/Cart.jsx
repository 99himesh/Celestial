import { Progress, Typography } from "antd";
import CustomDrawer from "../CustomDrawer";
import { DeleteOutlined } from "@ant-design/icons";
import image from "../../assets/women.jpg"
import { addToCartData, deleteCartData, getCartData } from "../../feature/categary/cartApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feature/categary/cartSlice";
const Cart=()=>{
    const dispatch=useDispatch();
    const cartData=useSelector(state=>state.cart.cart)
    const [dataUpdated, setDataUpdated] = useState(false);
    const getCartDataHandler=async()=>{
        
        try {
            const data=await getCartData()
            console.log(data);
            dispatch(addToCart(data))
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getCartDataHandler();
    },[dataUpdated])
    console.log(cartData);
    const deleteCartHandler=async(id)=>{
        
        try {
        const data=await deleteCartData(id)  
        setDataUpdated((prev) => !prev);   
        } catch (error) {
            throw error;
            
        }
    }
    return(
        <>
          <div className="cart bg-[#efe6dc] px-5  py-10">
            <h4 className="text-start font-[400] text-[16px]">Congrats! You are eligible for more to enjoy FREE Shipping</h4>
            <Progress   />
            <div className="overflow-y-auto">
        { cartData?.map((item,idx)=>{
            return(
          
       <div className="flex justify-between px-5 pt-5">
        <div  className=" flex gap-3">
            <div className="h-[100px] w-[100px]">
        <img src={image} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[16px] font-[400] ">{item?.title}</Typography.Text>
            <Typography.Text className="text-[16px] font-bold">Rs {item?.price}</Typography.Text>
            {/* <button>+</button> */}
        </div>
        </div>
        
        <div className="pt-2 cursor-pointer" onClick={()=>{deleteCartHandler(item?.id)}}>
        <DeleteOutlined  style={{fontSize:"30px"}}/>
        </div>
       </div>
        )
            
        })}
        </div>
         </div>
        </>
    )
}
export default Cart;