import api from "../../axios/axios";
// This is api of products

export const addToWishlistData=async(data)=>{    
    try {
        const res=await api.post(`/wishlist`,data,{ headers: {
            'Content-Type': 'application/json', 
          }});
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
export const getWishlistData=async()=>{    
    try {
        const res=await api.get(`/wishlist`);
        console.log(res);
        
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
export const deleteWishlistData=async(id)=>{    
    try {
        const res=await api.delete(`/wishlist/${id}`);
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}