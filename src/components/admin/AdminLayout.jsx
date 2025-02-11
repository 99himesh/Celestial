import { Avatar, Button, Dropdown, Flex, Input, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import  logo from "../../assets/header.png"
import { Link, Outlet } from "react-router";
const AdminLayout=()=>{
    const headerStyle = {
        backgroundColor: '#214344',
        
      };
      const contentStyle = {
        color: '#d5c294',
        backgroundColor: '#efe6dc',
        // padding:"30px 50p  x"
      };
      const siderStyle = {
        color: '#fff',
        backgroundColor: '#214344',
      };
      const layoutStyle = {
        overflow: 'hidden',
        height:"100vh"
      };



      const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Logout
            </a>
          ),
        },
      
      ];
    return(
        <>
       <Layout style={layoutStyle}>
      <Sider width="15%" style={siderStyle}>
        <div className="pt-5">
          <div className="lg:h-[50px] h-[30px] lg:w-[150px] w-[100px] mx-auto">
            <img src={logo}/>
          </div>
          <div className="flex flex-col px-2 gap-3 pt-10">
            <div className=" py-1 rounded-md bg-[#f0d5a0]">
            <Link to={"/admin/products"} className="text-[14px] px-2 text-[#214344] font-[600] hover:text-[#214344]"> Product</Link>
            </div>
            <Link className="text-[#f0d5a0] text-[12px] font-[600] px-2"> Order</Link>
          </div>
        </div>
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <div className="flex justify-end gap-[50px]  ">
            <div>
          <Input className="rounded-full w-[400px]" placeholder="Search Product" />
          </div>
          <div className="cursor-pointer" onClick={()=>{}}>
          <Dropdown menu={{ items }} placement="bottom" arrow>
       <Avatar/>
      </Dropdown>
         
         
          </div>
          </div>
        </Header>
        <Content style={contentStyle}>
          <div className="overflow-y-auto h-full">
           <Outlet/>
           </div>
        </Content>
        {/* <Footer style={footerStyle}>Footer</Footer> */}
      </Layout>
    </Layout>
        </>
    )
}
export default AdminLayout;