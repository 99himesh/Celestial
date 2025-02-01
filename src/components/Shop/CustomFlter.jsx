import { Button } from "antd";
import { getProductFilterApi } from "../../feature/product/productApi";
import { addproductToshop } from "../../feature/shop/shopSlice";
import { useDispatch } from "react-redux";

const CustomFilter=()=>{
    const dispatch=useDispatch();
    const filterSubcategary=async(data,status)=>{
        console.log(data,status);
        
        try {
          const filters={[data]:status}
          const res=await getProductFilterApi({filters});
          console.log(res);
          
          dispatch(addproductToshop(res?.products))  
        } catch (error) {
          console.log(error);
          
        }
      
      
        
      }
   return(
    
    <>
    <div className="filter flex flex-wrap max-md:justify-center items-center gap-5">
        <h3 className="text-[16px] text-[#214344] ">Fast Filter:</h3>
        <div className="flex flex-wrap gap-5  ">
            <Button  onClick={()=>{filterSubcategary("newlyCreated",true)}} className=" w-[150px] py-2 hover:!text-[#214344]  hover:!border-[#214344]  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">NEW ARRIVAL</Button>
            <button  onClick={()=>{filterSubcategary("madefor","Men")}} className="w-[150px] py-2  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">BEST SELLERS</button>
            <button  onClick={()=>{filterSubcategary("trending")}} className="w-[150px] py-2  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">TRENDING</button>
            <button  onClick={()=>{filterSubcategary("madefor","Men")}} className="w-[150px] py-2  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">MEN'S</button>
            <button  onClick={()=>{filterSubcategary("gifts")}} className="w-[150px] py-2 rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">GIFTS</button>
        </div>


    </div>
    </>

   )
}
export default CustomFilter;