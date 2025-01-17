import { Col, Row } from "antd";
import React, { useEffect, useState } from 'react';
import { Typography, Rate } from 'antd';
import { Flex, Progress } from 'antd';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../feature/product/productApi";
import { addProducts, addToCart } from "../../feature/product/productSlice";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import girlImage from "../../assets/girl.jpg"
// product details page start here

const ProductDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.product?.products)
  const [discountPercentage, setDiscountPercentage] = useState()
  const { id } = useParams();
  const items = data[id]
  const getData = async () => {
    const data = await getProductApi();
    dispatch(addProducts(data));
  }
  const percentageCalculate = () => {
    const percentage = Math.floor(((items?.discountPrice - items?.price) / items?.discountPrice) * 100)
    setDiscountPercentage(percentage);
  }
  const addCartHandler = (item) => {
    dispatch(addToCart(item))
  }
  useEffect(() => {
    percentageCalculate();
  }, [id, dispatch, data]);
  useEffect(() => {
    getData()
  }, [dispatch])
  return (
    <Row className="pt-[160px]">
      <Col xl={12} lg={8} md={8} sm={24} xs={24}>
        <div className="py-5 px-3  w-[70%] mx-auto">
          <img className="rounded h-[400px] w-full" src={girlImage} alt="product image" />
          <div className="flex justify-between pt-10">
            <button onClick={() => { addCartHandler(items) }} className="text-white bg-[#214344] hover:bg-[#214344] font-medium rounded-lg text-sm px-5 py-2  text-center">Add to Bag</button>
            <button className="text-[#214344] border bg-[#fff] hover:text-[#fff] hover:bg-[#214344] font-medium rounded-lg text-sm px-5 py-2  text-center">Buy Now</button>
          </div>
        </div>
      </Col>
      <Col xl={12} lg={16} md={16} sm={24} xs={24}>
        <div className="w-full  bg-white   px-5  dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-5  gap-5">
            <div>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{items?.title}</h5>
            </div>

            <div className="flex items-center justify-between py-4 ">
              <div className="flex gap-2 items-center ">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">Rs. {items?.price}</span>
                <span className="text-lg text-gray-400 line-through dark:text-white">Rs. {items?.discountPrice}</span>
                <span className="text-sm text-red-500  dark:text-white">{discountPercentage && discountPercentage}% Off</span>
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              <div>
                <Typography.Text className="tetx-lg font-bold">Material : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.material}</Typography.Text>
              </div>
              <div>
                <Rate disabled allowHalf defaultValue={items?.rating} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="pt-5">
                <Typography.Text className="tetx-lg font-bold">Review : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.review}</Typography.Text>
              </div>
              <div>
                <Typography.Text className="tetx-lg font-bold">Available size : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.size}</Typography.Text>
              </div>
              <div className="pb-5">
                <Typography.Text className="tetx-lg font-bold">Color : </Typography.Text>
                <Typography.Text className="text-md font-semibold">{items?.color}</Typography.Text>
              </div>
            </div>
            <div className="progress">
              <Flex vertical className="gap-2">
                <Typography.Text className="font-semibold">Booked stock</Typography.Text>
                <Progress strokeColor={"#214344"} percent={items?.availableStock} status="active" />
                <Typography.Text className="font-semibold pt-5">Available stock</Typography.Text>
                <Progress strokeColor={"#214344"} percent={items?.availableStock} status="active" />
              </Flex>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default ProductDetails;
// product details page end here