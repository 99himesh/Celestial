import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState= {products: []}
// tHIS IS MY PRODUCT SLICE 
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts:(state,action)=>{
        state.products=action.payload
    },
   

  },
});
export const {addProducts}=productSlice.actions
export default productSlice.reducer;
