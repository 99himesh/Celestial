import { Col, Drawer, Row, Typography } from "antd";
import { Pagination } from 'antd';
import ProductListing from "./ProductListing";
import { Select } from 'antd';
import { getProductApi, getProductApiPaginate, getProductApiSort, getProductFilterApi } from "../../feature/product/productApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../feature/product/productSlice";
import Loading from "../loading/Loading";
import CustomFilter from "./CustomFlter";
import Sorting from "./sorting";
import { TbPointFilled } from "react-icons/tb";
import { addproductToshop } from "../../feature/shop/shopSlice";
const Shop = () => {
  const [loading,setLoading]=useState(true);
  const dispatch = useDispatch()
const data=useSelector(state=>state?.shop?.shop)
const categary=useSelector(state=>state.shop.categary);

  console.log(data);
  
  
  const getProducts = async () => {
    const pagination = { page: 1, limit: 10, }
    const data = await getProductFilterApi(pagination)  
    console.log(data.products);
      
    if(data) setLoading(false)
  dispatch(addproductToshop(data?.products))
  }



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
  
  useEffect(() => {
    getProducts();
  }, [])
  
 if(loading) return <Loading/>
  return (
    <>
    
    <Row className="md:pt-[110px] pt-[70px] ">
      <div className="flex flex-wrap justify-between items-center w-[100%]   md:px-10 px-5  py-2 fixed z-10 bg-[#fff]">
        <div>
      <div className="flex flex-wrap gap-1 items-center ">      
            <h3 className="text-[#214344] text-[14px]">Home </h3>
            <TbPointFilled />
            <p className="text-[#214344] text-[16px] font-[400]">{categary.toUpperCase()}</p>

        </div>
        {/* <h2 className="text-[#214344] text-[26px] font-semibold">Pendents</h2> */}
        </div>
        <div>
      <Sorting  />

        </div>

      </div>

      <Col span={24}>
       
        <div className="md:px-20 px-5 pt-20 bg-[#eee5db] cursor-pointer ">
          <div className="py-5 cursor-pointer flex justify-center" >
            <CustomFilter />
          </div>
          </div> 
          <div className="px-10 bg-[#eee5db]  py-20">
          <ProductListing data={data} />
          </div>
         
      </Col>
    </Row>
   
    </>
  
    
  )
}

export default Shop;


