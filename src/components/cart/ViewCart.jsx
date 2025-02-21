import { useDispatch, useSelector } from "react-redux"
import { Button, Col, Empty, Input, Row, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from 'antd';
import { useEffect, useState } from "react";
import { deleteCartData, getCartData } from "../../feature/categary/cartApi";
import { addToCart } from "../../feature/categary/cartSlice";
import { toast } from "react-toastify";

const ViewCart=()=>{
    



    const dispatch=useDispatch();
    const cartData=useSelector(state=>state.cart.cart)
    
   let sum=0;
    const getCartDataHandler=async()=>{
        
        try {
            const response=await getCartData()
            dispatch(addToCart(data))
        } catch (error) {
             if(error?.response?.data?.message==="No items in the cart"){
                dispatch(addToCart([]))  
        }
        }
    }

    const deleteCartHandler=async(items)=>{
        try {
            const id=items.productId._id;
        const response=await deleteCartData(id) 
        getCartDataHandler();
        localStorage.setItem("cart",parseInt(cartData.length)-1)

        if(response.status!="success") return
         toast.success(response?.data?.message) 
        getCartDataHandler() 

        } catch (error) {
            toast.error(error?.response?.data?.message)
            throw error;
            
        }
    }
    useEffect(()=>{
        getCartDataHandler();
    },[])
    useEffect(() => {
      window.scrollTo(0, 0);
    },[])
    return (
        <div className="view-cart pt-[110px] px-20 py-20 bg-[#efe6dc]">
        <Typography.Text className="text-[30px] font-semibold">Your cart</Typography.Text>
        <Row gutter={[20,20]} >
            <Col span={16} className="pt-2" >
            <div className="h-[400px] overflow-auto ps-3 pe-5">
            {cartData?.length>0 ? cartData?.map((item,idx)=>{
                    console.log(item);
                    
             sum+=item.price*item.quantity
            return(
       <div className="flex justify-between px-5 pt-5 bg-[#efe6dc] rounded-xl shadow-xl py-5 mb-3 ">
        <div  className=" flex gap-3">
            <div className="h-[120px] w-[120px]">
        <img src={item?.productId?.images[0]} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[20px] font-[600]  ">{item?.productId?.title}</Typography.Text>
            <Typography.Text className="text-[14px] font-[600]">Rs {item?.price} x {item?.quantity}</Typography.Text>
            {/* <button>+</button> */}
        </div>
        </div>
        
        <div className="pt-2 cursor-pointer" onClick={()=>{deleteCartHandler(item)}}>
        <DeleteOutlined  style={{fontSize:"30px",color:"#214344"}}/>
        </div>
       </div>
        )
            
        }):<Empty/>}
        </div>
   <div className="coupan flex gap-5 pt-5">

<Input 
className="px-4 py-1 rounded-full hover:border-[#214344] "
 placeholder="Enter Coupon"
/>
<Button className="rounded-full bg-[#214344]  text-[#fff] py-2 px-7 font-semibold hover:bg-transparent fontsemibold hover:!text-[#214344] hover:!border-[#214344]">Apply coupon</Button>

</div>
            </Col>
            <Col span={8} className="pt-2 ">
            <div className="shadow-2xl rounded-2xl">
            <Card title={<Typography.Text className="text-[20px]  font-bold text-[#214344] " >Cart Total</Typography.Text>} bordered={false} style={{ background:"#efe6dc" }}>
            <div className="flex justify-between ">
                <h3 className="text-[14px] font-[600]">Sub Total :</h3>
                <h3 className="text-[14px] font-[600]">Rs. {sum}.00</h3>
            </div>
            <div className="flex justify-between ">
                <h3 className="text-[14px] font-[600]"> Total :</h3>
                <h3 className="text-[14px] font-[600]">Rs. {sum}.00</h3>
        </div>
        <div className="pt-3">
  <Button className="bg-[#214344] border-none text-[#fff] py-2 rounded-full font-semibold hover:!text-[#214344]">Checkout</Button>
  </div>
  </Card>
  </div>
            </Col>
        </Row>
     
        </div>
   
    )
}
export default ViewCart;