import { Typography } from "antd";
import { Link } from "react-router";

const CustomSearch=({items,setOpen})=>{
    console.log(items);
    
    return (
     items?.map((item,idx)=>{
        return(
        <Link onClick={()=>{setOpen(false)}} to={`/product/${item._id}`} className="flex justify-between  px-2 pt-5 bg-[#efe6dc] rounded-xl shadow-xl py-5 mb-3 ">
        <div  className=" flex gap-3">
            <div className="h-[120px] w-[120px]">
        <img src={item?.images[0]} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[20px] font-[600]  ">{item?.title}</Typography.Text>
            <Typography.Text className="text-[14px] font-[600]">Rs {item?.price} x 1</Typography.Text>
        </div>
        </div>
        </Link>
        )
     })
        
    )
}
export default CustomSearch;