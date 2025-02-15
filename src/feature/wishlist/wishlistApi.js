import api from "../../axios/axios";
// This is api of products
import { token } from "../constants/constants";
import { userId } from "../constants/constants";
export const addToWishlistData=async(data)=>{      
    try {
        const res=await api.post(`/product/addtowishlist`,data,{ headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          }});
        return  res.data;   
    } catch (error) {    
        throw error;
    }

}
export const getWishlistData=async()=>{    
    try {
        const res=await api.get(`/product/get-wishlist/${user}`,{
             headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
              }
        });        
        return await res.data;   
    } catch (error) {    
        throw error;
    }
}
export const deleteWishlistData = async (items) => {  
    try {
      const res = await api.delete(
        `/product/removeFromWishlist/${items.userId}/${items.prodId}`, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', 
          },
        }
      );
      return res; // Handle response as needed
    } catch (error) {
      throw error;
    }
  };
  