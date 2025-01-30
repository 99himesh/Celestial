import {  Col, Row } from "antd"
import Card from "../home/Card";
import ShopCard from "./shopCard";
const ProductListing=({item})=>{
    return(
        <>
        <Row gutter={[50,50]}>
        {item?.map((item,idx)=>{
            return(
             <Col key={idx} xl={8} lg={8} md={12} sm={24} xs={24}>
             <ShopCard item={item} shop="shop"/>
             </Col>
            )
        })}
        </Row>
        </>
    )
}
export default ProductListing;