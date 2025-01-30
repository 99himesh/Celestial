import { DeleteOutlined } from "@ant-design/icons";
import { Empty, Flex, Progress, Typography } from "antd";
import { useSelector } from "react-redux"
import image from "../../assets/girl.jpg"
const WishlistView=()=>{
    const wishListData=useSelector(state=>state?.wish?.wishlist)
    let sum=0;
    return(
        <>
        <div className="pt-[110px] px-20 bg-[#efe6dc]">
        <Typography.Text className="text-[30px] font-semibold">Your Wishlist</Typography.Text>


        {wishListData?.length>0 ? wishListData?.map((item,idx)=>{
          sum+=item.price
            return(
          
       <div key={idx} className="flex justify-between px-5 pt-5 bg-[#efe6dc] shadow-xl rounded-xl py-4 mb-3 ">
        <div  className=" flex gap-3">
            <div className="h-[100px] w-[100px]">
        <img src={image} className="w-full h-full rounded-xl"/>
        </div>
        <div className="flex flex-col pt-2">
            <Typography.Text className="text-[16px] font-semibold ">{item?.title}</Typography.Text>
            <Typography.Text className="text-[16px] font-bold">Rs {item?.price} </Typography.Text>
            <Typography.Text className="text-[14px] text-[#214344] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </Typography.Text>
            {/* <button>+</button> */}
            <Flex vertical>
              <Progress   showInfo={false} trailColor="white" percent={null} status="active" />
              <div className="flex justify-between">
                <div className="flex gap-1">
              <Typography.Text className="font-semibold text-[14px] text-[#214344] ">Sold : </Typography.Text>
              <Typography.Text className="font-bold text-[14px] text-[#214344] ">{item?.sold}</Typography.Text>
              </div>
             <div className="flex gap-1">            
                <Typography.Text className="font-semibold text-[#214344]">Available :</Typography.Text>
              <Typography.Text className="font-bold text-[14px] text-[#214344] ">{item?.quantity}</Typography.Text>
              </div>
              </div>
            </Flex>
        </div>
        </div>
        
        <div className="pt-2 cursor-pointer" onClick={()=>{deleteCartHandler(item?.id)}}>
        <DeleteOutlined  style={{fontSize:"30px",color:"#214344"}}/>
        </div>
       </div>
        )
            
        }):<Empty/>}
        </div>

        </>
    )
}
export default WishlistView;