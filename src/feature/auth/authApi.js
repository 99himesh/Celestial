import api from "../../axios/axios";
const token=localStorage.getItem("token")

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
  console.log(data,"hello");
  
  try {
    
      const res=await api.post(`https://zoci-backend.onrender.com/api/user/register`,data,);
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}
export const createPassword=async(data)=>{ 
  const token=localStorage.getItem("token")
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



export const logOutApi=async()=>{ 
  const userId=localStorage.getItem("userId")   
  try {
    
      const res=await api.post(`https://zoci-backend.onrender.com/api/user/logout/${userId}`,{ headers: {
          'Content-Type': 'application/json', 
          'Authorization': `${token}` // Sending token in the header

        }});
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}


export const getUserData=async()=>{  
  const user=localStorage.getItem("userId")
  const token=localStorage.getItem("token")     
  try {
      
      const res=await api.get(`https://zoci-backend.onrender.com/api/user/${user}`,{
          headers: {
              'Authorization': `Bearer ${token}`
              // Sending token in the header
          }
      });
      return await res.data;   
  } catch (error) {    
      throw error;
  }

}

export const loginWithNumberAndPassword=async(data)=>{
  console.log(data,"hh");
  
  const token=localStorage.getItem("token")
  try {
    
      const res=await api.post(`https://zoci-backend.onrender.com/api/user/loginwithpassword`,data,{ headers: {
          'Content-Type': 'application/json', 
          'Authorization': `${token}` ,

        }});
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}