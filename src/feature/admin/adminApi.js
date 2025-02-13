import api from "../../axios/axios";


export const uploadProductVideo=async(data)=>{ 
const token=localStorage.getItem("token")



    try {
        const res=await api.post(`https://zoci-backend.onrender.com/api/upload/uploadProductVideos`,data,{ headers: {
            "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`,
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }

}
export const uploadProductImages=async(data)=>{  
const token=localStorage.getItem("token")

    try {
        const res=await api.post(`https://zoci-backend.onrender.com/api/upload/uploadProductImages`,data,{ headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`,
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }

}
export const createProductApi=async(data)=>{   
const token=localStorage.getItem("token")

  try {
      const res=await api.post(`https://zoci-backend.onrender.com/api/product/create-new-product`,data,{ headers: {
        'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }});
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}

export const editProductApi=async(data,id)=>{  
const token=localStorage.getItem("token")

  console.log(data,id);
    
  try {
      const res=await api.put(`https://zoci-backend.onrender.com/api/product/updateProduct/${id}`,data,{ headers: {
        'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }});
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}

export const deleteProductData = async (id) => {

  console.log(id);
  
  const token = localStorage.getItem("token");

  try {
    const res = await api.delete(`https://zoci-backend.onrender.com/api/product/deleteProduct/${id}`, 
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


export const getAllOrder=async(data)=>{ 
   
  const token=localStorage.getItem("token")     
  try {
      
      const res=await api.get(`https://zoci-backend.onrender.com/api/user/getallorders`,{
          headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` // Sending token in the header
          }
      });
      return await res.data;   
  } catch (error) {    
      throw error;
  }

}



export const updateStatus=async(data,id)=>{  
  const token=localStorage.getItem("token")
  
    console.log(data,id);
      
    try {
        const res=await api.put(`https://zoci-backend.onrender.com/api/user/updateOrder/${id}`,data,{ headers: {
          'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }
  
  }

