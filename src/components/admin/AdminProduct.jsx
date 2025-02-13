import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Avatar, Space, Table, Typography } from "antd";
import "./admin.css"
import { Link, useNavigate } from "react-router";
import image from "../../assets/girl.jpg"
import deleteIcon from "../../assets/icons/GreenDelete.png"
import { useEffect, useState } from "react";
import { getProductApi } from "../../feature/product/productApi";
import { deleteProductData } from "../../feature/admin/adminApi";
import { toast } from "react-toastify";
const AdminProducts=()=>{
     const [data,setData]=useState();
     const navigate=useNavigate();
     console.log(data); 
     const getProductData=async()=>{
      try {
      const res=await getProductApi();
        setData(res)
      } catch (error) {
        console.log(error);
         
      }
     }
     const deleteProductHandler=async(id)=>{
      try {

        const res=await deleteProductData(id)
        console.log(res,"delete success");
        
        getProductData()
        toast.success(res.data.message)

        
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message)
        
      }
      

     }


     const editProductHandler=(item)=>{
       console.log(item);
       navigate("/admin/create-product",{state:{product:item}})
       
     }
      const columns = [
        {
          title: <Typography.Text className="text-[#fff]">Product Image</Typography.Text>,
          dataIndex: 'images',
          key: 'images',
          width:150,
          render: (text) => {
            console.log(text[0]);
            return(
              <>
            <div className="h-[50px] w-[50px] flex justify-center items-center"><Avatar style={{height:"50px" ,width:"50px"}} size={70} className="rounded-full" src={text[0]}/></div>
            </>
            )
          },
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
             <div  className="h-[20px] w-[20px] cursor-pointer" onClick={()=>{deleteProductHandler(record._id)}}>
                  <img  src={deleteIcon}/>
                </div>
                 <div  className="h-[20px] w-[20px] cursor-pointer" onClick={()=>{editProductHandler(record)}}>
                 <EditOutlined  style={{color:"#214344",fontSize:"24px"}} />
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