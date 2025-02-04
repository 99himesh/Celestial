import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProductFilterApi } from "../../feature/product/productApi";
import { searchProducts } from "../../feature/product/productSlice";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { useEffect, useState } from "react";

const CustomSearch = ({ items, search, setOpen,setIsModalOpen }) => {
  const dispatch = useDispatch();
  const [searchInput,setSearchInut]=useState("");
  const searchData = useSelector((state) => state.product.searchData);

  const searchHandler = async (e) => {
    try {
      const search = { title:searchInput};
      const res = await getProductFilterApi({ search });
      dispatch(searchProducts(res.products));
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    searchHandler() 
  },[searchInput])


  // Function to open the modal


  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="h-[400px]  px-20">
      <div onClick={()=>{closeModal()}} className="flex justify-center cursor-pointer text-[30px]">x</div>
      <div className="px-5">
      <Input
        // onChange={searchHandler}
        onChange={(e)=>{setSearchInut(e.target.value)}}
        
        className="bg-[#e4cc9b] border-none rounded-full w-full active:bg-[#e4cc9b] hover:bg-[#e4cc9b] focus:bg-[#e4cc9b] border-[2px] border-![#214344]"
        placeholder="Search Your Products"
      />
      </div>
      <div className="h-[300px]  overflow-auto py-5">
      {searchData?.map((item) => (
        <div className=" px-5">
        <Link onClick={() => setOpen(false)} to={`/product/${item._id}`} key={item._id} className="flex justify-between px-2 pt-5 bg-[#efe6dc] rounded-xl shadow-xl py-5 mb-3">
          <div className="flex gap-3">
            <div className="h-[120px] w-[120px]">
              <img src={item?.images[0]} className="w-full h-full rounded-xl" />
            </div>
            <div className="flex flex-col pt-2">
              <Typography.Text className="text-[20px] font-[600]">{item?.title}</Typography.Text>
              <Typography.Text className="text-[14px] font-[600]">Rs {item?.price} x 1</Typography.Text>
            </div>
          </div>
        </Link>
        </div>
      ))}
      </div>
      </div>
    </>
  );
};

export default CustomSearch;
