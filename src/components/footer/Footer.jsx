import { Col, Row } from "antd";
import { Link } from "react-router";
import footerImage from "../../assets/header.webp"
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
const Footer=()=>{
    return(
      <div className="footer bg-[#214344]  pt-20">
        <div className="md:px-20 px-5">
        <Row >
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className="flex h-full justify-end  items-center px-10">
            <img className="h-[130px]" src={footerImage}/>
            </div>
            </Col>
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className="">
                <h6 className="text-[24px] font-bold text-[#F0D5A0]">Let Us Help You</h6>
                <div className="flex flex-col gap-3 pt-10">
                    <Link to={"/"} className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Home</Link>
                    <Link to={"/shop"} className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Shop</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Cart</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Orders</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">About Us</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Wishlist</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Order Traking</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Blog</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">FAQ</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Contact Us</Link>
                    
                </div>
            </div>
            </Col>
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className="">
                <h6 className="text-[24px] font-bold text-[#F0D5A0]">The Collection</h6>
                <div className="flex flex-col gap-3 pt-10 ">
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Signature Collection</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Personalized Pieces</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Regular Upkeep</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Nackles</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Earring</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Pendent</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Bracelet</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Rings</Link>
                </div>
            </div>
            </Col>
            <Col xl={6} lg={6} md={8} sm={12} xs={24}>
            <div className="">
                <h6 className="text-[24px] font-bold text-[#F0D5A0]">CONTACT DETAILS</h6>
                <div className="flex flex-col gap-3 pt-10">
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">(+91) 9616773377</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">hello@zoci.in</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Monday – Friday: 9:00AM - 20:00PM</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Santacruz East, Mumbai, Maharashtra 400055</Link>
                </div>
            </div>
            <div className="pt-10">
                <h6 className="text-[24px] font-bold text-[#F0D5A0]">HELP</h6>
                <div className="flex flex-col gap-3 pt-10">
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Jewelry Care Guide</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Privacy Policys</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Shipping Policy</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Terms and Conditions</Link>
                    <Link className="text-[#fff] hover:text-[#fff] text-[20px] font-semibold">Refund and exchange policy</Link>
                </div>
            </div>
            </Col>
        </Row>
        </div>
        <Row className="pt-5">
             <div className="flex w-full gap-5 justify-center  py-7 border-b-[0.5px] border-t-[1px] border-gray-500">
                <h4 className="text-[18px] font-bold text-[#F0D5A0] tracking-wide  ">Follow US</h4>
                <FacebookOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                <InstagramOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                <WhatsAppOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                <TwitterOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
                <InstagramOutlined style={{fontSize:"24px",color:"#F0D5A0"}} />
             </div>
             <div className="flex flex-wrap md:justify-between justify-center max-md:gap-5 md:px-20 px-5  w-full py-7">
                <div>
                <h6 className="text-[#fff] text-[14px] font-semibold">COPYRIGHT © 2024 ZOCI ALL RIGHTS RESERVED</h6>
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