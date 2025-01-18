import { Col, Row, Typography } from "antd";
import { Pagination } from 'antd';
import ProductListing from "./ProductListing";
import { Select } from 'antd';
import { getProductApi, getProductApiPaginate, getProductApiSort } from "../../feature/product/productApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../feature/product/productSlice";
import Loading from "../loading/Loading";
import CustomFilter from "./CustomFlter";
const Shop = () => {
  const [loading,setLoading]=useState(true);
  const dispatch = useDispatch()
  const [current, setCurrent] = useState();
  const [paginateData, setPaginateData] = useState([])
  const [sort, setSort] = useState("popularity")
  const item = useSelector(state => state.product?.products)

  const currentPageHandler = async (page) => {
    const pagination = { _start: page * 10, _end: (page + 1) * 10, limit: 10, }
    const getData = await getProductApiPaginate(pagination)
    setPaginateData(getData)
  };
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
  useEffect(() => {
    getProducts();
    getAllProduct()
  }, [])
  const selectHandle = (value) => {
    sortHandler(value)
  };
  const sortHandler = async (id) => {
    setSort(id)
    switch (sort) {
      case "popularity":
        const popularity = { _sort: "rating", _order: "asc" }
        const popularData = await getProductApiSort(popularity)
        setPaginateData(popularData);
        break;
      case "newest":
        const low = { _sort: "price", _order: "asc" }
        const lowData = await getProductApiSort(low)
        setPaginateData(lowData);
        break
      case "low":
        const high = { _sort: "price", _order: "desc" }
        const highData = await getProductApiSort(high)
        setPaginateData(highData);
        break;
      case "high":
        const newest = { _sort: "date", _order: "asc" }
        const newestData = await getProductApiSort(newest)
        setPaginateData(newestData);
        break;
    }
  }
 if(loading) return <Loading/>
  return (
    <Row className="pt-[130px] bg-[]">
      <Col>
        <div className="flex fixed w-full flex-wrap gap-7 bg-[#fff] z-10 justify-between items-center py-3 md:px-20 px-5 border max-md:justify-between">
          <Typography.Text className="text-md font-semibold " level={2}>Sort By</Typography.Text>
          <div className="">
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={(e) => { selectHandle(e) }}
              options={[
                { value: 'popularity', label: 'Popularity' },
                { value: 'low', label: 'Low to High' },
                { value: 'high', label: 'Hight to Low' },
                { value: 'newest', label: 'Newest First' },
              ]}
            />
          </div>
        </div>
        <div className="md:px-20 px-5 pt-10 bg-[#eee5db] ">
          <div className="py-10">
            <CustomFilter/>

          </div>
          <ProductListing item={paginateData} />
          {paginateData?.length > 0 ? <div className="paginate flex justify-end py-10">
            <Pagination current={current} onChange={currentPageHandler} total={item?.length} />
          </div> : <h1 className="text-center text-xl">There is no data </h1>}
        </div>
      </Col>
    </Row>
  )
}

export default Shop;


