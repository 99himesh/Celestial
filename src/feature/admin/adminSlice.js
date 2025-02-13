import { createSlice } from "@reduxjs/toolkit";
const initialState={order:[]}
const adminSlice=createSlice({
    name:"admin",
    initialState,
    reducers:{
        addAdminOrder:(state,action)=>{            
            state.order=action.payload
        }

    }
})
export const {addAdminOrder}=adminSlice.actions;
export default adminSlice.reducer;
