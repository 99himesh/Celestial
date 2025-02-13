import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllOrder, updateStatus } from "../../feature/admin/adminApi";
import { addAdminOrder } from "../../feature/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../common/dateConvertFunction";
import { toast } from "react-toastify";

const AdminOrders = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state?.admin?.order);

    const getOrderData=async()=>{   
        try {
        const res=await getAllOrder();
        console.log(res.orders);
        dispatch(addAdminOrder(res.orders))  
        } catch (error) {
            console.log(error);
            
        }
    }


    const orderStatusHandler=async(text,status)=>{

        console.log(text,status);
        try {
            const data={orderStatus:status}
            const res=await updateStatus(data,text.orderID);
            getOrderData();
            console.log(res);
            toast.success(res.message);
            
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
        
    }
    const columns = [
        {
          title: <Typography.Text className="text-[#fff]">Order Id</Typography.Text>,
          dataIndex: 'orderID',
          key: 'orderID',
          width:150,
          render: (text) => {
            return(
              <>
               <Typography.Text className="text-[#214344]">{text.slice(0,10)}</Typography.Text>
            </>
            )
          },
        },
        {
          title: <Typography.Text className="text-[#fff]">Name</Typography.Text>,
          dataIndex: 'user',
          key: 'user',
          width:250,
          render: (text) =>         {
            console.log(text,"kkkj");
            
            return(
                <>
                <Typography.Text className="text-[#214344] font-[500]">{`${text?.firstname} ${text?.lastname}`}</Typography.Text>
                </>
            )
          }      
          ,


        },
        {
          title:<Typography.Text className="text-[#fff]">Mobile</Typography.Text>,
          dataIndex: 'user',
          key: 'user',
          width:130,
          render: (text) =>         {
            console.log(text,"kkkj");
            
            return(
                <>
                <Typography.Text className="text-[#214344]">{text.mobile}</Typography.Text>
                </>
            )
          } 


        },
        {
          title: <Typography.Text className="text-[#fff]">Total Price</Typography.Text>,
          dataIndex: 'totalPrice',
          key: 'totalPrice',
          width:120,
          render: (text) =>         {
            console.log(text,"kkkj");
            
            return(
                <>
                <Typography.Text className={`text-[#214344]`}>{text}</Typography.Text>
                </>
            )
          } 


        },
        {
          title: <Typography.Text className="text-[#fff]">Order Status</Typography.Text>,
          dataIndex: 'orderStatus',
          key: 'orderStatus',
          align:"center",
          width:130,
          render: (__,text) =>         {
         
            
            return(
                <>
                <div className="flex flex-col">
                <Typography.Text  onClick={()=>{orderStatusHandler(text,"Pending")}} className={`text-[#214344] text-[12px] rounded-full cursor-pointer ${text.orderStatus==="Pending"?"bg-[#214344] text-[#fff]":"bg-[#fff] text-[#214344]"}`}>{"Pending"}</Typography.Text>
                <Typography.Text onClick={()=>{orderStatusHandler(text,"Confirmed")}} className={`text-[#214344] text-[12px]  rounded-full cursor-pointer ${text.orderStatus==="Confirmed"?"bg-[#214344] text-[#fff]":"bg-[#fff] text-[#214344]"}`}>{"Confirmed"}</Typography.Text>
                <Typography.Text onClick={()=>{orderStatusHandler(text,"Shipped")}} className={`text-[#214344] text-[12px]  rounded-full cursor-pointer ${text.orderStatus==="Shipped"?"bg-[#214344] text-[#fff]":"bg-[#fff] text-[#214344]"}`}>{"Shipped"}</Typography.Text>
                </div>
             
                </>
            )
          }


        },
        {
          title: <Typography.Text className="text-[#fff] text-center">Date</Typography.Text>,
          dataIndex: 'createdAt',
          align:"center",
          key: 'createdAt',
          width:200,
          render: (text) =>         {
            console.log(text,"kkkj");
            
            return(
                <>
                <Typography.Text className="text-[#214344]">{formatDate(text)}</Typography.Text>
                </>
            )
          }


        },
        
      ]; 

      useEffect(()=>{getOrderData()},[])
    return (
        <>
         <div className="">
            <div className="flex justify-between items-center py-3 px-5">
           <Typography.Text className="text-[24px] text-[#214344] font-[600]">Your orders</Typography.Text>

            </div>
            <div className="px-5">
        <Table pagination={false} scroll={1000} headerColor={"red"} columns={columns} dataSource={data}  />;
        </div>
        


        </div>
        
        </>
    )
};

export default AdminOrders;