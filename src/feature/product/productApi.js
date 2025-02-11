import axios from "axios"
import api from "../../axios/axios";
// This is api of products
// export const getProductApi=async()=>{    
//     try {
//         const res=await api.get(`/products`);
//         return await res.data;   
//     } catch (error) {    
//         throw error;
//     }

// }
export const getProductApi=async()=>{    
    try {
        const res=await api.get(`https://zoci-backend.onrender.com/api/product/getAllProduct`);
        console.log(res);

        return await res.data.products;   
        
    } catch (error) {    
        throw error;
    }

}



export const getProductFilterApi = async ({ page, limit, sortby, filters,search }) => {
    
    try {
      const params = {
        page,
        limit,
        ...search,
        ...sortby,
        ...filters, // Spread filters dynamically
      };
  
      const response = await api.get("https://zoci-backend.onrender.com/api/product/getAllProduct", { params });
  
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  



export const getProductApiPaginate=async(apiend)=>{    
    try {
        const res=await api.get(`https://zoci-backend.onrender.com/api/product/getAllProduct`);
        return await res.data.products;   
    } catch (error) {    
        throw error;
    }

}
export const getProductApiSort=async(apiend)=>{    
    try {
        const res=await api.get(`/products?_limit=10&_sort=${apiend._sort}&_order=${apiend._order}`);
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
export const getProductSearch=async(apiend)=>{        
    try {
        const res=await api.get(`/products?_limit=10&${apiend}`);
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}