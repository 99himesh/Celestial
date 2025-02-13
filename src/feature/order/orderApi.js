import api from "../../axios/axios";



export const addOrder = async (data) => {    
const token=localStorage.getItem("token") 
    try {
        const res = await api.post(`https://zoci-backend.onrender.com/api/user/cart/create-order`, data, { 
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            }
        });
        return  res.data;   
    } catch (error) {    
        throw error;
    }
};


export const payment = async (data) => {    
    const token=localStorage.getItem("token") 
        try {
            const res = await api.post(`https://zoci-backend.onrender.com/api/user/payOrderDueAmount`, data, { 
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${token}`
                }
            });
            return  res.data;   
        } catch (error) {    
            throw error;
        }
    };
    