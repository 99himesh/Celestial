import { useSelector } from "react-redux";
import profile from "../../assets/greenProfile.png";
import { useState } from "react";
import { createPassword } from "../../feature/auth/authApi";

const Profile=()=>{
    const userProfile =useSelector(state=>state.auth.userData);
    const [createPasswordStatus,setCreatePasswordStatus]=useState(false);
    const [input,setInput]=useState({
        password:"",
        newPassword:""
    })
    

    const passwordHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    console.log(input);

    const createPasswordHandler=async()=>{
        try {
            const res=await createPassword(input);
            console.log(res
            );
            
        } catch (error) {
            console.log(error);
            
            
        }
    } 
    
    
    return(
        <>
       {!createPasswordStatus &&
       <>
       <div>{userProfile.mobile}</div>
        <div>{userProfile.role}</div>
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