
import React, { useEffect, useState } from 'react';
import MensProduct from './MensProducts';
import WomenProducts from './WomenProducts';
import { getProductApi } from '../../feature/product/productApi';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../feature/product/productSlice';
import SubCategary from './SubCategary';
import { Link } from 'react-router';
import Testimonial from './Testimonial';
import Loading from '../loading/Loading';
const CategarySection = () => {
  const [loading,setLoading]=useState(true)  
  const [categary,setCategary]=useState("men");
  const dispatch = useDispatch();
  const getProduct = async () => {
    const data = await getProductApi();
    if(data){
      setLoading(false)
    }
    dispatch(addProducts(data))
  }
  useEffect(() => {
    getProduct(); 
  }, [])
  const buttonactive={background:"#214344",color:"#f0d5a0"}
  const buttonInActive={color:"#214344",border:"3px solid #214344"}
  if(loading) return<Loading/>
  return (
    <>
      <div className="bg-[#efe6dc]">
        <div >
          <div className='px-10'>
        <h3 className='pt-9 text-[#214344] font-[450] md:text-[65px] text-[24px] text-center'>Shop By Category</h3>
        <h3 className=' text-[#214344] font-[500]  md:text-[20px] text-[12px] text-center'>Browse through your favorite categories. We’ve got them all!
        </h3>
        </div>
        <div className='flex  max-md:gap-10 justify-around py-[68px]'>
        <div>
          <button onClick={()=>{setCategary("men")}} style={categary=="men" ? buttonactive:buttonInActive} className='cursor-pointer text-center py-[5px] md:py-[15px]  text-[16px] md:text-[25px] px-[50px] md:px-[120px]  rounded-full'>Women's</button>
          </div>
          <button onClick={()=>{setCategary("women")}} style={categary=="women" ? buttonactive:buttonInActive} className='cursor-pointer text-center py-[3px] md:py-[13px] md:text-[25px] text-[16px] md:px-[120px] px-[60px] min-w-[150px]   rounded-full'>Men's</button>
        </div>
        </div>

        <SubCategary/>
        <div>
        <h3 className='pt-20 text-[#214344] md:font-[500] md:text-[65px] text-[20px] text-center'>Top Sellers</h3>
        <h3 className=' text-[#214344] font-[500] text-[20px] text-center'>Our Most Loved Products</h3>
        <div className='md:flex  md:gap-5 justify-start md:justify-between md:px-20 px-5 items-center pt-5'>
          <div className='md:flex  md:gap-5 items-center md:justify-start '>
            <h4 className='text-[24px] font-bold '>All Products</h4>
          <p className='text-[16px] font-semibold text-gray-500'>Dont miss out on this weeks deals</p>
          </div>
          <div><Link  className='text-[16px]  font-semibold  text-gray-600' to="/shop">View All</Link></div>
        </div>
        </div>
        
       {categary==="men" ?<MensProduct /> : <WomenProducts />}
       <div className='py-20'>
       <Testimonial/>
       </div>
      </div>
    </>
  )
}

export default CategarySection;