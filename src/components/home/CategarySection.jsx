
import React, { useEffect, useState } from 'react';
import { getProductApi } from '../../feature/product/productApi';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../feature/product/productSlice';
import SubCategary from './SubCategary';
import { Link } from 'react-router';
import Testimonial from './Testimonial';
import Loading from '../loading/Loading';
import TopSellerProduct from './Products';
const CategarySection = () => {
  const [categary,setCategary]=useState("men");
  const dispatch = useDispatch();


  const buttonactive={background:"#214344",color:"#f0d5a0"}
  const buttonInActive={color:"#214344",border:"3px solid #214344"}
  return (
    <>
      <div className="bg-[#efe6dc] ">
        <div  className='md:w-[78%] w-[100%] mx-auto'> 
          <div className='md:px-10'>
        <h3 className='pt-9 text-[#214344] font-[450] md:text-[65px] text-[24px] text-center'>Shop By Category</h3>
        <h3 className=' text-[#214344] font-semibold  md:text-[20px] text-[12px] fontt-[600] text-center'>Browse through your favorite categories. We’ve got them all!
        </h3>
        </div>
        <div className='flex  justify-between pt-[20px]  md:px-20 px-6  max-sm:pb-[20px] mx '>
        <div>
          <button onClick={()=>{setCategary("men")}} style={categary=="men" ? buttonactive:buttonInActive} className='cursor-pointer text-center py-[5px] md:py-[10px]  text-[16px] md:text-[25px]  md:w-[320px] w-[150px]  rounded-full'>Women's</button>
          </div>
          <button onClick={()=>{setCategary("women")}} style={categary=="women" ? buttonactive:buttonInActive} className='cursor-pointer text-center py-[3px] md:py-[8px] md:text-[25px] text-[16px]  md:w-[320px] w-[150px] rounded-full'>Men's</button>
        </div>
        </div>

        <SubCategary categary={categary}/>
        <div className="w-[80%] mx-auto">
        <h3 className=' text-[#214344] font-[450] md:text-[65px] text-[24px] text-center'>Top Sellers</h3>
        <h3 className=' text-[#214344] font-semibold text-[12px] text-center'>Our most loved products</h3>
        <div className='md:flex max-md:hidden md:gap-5 justify-start md:justify-between  px-5 items-center pt-5'>
          <div className='md:flex  md:gap-5 items-center md:justify-start '>
            <h4 className='text-[24px] font-bold '>All Products</h4>
          <p className='text-[16px] font-semibold text-gray-500'>Dont miss out on this weeks deals</p>
          </div>
          <div><Link  className='text-[16px]  font-semibold  text-gray-600' to="/shop">View All</Link></div>
        </div>
        </div>
        
       <TopSellerProduct/>
       <div className='flex justify-center pt-10'><Link  className='text-[16px] md:hidden  font-semibold   text-[#fff] bg-[#214344] rounded-full py-3  w-[100px] flex justify-center ' to="/shop">View All</Link></div>

       <div className='py-5'>
       <Testimonial/>
       </div>
      </div>
    </>
  )
}

export default CategarySection;