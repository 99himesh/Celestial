import { ConfigProvider, Drawer, Pagination, Select, Typography } from "antd";
import { useState } from "react";
import {  getProductFilterApi } from "../../feature/product/productApi";
import { FilterIcon } from "../../icons/icon";
import { Header } from "antd/es/layout/layout";
import AdvanceFilter from "./AdvanceFilter";
import { useDispatch } from "react-redux";
import { addproductToshop } from "../../feature/shop/shopSlice";
import filterIcon from "../../assets/icons/greenFilter.png"
import closeIcon from "../../assets/icons/closeIconGreen.png";
import "./advancefilter.css"
const Sorting = ({ setPaginateData, item, paginateData,setFiter }) => {
  const [sort, setSort] = useState("high")
  const dispatch=useDispatch();
  const [current, setCurrent] = useState(1);
  const [open, setOpen] = useState(false);
  const selectHandle = (value) => {
    sortHandler(value)

  };

  const sortHandler = async (id) => {
    setSort(id)
    switch (sort) {
      case "high":
        try {
          const sortby = { sort: "priceDesc" }
        const highData = await getProductFilterApi({sortby})
        dispatch(addproductToshop(highData?.products))
          
        } catch (error) {
          console.log(error);
          
        }
        break;
      case "low":
        try {
          const sortby = { sort: "priceAsc" }

        const newestData = await getProductFilterApi({sortby})
        dispatch(addproductToshop(newestData?.products))

          
        } catch (error) {
          console.log(error);
          
        }
     
        
        // if(newestData)  setLoading(false)
        // setPaginateData(newestData);
        break;
    }
  }



const filterHandler=()=>{
  setOpen(true);
}

  return (
    <>

      <div className="sorting  flex   w-full flex-wrap  z-10 justify-between items-center   ">
        <div>
          {/* <h4>Showing {paginateData[0]?.id}-{paginateData[paginateData.length - 1]?.id} of {item?.length}</h4> */}
        </div>
        <div className="flex items-center w-full justify-between  ">
        <div className="  size-[50px] flex items-center justify-center rounded-full">
                    <div
                      onClick={() => {
                        setFiter((prev) => !prev);
                      }}
                      className=" cursor-pointer rounded-full  size-[20px]"
                    >
                      <img className="h-full w-full" src={closeIcon} />
                    </div>
                  </div>
          <div className="cursor-pointer h-[24px] w-[24px]" onClick={()=>{filterHandler()}}>
          {/* <FilterIcon color={"#000"} /> */}
          <img src={filterIcon}/>
          </div>
          <ConfigProvider
  theme={{
    components: {
      Select: {
        controlOutline: "none", // Remove focus outline
        borderRadius: 0, // Optional: Remove border radius
        optionSelectedBg: "#214344", // Selected background
        optionSelectedColor: "#fff", // Selected text color
        controlItemBgHover: "#214344", // Background color on hover
        optionActiveBg: "#214344", // Active background
        optionActiveColor: "#ff6600", // Text color on hover
        colorText: "#000", // Default text color
        optionFontColor: "#ff0000", // **Set text color inside dropdown options**
      }
    }
  }}
>

  <Select
  className="hover:text-[#fff]"
    // defaultValue="Default Sorting"
    placeholder={<p className="text-[#214344] text-[16px]">Short by</p>}
    bordered={false} // Removes the border
    style={{
      width: 200,
      backgroundColor: "transparent", // Ensures background is transparent
    }}
    onChange={(e) => { selectHandle(e); }}
    options={[
      // { value: "default", label: "Default Sorting" },
      { value: "low", label: "Low to High by price" },
      { value: "high", label: "High to Low by price" },
    ]}
  />
</ConfigProvider>



        </div>
      </div>

      <AdvanceFilter open={open} setOpen={setOpen}/>
    </>
  )
}
export default Sorting;