import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const initialState= {
    userData:{},
    user:null,
    token:token || null,
    isAuthenticated:!!token
}
console.log("state.isAuthenticated");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess:(state,action)=>{ 
      console.log(action.payload);
        state.userData=action.payload.users;   
        state.user=action.payload?.users._id;
        state.token=action.payload.token;
        state.isAuthenticated=true;
        localStorage.setItem("token",action.payload.token)
    },
    logout:(state,action)=>{
        state.user=null;
        state.token=null;
        state.isAuthenticated=false;
        localStorage.removeItem("token");
    }
  
  },
});
export const {loginSuccess,logout}=authSlice.actions
export default authSlice.reducer;
