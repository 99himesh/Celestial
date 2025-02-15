import { ConfigProvider, Input, Typography } from "antd";
import { useState } from "react";
import { sendOtp } from "../../feature/auth/authApi";
import { Link } from "react-router";
import { toast } from "react-toastify";

const SendOtp=({setSentOtp,setMobile,setSingnin})=>{
    const [input, setInput] = useState({
        mobile: "",
      });
      console.log(input);
      
      const inputHandler = (e) => {
        setInput((prevInput) => ({
          ...prevInput,
          [e.target.name]: e.target.value,
        }));
        
      };
    


        const sendOtpHandler = async () => {
          if(input.mobile.length<10 || input.mobile=="") return toast.error("Please enter valid mobile number")
          try {
            const res = await sendOtp(input);
            setSentOtp(false);

            console.log(res);
            
            if (res.status) {
              setMobile(input.mobile)
              toast.success(res.message);
            }
          } catch (error) {
            console.log(error);
              toast.error(error.response.data.message);
          }
        };
    return(
        <>
         <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#214344",
        },
      }}
    >
        <div className="flex flex-col gap-2 pt-5 ">
       
                <Input
                   type="number"

                  name="mobile"
                  value={input.mobile}
                  onChange={(e) => {
                    inputHandler(e);
                  }}
                  placeholder="Enter mobile number"
                  className="w-[100%] px-4 py-2 rounded-full"
                />
              </div>
              <button
                onClick={() => {
                  sendOtpHandler();
                }}
                className="w-[100%] bg-[#214344] text-[#fff] rounded-full py-2 "
              >
                Send Otp
              </button>
              
          <div className="flex justify-center">
              <Link className="text-[#214334] font-[400] text-[16px] hover:text-[#214344]" onClick={()=>{setSingnin(true)}}>Have you already Login ? Sign In</Link>
             
              </div>
              </ConfigProvider>
        </>

    )
}
export default SendOtp;