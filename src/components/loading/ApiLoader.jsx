import { useDispatch, useSelector } from "react-redux";
import loader from "../../assets/loader.mp4"
import Header from "../header/Header";
import { useEffect } from "react";
import { addUserData } from "../../feature/auth/authSlice";
import { getUserData } from "../../feature/auth/authApi";

const ApiLoader=()=>{
    const loadingStyle = {
         
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
    };

    const user=useSelector(state=>state.auth.userData)
    const dispatch=useDispatch()
    console.log(user);
     const getUserHandler=async()=>{
            try {
                
                const res=await getUserData();
                dispatch(addUserData(res.data))
                
            } catch (error) {
              console.log(error);
                
            }
        }
    
    
        useEffect(()=>{
            getUserHandler();
        },[])
    

    const isLoading = useSelector((state) => state.load.pageLoading);
    return(
        <>
       {isLoading && <>
       { user.role==="user" && <Header/>}
        <div style={loadingStyle} className="bg-[rgba(0,0,0,0.5)] h-[100vh] fixed left-0 right-0 mx-auto  z-[9999]">
                    
                    <video width="80px" height="80px" muted loop autoPlay>
          <source src={loader} type="video/mp4"/>
          <source src={loader} type="video/ogg"/>
        </video>
                </div>
                </>}
        
        </>
    )
}

export default  ApiLoader