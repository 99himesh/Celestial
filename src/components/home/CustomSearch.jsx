import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getProductFilterApi } from "../../feature/product/productApi";
import { searchProducts } from "../../feature/product/productSlice";

const CustomSearch=({items,setOpen,search})=>{
    console.log(items);
  const dispatch = useDispatch();

  const searchData=useSelector(state=>state.product.searchData)
    
  const searchHandler=async(e)=>{
    try {
      const search={title:e.target.value}
      console.log(search);
      const res= await getProductFilterApi({search})
      dispatch(searchProducts(res.products))
      
      
    } catch (error) {
      console.log(error);
       
    }
  
}
console.log(searchData);
    
    return (
     items?.map((item,idx)=>{
        return(
            <>
            <div className="h-[100vh] absolute top-10 ">
            {search  && <Input onChange={(e)=>{
                searchHandler(e)
              }} className="bg-[#e4cc9b] border-none  rounded-full" placeholder="Search Your Products"/>
           }
       {search && <Link onClick={()=>{setOpen(false)}} to={`/product/${item._id}`} className="flex justify-between  px-2 pt-5 bg-[#efe6dc] rounded-xl shadow-xl py-5 mb-3 ">
        <div  className=" flex gap-3">
            <div className="h-[120px] w-[120px]">
        <img src={item?.images[0]} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[20px] font-[600]  ">{item?.title}</Typography.Text>
            <Typography.Text className="text-[14px] font-[600]">Rs {item?.price} x 1</Typography.Text>
        </div>
        </div>
        </Link>}
        </div>
        </>
        )
     })
        
    )
}
export default CustomSearch;