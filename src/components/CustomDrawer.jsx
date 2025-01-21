import { Drawer, Space, Tooltip } from "antd";
import Cart from "./cart/Cart";
import { CloseCircleOutlined, EyeFilled, ReloadOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { WishListIcon } from "../icons/icon";

const CustomDrawer=({open,onClose,title,placement,width})=>{
    return(
        <>
         <Drawer
        title={<div className="flex justify-between">
          <div onClick={onClose}><CloseCircleOutlined style={{background:"#fff" ,fontSize:"40px",borderRadius:"50%"}}/></div>
          <div className="flex gap-3">
          <Tooltip placement="left" title={"Cart"}> <button  className="text-white bg-[#F0D5A0] hover:bg-[#214344]  text-sm  p-2  rounded-full text-center"><ShoppingCartOutlined  style={{fontSize:"24px" ,color:"#214344"}} /></button></Tooltip>
          <Tooltip placement="left" title={"Add to Wishlist"}>  <div className="bg-[#214344] rounded-full p-2 cursor-pointer">
          <WishListIcon />
          </div>
          </Tooltip>
              <Tooltip placement="left" title={"Compare"}> <button  className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><ReloadOutlined  style={{fontSize:"24px" ,color:"#F0D5A0"}} /></button></Tooltip>
          </div>
        </div>}
        closable={false}
        placement={placement ?? "right"}
        width={width ?? 500}
        onClose={onClose}
        open={open}
        headerStyle={{background:"#214344"}}
      >
     <Cart/>
      </Drawer>
      </>
    )
}
export default CustomDrawer;