import { Button, Empty, Progress, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import image from "../../assets/women.jpg"
import { addToCartData, deleteCartData, getCartData, updateCartApi } from "../../feature/categary/cartApi.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feature/categary/cartSlice.js";
import { useNavigate } from "react-router";
import DrawerLoader from "../loading/DrawerLoader.jsx";
import { toast } from "react-toastify";
const Cart=()=>{
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const cartData=useSelector(state=>state?.cart?.cart)
    const [loading,setLoading]=useState(false)
    const cart=useSelector(state=>state.cart.cartLenght)
    const [cartCounter,setCartCounter]=useState(1)
    
     
   let sum=0;
    const getCartDataHandler=async()=>{
        if(!localStorage.getItem("token")) return toast.error("Please login first");
        setLoading(true)
        
        try {
            
       
            const data=await getCartData()
            // setCartCounter(data[0].quantity)
            setLoading(false)
            
            dispatch(addToCart(data?.data?.cartItems))
        } catch (error) {
            
            if(error?.response?.data?.message==="No items in the cart"){
                dispatch(addToCart([]))  
            }
            setLoading(false)
        }
    }

const cartCounterHandler=async(items,status)=>{
    console.log(items);
    let quantity=items.quantity
    if(quantity===0 && status==="minus") return;
    if(status==="plus")   quantity+=1
    if(status==="minus")  quantity-=1
        try {
    const data={productId:items.productId._id,quantity:quantity,userId:localStorage.getItem("userId")}
    console.log(data);
    
    const res=await updateCartApi(data);
    console.log(res);
    setCartCounter(res?.data?.quantity)
    toast.success(res?.data?.message)
    getCartDataHandler()  
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
            
        }
    
    
    
}

    const deleteCartHandler=async(items)=>{
        setLoading(true)
        if(cartData.length===0) return
        const id=items.productId._id;
        try {
        const response=await deleteCartData(id)  
        toast.success(response?.data?.message)
        localStorage.setItem("cart",parseInt(cart)-1)
        getCartDataHandler()
        } catch (error) {
            toast.error(error?.response?.data?.message)
            throw error;
            
        }
    }
    useEffect(() => {
       getCartDataHandler()
    }, []);
 
console.log(cartData);

  if(loading) return <DrawerLoader/>
   
    return(
        <>
        <div className="bg-[#efe6dc] min-h-[calc(100vh-85px)]  w-full ">
          <div className="cart  px-5 w-full h-auto pb-3">
            {/* <Progress   /> */}
            <div className="overflow-y-auto  pt-5">
            {cartData?.length==0 && <Empty imageStyle={{height:"200px"}} description={<div>
            <Progress   />
            <h4 className="text-start text-[#000] font-[400] text-[15px]">Congrats! You are eligible for more to enjoy FREE Shipping</h4>
            </div>} />}

        { cartData?.map((item,idx)=>{
            console.log(item.title);
                        
          sum+=item.price
            return(
          
       <div className="flex justify-between px-5 pt-5" key={idx}>
        <div  className=" flex gap-3">
            <div className="h-[100px] w-[100px]">
        <img src={item?.productId?.images[0]} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col  gap-2">
            <Typography.Text className="text-[16px] font-[400] ">{item?.productId?.title}</Typography.Text>
            <Typography.Text className="text-[16px] font-bold">Rs {item?.price}</Typography.Text>
            {/* <div className="flex gap-2 items-center">
            <Button onClick={()=>{cartCounterHandler(item,"minus")}} className="p-3 bg-[#214344] text-[10px] text-[#fff] hover:!text-[#214344] hover:!border-[#214344] rounded-full">-</Button>
                <Typography.Text className="text-[16px] font-[400]">{cartCounter}</Typography.Text>
            <Button  onClick={()=>{cartCounterHandler(item,"plus")}} className="p-3 bg-[#214344] flex text-[10px] text-[#fff] hover:!text-[#214344] rounded-full hover:!border-[#214344]">+</Button>
            </div> */}
        </div>
        
        </div>
        
        <div className="pt-2 cursor-pointer" onClick={()=>{deleteCartHandler(item)}}>
        <DeleteOutlined  style={{fontSize:"30px"}}/>
        </div>
        
       </div>

        )
            
        })}

        </div>
      {cartData?.length>0 &&  <div className="total">
        <div>
            <div className="flex justify-between px-5 pt-4">
                <h3 className="text-[14px] font-[600]">Sub Total :</h3>
                <h3 className="text-[14px] font-[600]">Rs. {sum}</h3>
            </div>
            <div className="flex justify-between px-5 pt-2">
                <h3 className="text-[14px] font-[600]"> Total :</h3>
                <h3 className="text-[14px] font-[600]">Rs. {sum}</h3>
            </div>
            <div >
          
        </div>
        </div>
        <div className="flex  justify-between pt-3">
            <div >
                <Button className="bg-[#214344] text-[#fff] text-[16px] md:w-[210px] w-[150px] font-[400] rounded-full py-5 hover:!border-[#214344] hover:!text-[#214344]" onClick={()=>{navigate("/viewcart")}} >View Cart</Button>
            </div>
            <div >
                <Button className="bg-[#214344] text-[#fff] text-[16px]  md:w-[210px] w-[150px] font-[400] rounded-full py-5 hover:!border-[#214344] hover:!text-[#214344]"  >Checkout</Button>
            </div>
        </div>
        </div>}
         </div>
         </div>
        </>
    )
}
export default Cart;