import api from "../../axios/axios";
var token = localStorage.getItem("token");
var userId = localStorage.getItem("userId");


export const addOrder = async (data) => {    
    try {
        const res = await api.post(`/user/cart/create-order`, data, { 
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
        try {
            const res = await api.post(`/user/payOrderDueAmount`, data, { 
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
    