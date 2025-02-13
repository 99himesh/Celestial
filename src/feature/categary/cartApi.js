
import api from "../../axios/axios";



export const addToCartData = async (data, token) => { 
       
    try {
        const res = await api.post(`https://zoci-backend.onrender.com/api/user/addtocart`, data, { 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}` // Sending token in the header
            }
        });
        return res.data;   
    } catch (error) {    
        throw error;
    }
};

export const getCartData=async()=>{  
    const user=localStorage.getItem("userId")
    const token=localStorage.getItem("token")     
    try {
        
        const res=await api.get(`https://zoci-backend.onrender.com/api/user/cart/view/${user}`,{
            headers: {
                'Authorization': `${token}` // Sending token in the header
            }
        });
        return await res.data;   
    } catch (error) {    
        throw error;
    }

}
export const deleteCartData=async(id)=>{ 
     const userId=localStorage.getItem("userId")
    const token=localStorage.getItem("token")
     
    try {
        const res=await api.delete(`https://zoci-backend.onrender.com/api/user/cart/removeitem/${userId}/${id}`,{
            headers: {
                'Authorization': `${token}` ,
                'Content-Type': 'application/json',

            }

        });
        return  {data:res.data,status:"success"};   
    } catch (error) {    
        throw {message:error,status:"fail"};
    }

}


