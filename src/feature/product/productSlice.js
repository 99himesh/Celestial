import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState= {products: [],cart:[]}
// tHIS IS MY PRODUCT SLICE 
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts:(state,action)=>{
        state.products=action.payload
    },
    addToCart:(state,action)=>{
      state.cart=[...state.cart,action.payload]


    }
  },
});
export const {addProducts,addToCart}=productSlice.actions
export default productSlice.reducer;
