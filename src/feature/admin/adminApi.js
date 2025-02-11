import api from "../../axios/axios";
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTllM2ZjMjI5ODgzNmYyOTJmMDg5MSIsImlhdCI6MTczOTE4NzIyMSwiZXhwIjoxNzM5MjczNjIxfQ.WihoFPwiDnnJiXcB62dlKlu_B54RfTRYpMiab0hpQK0"
export const uploadProductVideo=async(data)=>{    
    debugger
    console.log(data);
    
    try {
      
        const res=await api.post(`https://zoci-backend.onrender.com/api/upload/uploadProductVideos`,data,{ headers: {
            "Content-Type": "multipart/form-data",
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }

}
export const uploadProductImages=async(data)=>{    
 
    debugger
    console.log(data);
    
    try {
      
        const res=await api.post(`https://zoci-backend.onrender.com/api/upload/uploadProductImages`,data,{ headers: {
            "Content-Type": "multipart/form-data",
          'Authorization': `${token}` ,


          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }

}