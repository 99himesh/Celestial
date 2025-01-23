import api from "../../axios/axios";
// This is api of products

export const addToCartData=async(data)=>{    
    try {
        const res=await api.post(`/cart`,data,{ headers: {
            'Content-Type': 'application/json', 
          }});
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
export const getCartData=async()=>{    
    try {
        const res=await api.get(`/cart`);
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
export const deleteCartData=async(id)=>{    
    try {
        const res=await api.delete(`/cart/${id}`);
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}