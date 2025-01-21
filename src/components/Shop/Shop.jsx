import { Col, Drawer, Row, Typography } from "antd";
import { Pagination } from 'antd';
import ProductListing from "./ProductListing";
import { Select } from 'antd';
import { getProductApi, getProductApiPaginate, getProductApiSort } from "../../feature/product/productApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../feature/product/productSlice";
import Loading from "../loading/Loading";
import CustomFilter from "./CustomFlter";
import Sorting from "./sorting";
const Shop = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [loading,setLoading]=useState(true);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const [current, setCurrent] = useState();
  const [paginateData, setPaginateData] = useState([])
  const item = useSelector(state => state.product?.products)
 
  const getAllProduct = async () => {
    const data = await getProductApi();
    if(data) setLoading(false)
    dispatch(addProducts(data))
  }
  const getProducts = async () => {
    const pagination = { _start: 10, _end: 20, limit: 100, }
    const data = await getProductApiPaginate(pagination)
    if(data) setLoading(false)
    setPaginateData(data)
  }
  console.log(paginateData);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = document.getElementById("stickyContainer");
      const rect = stickyElement.getBoundingClientRect();
      setIsSticky(rect.top <= 120); // Match the `top-[120px]` value
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    getProducts();
    getAllProduct()
  }, [])
  
 if(loading) return <Loading/>
  return (
    <>
    
    <Row className="pt-[130px] bg-[]">
      <Col>
       
        <div className="md:px-20 px-5 pt-10 bg-[#eee5db] cursor-pointer ">
          <div className="pt-10 " onClick={(e)=>{showDrawer(e)}}>
            <CustomFilter />

          </div>
          </div>
          <div     id="stickyContainer"
      className={`sticky w-full top-[120px] z-10 transition-colors bg-[#eee5db]c px-5 pt-5 ${
        isSticky ? "!bg-[#214344]" : "bg-[#eee5db]"
      }`}>
          
            <Sorting setPaginateData={setPaginateData} item={item} paginateData={paginateData}/>
          </div>
          <div className="px-20 bg-[#eee5db]">
          <ProductListing item={paginateData} />
          </div>
         
      </Col>
    </Row>
    <Drawer
        title="Drawer with extra actions"
        placement={"left"}
        width={500}
        onClose={onClose}
        open={open}
      
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  
    
  )
}

export default Shop;


