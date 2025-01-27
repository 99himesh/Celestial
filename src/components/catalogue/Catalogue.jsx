import { Col, Row } from "antd";
import { useState } from "react";
import ring from "../../assets/rings.jpg"
const Catalogue=()=>{
    const [activeTab,setActiveTab]=useState("men")
    const [catalogueData,setCatalogueData]=useState(["Earring","Cufflinks","Bracelets","Rings","Pendants","Brooches","Chains","Walletchains"])
    const activeTabHandler=(categary)=>{

        setActiveTab(categary)
            if(categary==="men"){
                setCatalogueData(["Earring","Cufflinks","Bracelets","Rings","Pendants","Brooches","Chains","Walletchains"])
            }else{
                setCatalogueData(["Necklace","Brooch","Watch clip","Cufflinks","Bracelet","Rings","Earrings","Pendant"])

            }
       
    }
    console.log(catalogueData);
    
    return(
        <>
        <div className="px-10 pt-3 flex flex-col items-center">
        <div className="flex gap-5 pt-3">
            <button onClick={()=>activeTabHandler("men")} className={`${activeTab=="men" ? "bg-[#214344] text-[#efe6dc]":"border-[3px] border-[#214344] text-[#214344]"  } md:w-[150px] w-[100px] py-2 rounded-full `} >Mens</button>
            <button onClick={()=>activeTabHandler("women")} className={`${activeTab=="women" ? "bg-[#214344] text-[#efe6dc]":"border-[3px] border-[#214344] text-[#214344]"  }  md:w-[150px] w-[100px] py-2 rounded-full `} >WoMens</button>
        </div>
        <h2 className="text-[#214344] text-[20px] font-[400] text-center pt-3 ">All Products Categories</h2>

        <div>
            <Row gutter={[10,10]} className="pt-3" justify={"center"}>
            {catalogueData?.map((item,idx)=>{
                return(
                    <Col xl={8} lg={8} md={8} sm={8} xs={12}>
                   <div className="flex flex-col   justify-center items-center ">

                     <img src={ring} className="rounded-full h-[100px] w-[100px]"/>
                     <h4 className="text-[16px] text-[#214344] text-center ">{item}</h4>
                   </div>
                      
                       
                    </Col>
                )
            })}
            </Row>
        </div>
        </div>
        
        </>
    )
}
export default Catalogue;