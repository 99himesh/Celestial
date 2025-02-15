import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const initialState= {
    role:localStorage.getItem("role"),
    userData:{},
    user:null,
    token:token || null,
    isAuthenticated:!!token
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess:(state,action)=>{ 
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
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
    },
    addUserData:(state,action)=>{
      state.userData=action.payload
    }

  
  },
});
export const {loginSuccess,logout,addUserData}=authSlice.actions
export default authSlice.reducer;
