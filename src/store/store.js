import {  configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productSlice"
import cartReducer from "../feature/categary/cartSlice"
import wishlistReducer from "../feature/wishlist/wishlistSlice"
const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
        wish:wishlistReducer
    }
})

export default store;