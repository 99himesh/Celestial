import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute=({children})=>{
    const navigate=useNavigate();
    const isAuth=useSelector(state=>state.auth.isAuthenticated)  
    console.log(isAuth);
      
    return isAuth ? children :  navigate("/")
}   

export default ProtectedRoute;