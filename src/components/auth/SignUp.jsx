import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { sendOtp, verifyOtp } from "../../feature/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../feature/auth/authSlice";
import profile from "../../assets/greenProfile.png";
import "./auth.css";
import Profile from "./Profile";
const SignUp = () => {
  const [sentOtp, setSentOtp] = useState(true);
  const [input, setInput] = useState({
    mobile: null,
    // firstname:"",
    // lastname:"",
    // email:"",
    // password:""
  });
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth,"isAuth");
  
  const dispatch = useDispatch();

  const [otp, setOtp] = useState(null);
  const onChange = (value) => {
    setOtp(value);
  };
  const inputHandler = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const sendOtpHandler = async () => {
    try {
      const res = await sendOtp(input);

      console.log(res);

      if (res.status) {
        setSentOtp(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtpHandler = async () => {
    try {
      const res = await verifyOtp({
        mobile: input.mobile,
        otp: otp,
        role: "user",
        // email:input.email,
        // password:input.password
      });
      console.log(res);

      if (res.status) {
        console.log(res.data);
        
        localStorage.setItem("token", res.data?.token);
        localStorage.setItem("userId", res.data?._id);
        localStorage.setItem("role", res.data?.role);
        // localStorage.setItem("role", res.data?._id);
        dispatch(loginSuccess({ token: res.data.token, users: res.data }));
     
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sharedProps = {
    onChange,
  };

  return (
    <>
     
        <div className="px-5  w-[100%] flex flex-col h-[100%]  items-center justify-center pt-10">
          <div className="w-[150px] h-[150px] rounded-full flex justify-center items-center  bg-[#fff]  border-[2px] border-[#dfb38e] ">
            <div className="p-2">
              <img className="w-full h-full" src={profile} />
            </div>
          </div>
         {!isAuth && <h4 className="text-[40px] text-[#214344] py-5 ">Sign Up</h4>}
         {!isAuth ? (<div className="flex flex-col gap-5 w-full">
            {sentOtp ? (
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
            ) : (
              <div>
                <div>
                  <div className="flex justify-center pb-2">
                    <Typography.Text className="text-center">
                      Enter OTP
                    </Typography.Text>
                  </div>
                  <div className="otp flex justify-center">
                    <Form.Item
                      styles={{}}
                      variant={"borderless"}
                      layout="vertical"
                      rules={[{ required: true }]}
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
                    >
                      <Input.OTP length={4} {...sharedProps} />
                    </Form.Item>
                  </div>
                </div>
              </div>
            )}
            {sentOtp ? (
              <button
                onClick={() => {
                  sendOtpHandler();
                }}
                className="w-[100%] bg-[#214344] text-[#fff] rounded-full py-2 "
              >
                Send Otp
              </button>
            ) : (
              <button
                onClick={() => {
                  verifyOtpHandler();
                }}
                className="w-[100%] bg-[#214344] text-[#fff] rounded-full py-2 "
              >
                Verify Via OTP
              </button>
            )}
          </div>): (
       <Profile/>
      )}
        </div>
      ) 
    </>
  );
};
export default SignUp;
