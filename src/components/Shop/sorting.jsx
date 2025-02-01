import { ConfigProvider, Drawer, Pagination, Select, Typography } from "antd";
import { useState } from "react";
import { getProductApiPaginate, getProductApiSort, getProductFilterApi } from "../../feature/product/productApi";
import { FilterIcon } from "../../icons/icon";
import { Header } from "antd/es/layout/layout";
import AdvanceFilter from "./AdvanceFilter";
import { useDispatch } from "react-redux";
import { addproductToshop } from "../../feature/shop/shopSlice";

const Sorting = ({ setPaginateData, item, paginateData }) => {
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
      case "low":
        try {
          const sortby = { sort: "priceDesc" }
        const highData = await getProductFilterApi({sortby})
        dispatch(addproductToshop(highData?.products))
          
        } catch (error) {
          console.log(error);
          
        }
        
        
        // if(highData)  setLoading(false)

        // setPaginateData(highData);
        break;
      case "high":
        try {
          const sortby = { sort: "priceAsc" }

        const newestData = await getProductFilterApi({sortby})
        dispatch(addproductToshop(newestData?.products))

        console.log(newestData);
          
        } catch (error) {
          console.log(error);
          
        }
     
        
        // if(newestData)  setLoading(false)
        // setPaginateData(newestData);
        break;
    }
  }

  const showDrawer = () => {
    setOpen(true);
  };



  return (
    <>

      <div className="flex   w-full flex-wrap gap-7  z-10 justify-between items-center pb-3   ">
        <div>
          {/* <h4>Showing {paginateData[0]?.id}-{paginateData[paginateData.length - 1]?.id} of {item?.length}</h4> */}
        </div>
        <div className="flex items-center gap-4 pt-2">
          <div className="cursor-pointer" onClick={showDrawer}>
          <FilterIcon color={"#000"} />
          </div>
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  colorPrimary: "#214344",  // Theme color
                  borderRadius: 8,          // Rounded edges
                  controlItemBgHover: "#1a2d2d", // Hover effect
                  controlItemBgActive: "#fff", // Active state
                  colorText: "#122424",        // Text color
                  borderColor: "transparent", // Remove border
                  optionSelectedColor: "#fff", // Selected text color
                  optionSelectedBg: "#1a2d2d" // Selected background
                }
              }
            }}
          >
  <Select
  className=""
    defaultValue="default"
    style={{ width: 140 }}
    onChange={(e) => { selectHandle(e); }}
    options={[
      { value: 'default', label: 'Default Sorting' },
      { value: 'low', label: 'Low to High' },
      { value: 'high', label: 'High to Low' },
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