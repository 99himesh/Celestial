import {  configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productSlice"
const store=configureStore({
    reducer:{
        product:productReducer
    }
})

export default store;