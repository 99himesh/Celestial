import api from "../../axios/axios";

export const sendOtp=async(data)=>{    
    try {
      
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
    
      const res=await api.post(`https://zoci-backend.onrender.com/api/user/register`,data,);
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}
export const createPassword=async(data)=>{ 
debugger
   
  const token=localStorage.getItem("token")
  console.log(token);
  console.log(data);
  
  

  try {
    
      const res=await api.put(`https://zoci-backend.onrender.com/api/user/password`,data,{ headers: {
          'Content-Type': 'application/json', 
          'Authorization': `${token}` ,

        }});
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}