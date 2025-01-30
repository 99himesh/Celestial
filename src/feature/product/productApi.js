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
        return await res.data.products;   
    } catch (error) {    
        throw error;
    }

}
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