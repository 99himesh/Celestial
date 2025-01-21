import { Progress, Typography } from "antd";
import CustomDrawer from "../CustomDrawer";
import { DeleteOutlined } from "@ant-design/icons";
import image from "../../assets/women.jpg"
const Cart=()=>{
    return(
        <>
        <div className="cart bg-[#efe6dc] h-full px-5  py-10">
            <h4 className="text-start font-[400] text-[16px]">Congrats! You are eligible for more to enjoy FREE Shipping</h4>
            <Progress   />
       <div className="flex justify-between px-5 pt-5">
        <div  className=" flex gap-3">
            <div className="h-[100px] w-[100px]">
        <img src={image} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[16px] font-[400] ">Congrats Congrats</Typography.Text>
            <Typography.Text className="text-[16px] font-bold">Rs 25000.00 x 1</Typography.Text>
            {/* <button>+</button> */}
        </div>
        </div>
        
        <div className="pt-2">
        <DeleteOutlined  style={{fontSize:"30px"}}/>
        </div>
       </div>
       </div>
        </>
    )
}
export default Cart;