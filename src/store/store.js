import {  configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productSlice"
import cartReducer from "../feature/categary/cartSlice"
import wishlistReducer from "../feature/wishlist/wishlistSlice";
import authReducer from "../feature/auth/authSlice"
const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer,
        wish:wishlistReducer,
        auth:authReducer
    }
})

export default store;