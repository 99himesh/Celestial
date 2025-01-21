import { Pagination, Select, Typography } from "antd";
import { useState } from "react";
import { getProductApiPaginate, getProductApiSort } from "../../feature/product/productApi";
import { FilterIcon } from "../../icons/icon";

const Sorting =({setPaginateData,item,paginateData})=>{
  const [sort, setSort] = useState("high")
  const [current, setCurrent] = useState(1);

    const selectHandle = (value) => {
        sortHandler(value)
        console.log(value);
        
      };

       const currentPageHandler = async (page) => {
        console.log(page);
        setCurrent(page)
        
          const pagination = { _start: page * 10, _end: (page + 1) * 10, limit: 10, }
          const getData = await getProductApiPaginate(pagination)
          setPaginateData(getData)
        };
      const sortHandler = async (id) => {
        
        setSort(id)
        switch (sort) {
          case "low":
            const high = { _sort: "price", _order: "desc" }
            const highData = await getProductApiSort(high)
            // if(highData)  setLoading(false)
           
            setPaginateData(highData);
            break;
          case "high":
            const newest = { _sort: "price", _order: "asc" }
            const newestData = await getProductApiSort(newest)
            // if(newestData)  setLoading(false)
            setPaginateData(newestData);
            break;
        }
      }
    return (
        <>

<div className="flex   w-full flex-wrap gap-7  z-10 justify-between items-center pb-3 md:px-20 px-5  max-md:justify-between">
         

<div>
<h4>Showing {paginateData[0]?.id}-{paginateData[paginateData.length-1]?.id} of {item?.length}</h4>
</div>


          <div className="flex items-center gap-4">
            <h4 className="text-[20px] text-[#fff]">Filter</h4>
          <FilterIcon color={"#000"}/>
          

            <Select
             
              defaultValue="default"
              style={{ width: 120,background:"#eee5db" }}
              dropdownStyle={{background:"#fff"}}
              onChange={(e) => { selectHandle(e) }}
              options={[
                { value: 'default', label: 'Default Sorting' },
                { value: 'low', label: 'Low to High' },
                { value: 'high', label: 'Hight to Low' },
              ]}
            />
             {paginateData?.length > 0 ? <div className="paginate flex justify-end py-10">
            <Pagination showLessItems={true}  hideOnSinglePage={true} current={current} onChange={currentPageHandler} total={item?.length} />
          </div> : <h1 className="text-center text-xl">There is no data </h1>}
          </div>
        </div>
        
        </>
    )
}
export default Sorting;