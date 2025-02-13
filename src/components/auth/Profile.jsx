import { useDispatch, useSelector } from "react-redux";
import profile from "../../assets/greenProfile.png";
import { useEffect, useState } from "react";
import { createPassword, getUserData, logOutApi } from "../../feature/auth/authApi";
import { Button } from "antd";
import { addUserData, logout } from "../../feature/auth/authSlice";
import { toast } from "react-toastify";

const Profile=({setSentOtp})=>{
    const dispatch=useDispatch()
    const userProfile =useSelector(state=>state.auth.userData);
    const [createPasswordStatus,setCreatePasswordStatus]=useState(false);
    const [input,setInput]=useState({
        password:"",
        newPassword:""
    })
    const users=useSelector(state=>state.auth.userData)
    const passwordHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const createPasswordHandler=async()=>{
        try {
            const res=await createPassword(input);
        } catch (error) {
            console.log(error);    
        }
    } 
    const logoutHandler=async()=>{
        try {
            const res=await logOutApi();
             dispatch(logout()) 
             setSentOtp(true) 
             toast.success(res.data.message)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            // dispatch(logout())   
            // setSentOtp(true)    
        }
    }
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

    
    return(
        <>
       {!createPasswordStatus &&
       <>
       <div>Mobile:{users.mobile}</div>
        <div>Role:{users.role}</div>
        <Button onClick={()=>{logoutHandler()}} >Logout</Button>
        </>
        
       
        }
        <div onClick={()=>{setCreatePasswordStatus(true)}}>create passowrd</div>
       {createPasswordStatus && <div className="flex flex-col pt-3 gap-2">
            <input onChange={(e)=>{passwordHandler(e)}}  value={input.password}  name="password" type="text" placeholder="Enter password" />
            <input onChange={(e)=>{passwordHandler(e)}}  value={input.confirmPassword} name="newPassword" type="text" placeholder="Confirm password" />
        <button onClick={()=>{createPasswordHandler()}}>Create Password</button>
        
        </div>}


                
               
        </>
    )
}

export default Profile;