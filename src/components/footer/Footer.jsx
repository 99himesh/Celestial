import { Col, Row } from "antd";
import { Link } from "react-router";
import footerImage from "../../assets/header.png"
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getProductFilterApi } from "../../feature/product/productApi";
import { addCategary, addproductToshop } from "../../feature/shop/shopSlice";
const Footer=()=>{
    const year=new Date().getFullYear();
    const dispatch=useDispatch();

    const filterSubcategary=async(data)=>{
      
      try {
        const filters={category:data}
        const res=await getProductFilterApi({filters});
        console.log(res);
        
        dispatch(addproductToshop(res?.products)) 
        dispatch(addCategary(data))   
      } catch (error) {
        console.log(error);
        
      }
    
    
      
    }
    return(
      <div className="footer bg-[#214344]  pt-20 ">
        <div className="md:px-20 px-5 " >
        <Row >
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className="flex h-full justify-end  items-center px-10" >
            <img className="" src={footerImage}/>
            </div>
            </Col>
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className=""  >
                <h6 className="text-[24px]  text-[#F0D5A0]" >Let Us Help You</h6>
                <div className="flex flex-col gap-3 pt-10">
                    <Link to={"/"} className="text-[#fff] hover:text-[#fff] text-[20px] ">Home</Link>
                    <Link to={"/shop"} className="text-[#fff] hover:text-[#fff] text-[20px] ">Shop</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Cart</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Orders</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">About Us</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Wishlist</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Order Traking</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Blog</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">FAQ</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Contact Us</Link>
                    
                </div>
            </div>
            </Col>
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className=""   >
                <h6 className="text-[24px]  text-[#F0D5A0]">The Collection</h6>
                <div className="flex flex-col gap-3 pt-10 ">
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer">Signature Collection</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer">Personalized Pieces</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer">Regular Upkeep</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer" onClick={()=>{filterSubcategary("nackeless")}}>Nackles</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer" onClick={()=>{filterSubcategary("earings")}}>Earring</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer" onClick={()=>{filterSubcategary("pendents")}}>Pendent</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer" onClick={()=>{filterSubcategary("bracelets")}}>Bracelet</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] cursor-pointer" onClick={()=>{filterSubcategary("ring")}}>Rings</Link>
                </div>


{/* 



 <NavLink  onClick={()=>{filterSubcategary("pendents")}}  className={"hover:text-[#214344]"} to={"/shop"}><HomeOutlined />Pendents</NavLink>
            <NavLink  onClick={()=>{filterSubcategary("ring")}}   className={"hover:text-[#214344]"} to={"/shop"}><HomeOutlined /> Rings</NavLink>
            <NavLink  onClick={()=>{filterSubcategary("bracelets")}}  className={"hover:text-[#214344]"} to={"/shop"}><HomeOutlined />Bracelets</NavLink>
            <NavLink  onClick={()=>{filterSubcategary("earings")}}  className={"hover:text-[#214344]"} to={"/shop"}><HomeOutlined />Earings</NavLink>
            <NavLink  onClick={()=>{filterSubcategary("nackeless")}}  
*/}


            </div>
            </Col>
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className=""  >
                <h6 className="text-[24px]  text-[#F0D5A0]">Contact Details</h6>
                <div className="flex flex-col gap-3 pt-10">
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">hello@zoci.in</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Monday – Friday: 9:00AM - 20:00PM</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Santacruz East, Mumbai, Maharashtra 400055</Link>
                </div>
            </div>
            <div className="pt-10"  >
                <h6 className="text-[24px]  text-[#F0D5A0]">HELP</h6>
                <div className="flex flex-col gap-3 pt-10">
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Jewelry Care Guide</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Privacy Policys</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Shipping Policy</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Terms and Conditions</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] ">Refund and exchange policy</Link>
                </div>
            </div>
            </Col>
        </Row>
        </div>
        <Row className="pt-5" >
             <div className="flex w-full gap-5 justify-center  py-7 border-b-[0.5px] border-t-[1px] border-gray-500"  >
                <h4 className="text-[18px] font-bold text-[#F0D5A0] tracking-wide  ">Follow US</h4>
                <FacebookOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                <InstagramOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                <WhatsAppOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                <TwitterOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                {/* <InstagramOutlined style={{fontSize:"24px",color:"#F0D5A0"}} /> */}
             </div>
             <div className="flex flex-wrap md:justify-between justify-center max-md:gap-5 md:px-20 px-5  w-full py-7"  >
                <div>
                <h6 className="text-[#fff] text-[14px] font-semibold">COPYRIGHT © {year} ZOCI ALL RIGHTS RESERVED</h6>
                </div>
                <div>
                <h6 className="text-[#fff] text-[14px] font-semibold">DESIGN & DEVELOPED BY TAP FOR TECH</h6>
                </div>
             </div>
        </Row>
      </div>
    )
}
export default Footer;