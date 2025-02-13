import { Input, Typography } from "antd";
import { useState } from "react";
import { sendOtp } from "../../feature/auth/authApi";
import { Link } from "react-router";

const SendOtp=({setSentOtp,setMobile,setSingnin})=>{
    const [input, setInput] = useState({
        mobile: null,
      });
      console.log(input);
      
      const inputHandler = (e) => {
        setInput((prevInput) => ({
          ...prevInput,
          [e.target.name]: e.target.value,
        }));
      };
    


        const sendOtpHandler = async () => {
          try {
            const res = await sendOtp(input);
            if (res.status) {
              setSentOtp(false);
              setMobile(input.mobile)
            }
          } catch (error) {
            console.log(error);
          }
        };
    return(
        <>
        
        <div className="flex flex-col gap-2 pt-5 ">
                <Input
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
        </>

    )
}
export default SendOtp;