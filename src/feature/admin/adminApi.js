import api from "../../axios/axios";
var token = localStorage.getItem("token");
export const uploadProductVideo=async(data)=>{ 
    try {
        const res=await api.post('/upload/uploadProductVideos',data,{ headers: {
            "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`,
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }

}
export const uploadProductImages=async(data)=>{  
    try {
        const res=await api.post('/upload/uploadProductImages',data,{ headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`,
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }

}
export const createProductApi=async(data)=>{   
  try {
      const res=await api.post('/product/create-new-product',data,{ headers: {
        'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }});
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}

export const editProductApi=async(data,id)=>{      
  try {
      const res=await api.put(`product/updateProduct/${id}`,data,{ headers: {
        'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`,
        }});
      return  res.data;   
    } catch (error) {    
      throw error;
  }

}

export const deleteProductData = async (id) => {
  try {
    const res = await api.delete(`/product/deleteProduct/${id}`, 
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
     try {
      
      const res=await api.get('/user/getallorders',{
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
    try {
        const res=await api.put(`/user/updateOrder/${id}`,data,{ headers: {
          'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`,
          }});
        return  res.data;   
      } catch (error) {    
        throw error;
    }
  
  }

