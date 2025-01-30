import api from "../../axios/axios";

export const sendOtp=async(data)=>{    
    try {
      debugger
        const res=await api.post(`https://zoci-backend.onrender.com/api/user/sendOtp`,data,{ headers: {
            'Content-Type': 'application/json', 
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }

}
export const verifyOtp=async(data)=>{    
  try {
    debugger
      const res=await api.post(`https://zoci-backend.onrender.com/api/user/register`,data,);
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}