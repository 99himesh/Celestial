import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState= {products: [],searchData:[]}
// tHIS IS MY PRODUCT SLICE 
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts:(state,action)=>{
        state.products=action.payload
    },
    searchProducts:(state,action)=>{
      state.searchData=action.payload;
    }

  },
});
export const {addProducts,searchProducts}=productSlice.actions
export default productSlice.reducer;
