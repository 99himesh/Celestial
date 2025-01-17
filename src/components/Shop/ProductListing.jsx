import {  Col, Row } from "antd"
import Card from "../home/Card";
const ProductListing=({item})=>{
    return(
        <>
        <Row gutter={[20,20]}>
        {item?.map((item,idx)=>{
            return(
             <Col key={idx} xl={8} lg={8} md={12} sm={24} xs={24}>
             <Card item={item}/>
             </Col>
            )
        })}
        </Row>
        </>
    )
}
export default ProductListing;