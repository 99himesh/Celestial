import api from "../../axios/axios";
// This is api of products

export const addToWishlistData=async(data,token)=>{ 
    debugger  
    try {
        const res=await api.post(`https://zoci-backend.onrender.com/api/product/addtowishlist`,data,{ headers: {
            'Content-Type': 'application/json', 
            'Authorization': `${token}` // Sending token in the header

          }});
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
export const getWishlistData=async()=>{    
    const user=localStorage.getItem("userId")
    const token=localStorage.getItem("token")
    try {
        const res=await api.get(`https://zoci-backend.onrender.com/api/product/get-wishlist/${user}`,{
             headers: {
                'Content-Type': 'application/json', 
                'Authorization': `${token}` // Sending token in the header
    
              }
        });        
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
// export const deleteWishlistData=async(items)=>{ 
//     debugger  
//     const token=localStorage.getItem("token") 
//     try {
//         const res = await api.delete('https://zoci-backend.onrender.com/api/product/removeFromWishlist',items, {
//             headers: {
//               'Authorization': `Bearer ${token}`, // Replace with your actual authorization header if needed
//               'Content-Type': 'application/json',  // Optional, depending on API requirements
//             }
//           });  
//     } catch (error) {    
//         throw error;
//     }

// }


export const deleteWishlistData = async (items) => {
    debugger;
    const token = localStorage.getItem("token");
  
    try {
      const res = await api.delete(
        `https://zoci-backend.onrender.com/api/product/removeFromWishlist/${items.userId}/${items.prodId}`, 
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
  