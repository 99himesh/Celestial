import { ConfigProvider, Pagination } from "antd";

const CustomPagination = ({pageHandler,totalPages}) => {
    console.log(totalPages);
    
    
         
   
    return (
        <div className="pagination">
            <ConfigProvider  theme={{
        token: {
          colorPrimary: "#214344",
        },
      }} >
            <Pagination
                
                onChange={pageHandler}
                defaultCurrent={1}
                total={totalPages}
            />
            </ConfigProvider>
        </div>            
    
    
    )
}

export default CustomPagination;