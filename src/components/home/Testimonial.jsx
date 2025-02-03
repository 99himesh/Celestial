import { Col, Row } from "antd";
import imageTest from "../../assets/men.jpg"
// import manyaImage from "../../assets/Manya.HEIC";
import divyanshi from "../../assets/Divyanshi.jpg"
import manya from "../../assets/Manya.png"
import pritiImage from  "../../assets/Priti.jpg" 
import { FcLike } from "react-icons/fc";
const Testimonial=()=>{
    return(
        <div className="textimonial py-20  ">
            <div className="w-full overflow-hidden flex justify-center  py-20   ">
            <h1 className="md:text-[55px]  text-[30px] text-center md:text-start  text-[#BFA785] font-[400]">Client Reviews & Testimonials</h1>
            </div>
    <Row className="py-10 relative  flex justify-between"    >
        <Col xl={8} lg={8} sm={24} xs={24}  >
        <div className="flex flex-col justify-center items-center gap-5 w-[70%] mx-auto p-5">
  <div className="w-[230px] mx-auto flex justify-center h-[300px] relative "> 
    {/* Rotate only the parent container */}
    <img 
      className=" rounded-full border-[3px] border-[#214344] " 
      src={manya} 
    />
  </div>
  <h4 className="text-[16px] font-[400] underline text-[#214344]">Manya Agarwal</h4>
  <p className="text-[14px] text-center">
    The earrings were very cute and
completely matched my vibe. 
Loved them a lot Thank you Zoci ❤
  </p>
</div>
        </Col>
        <Col xl={8} lg={8} sm={24} xs={24} className="py-[120px] bg-[#214344] absolute -top-[58px]  left-0 right-0 mx-auto" >
        <div className="flex flex-col justify-center items-center gap-5  w-[100%] mx-auto  bg-[#214344] px-5 ">
  <div className="w-[230px] mx-auto flex justify-center h-[300px] relative  "> 
    {/* Rotate only the parent container */}
    <img 
      className=" rounded-full border-[3px] border-[#BFA785] " 
      src={pritiImage} 
    />
  </div>
  <h4 className="text-[18px] font-[400] underline text-[#BFA785]">Priti Sabarwal</h4>
  <div className="w-[70%]">
  <p className="text-[16px] text-center text-[#BFA785]">
  The earrings and the colour of the stone
both look very pretty and unique.
Thank you Zoci ❤
  </p>
  </div>
</div></Col>
<Col xl={8} lg={8} sm={24} xs={24} >
        <div className="flex flex-col justify-center items-center gap-5 w-[100%] mx-auto p-5">
  <div className="w-[230px] mx-auto flex justify-center h-[300px] relative "> 
    {/* Rotate only the parent container */}
    <img 
      className=" rounded-full border-[3px] border-[#214344]" 
      src={divyanshi} 
    />
  </div>
  <h4 className="text-[16px] font-[400] underline text-[#214344]">Divyanshi Agarwal</h4>
  <p className="text-[14px] text-center">
Todo ... Thank you Zoci ❤
  </p>
</div></Col>
        </Row>
        </div>

    )
}
export default Testimonial;