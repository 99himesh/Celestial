import { Button, Empty, Progress, Typography } from "antd";
import CustomDrawer from "../CustomDrawer";
import { DeleteOutlined } from "@ant-design/icons";
import image from "../../assets/women.jpg"
import { addToCartData, deleteCartData, getCartData } from "../../feature/categary/cartApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../feature/categary/cartSlice";
import { useNavigate } from "react-router";
import Loading from "../loading/Loading";
import DrawerLoader from "../loading/drawerLoader.jsx";
// import DrawerLoader from "../loading/drawerLoader";
const Cart=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const cartData=useSelector(state=>state?.cart?.cart)
    const [loading,setLoading]=useState(false)
     console.log(cartData,"cart");
     
   let sum=0;
    const getCartDataHandler=async()=>{
        setLoading(true)
        
        try {
            
       
            const data=await getCartData()
            setLoading(false)
            
            dispatch(addToCart(data?.data?.cartItems))
        } catch (error) {
            
            if(error?.response?.data?.message==="No items in the cart"){
                dispatch(addToCart([]))  
            }
            setLoading(false)
        }
    }



    const deleteCartHandler=async(items)=>{
        setLoading(true)
        if(cartData.length===0) return
        const id=items.productId._id;
        try {
        const response=await deleteCartData(id)  
        if(response.status!="success") return
        getCartDataHandler()
        setLoading(false) 
        } catch (error) {
            setLoading(false)
            throw error;
            
        }
    }
    useEffect(()=>{
        getCartDataHandler();
    },[])
 

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
          sum+=item.price
            return(
          
       <div className="flex justify-between px-5 pt-5" key={idx}>
        <div  className=" flex gap-3">
            <div className="h-[100px] w-[100px]">
        <img src={item?.productId.images[0]} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[16px] font-[400] ">{item?.title}</Typography.Text>
            <Typography.Text className="text-[16px] font-bold">Rs {item?.price}</Typography.Text>
            {/* <button>+</button> */}
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