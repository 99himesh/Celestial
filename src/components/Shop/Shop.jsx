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
import { TbPointFilled } from "react-icons/tb";
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
    
    <Row className="md:pt-[110px] pt-[70px] ">
      <div className="flex flex-wrap justify-between items-center w-[100%]   md:px-10 px-5  py-2 fixed z-10 bg-[#fff]">
        <div>
      <div className="flex flex-wrap gap-1 items-center ">      
            <h3 className="text-[#214344] text-[14px]">Home </h3>
            <TbPointFilled />
            <p className="text-[#214344] text-[16px] font-[400]">Pendents</p>

        </div>
        {/* <h2 className="text-[#214344] text-[26px] font-semibold">Pendents</h2> */}
        </div>
        <div>
      <Sorting setPaginateData={setPaginateData} item={item} paginateData={paginateData}/>

        </div>

      </div>

      <Col span={24}>
       
        <div className="md:px-20 px-5 pt-20 bg-[#eee5db] cursor-pointer ">
          <div className="py-5 cursor-pointer" >
            <CustomFilter />
          </div>
          </div> 
          <div className="px-10 bg-[#eee5db]  py-20">
          <ProductListing item={paginateData} />
          </div>
         
      </Col>
    </Row>
   
    </>
  
    
  )
}

export default Shop;


