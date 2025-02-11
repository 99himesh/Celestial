import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Space, Table, Typography } from "antd";
import "./admin.css"
import { Link } from "react-router";
import image from "../../assets/girl.jpg"
import deleteIcon from "../../assets/icons/GreenDelete.png"
import { useEffect, useState } from "react";
import { getProductApi } from "../../feature/product/productApi";
const AdminProducts=()=>{
     const [data,setData]=useState();


     const getProductData=async()=>{
      try {
      const res=await getProductApi();
        setData(res)
 
        
      } catch (error) {
        console.log(errorss);
        
        
      }

     }
      const columns = [
        {
          title: <Typography.Text className="text-[#fff]">Product Image</Typography.Text>,
          dataIndex: 'images',
          key: 'images',
          width:150,
          render: (text) =>  <div className="h-[50px] w-[50px] "><img className="rounded-full" src={image}/></div>,
        },
        {
          title: <Typography.Text className="text-[#fff]">Product Name</Typography.Text>,
          dataIndex: 'title',
          key: 'title',
          width:200,
          render: (text) => <a>{text}</a>,


        },
        {
          title:<Typography.Text className="text-[#fff]">Description</Typography.Text>,
          dataIndex: 'description',
          key: 'description',
          width:300,
          render: (text) => <a>{text}</a>,


        },
        {
          title: <Typography.Text className="text-[#fff]">Price</Typography.Text>,
          dataIndex: 'price',
          key: 'price',
          width:130,
          render: (text) => <a>{text}</a>,


        },
        {
          title: <Typography.Text className="text-[#fff]">Quantity</Typography.Text>,
          dataIndex: 'quantity',
          key: 'quantity',
          width:130,
          render: (text) => <a>{text}</a>,


        },
        {
          title: <Typography.Text className="text-[#fff] text-center">Action</Typography.Text>,
          dataIndex: 'action',
          align:"center",
          key: 'action',
          width:130,
          render: (_, record) => (
            
       
            <Space size="middle">
             <div  className="h-[20px] w-[20px]">
                  <img  src={deleteIcon}/>
                </div>
                 <div  className="h-[20px] w-[20px]">
                 <EditOutlined style={{color:"#214344",fontSize:"24px"}} />
               </div>
            </Space>
          
          )
      }
        
      ]; 
      
      

      useEffect(()=>{
        getProductData();
      },[])
    return(
        <>
        <div className="">
            <div className="flex justify-between items-center py-3 px-5">
           <Typography.Text className="text-[24px] text-[#214344] font-[600]">Your Product</Typography.Text>
           <Link to={"/admin/create-product"}><PlusCircleOutlined style={{fontSize:"30px" ,color:"#214344"}} /></Link>

            </div>
            <div className="px-5">
        <Table scroll={1000} headerColor={"red"} dataSource={data} columns={columns} />;
        </div>


        </div>
        </>

    )
}
export default AdminProducts;