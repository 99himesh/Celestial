
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const  SignIn=()=>{
    const onFinish = (values) => {
      };
      const onFinishFailed = (errorInfo) => {
      };
    return(
        <div className='px-5  w-[100%] flex flex-col  items-center justify-start pt-10'>
            <h4 className='text-[40px] text-[#214344]  '>Sign In</h4>
            <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <label>Username</label>
            <input className='w-[250px] px-2 py-1 rounded-full'/>
            </div>
            <div  className='flex flex-col gap-2'>
                <label>Password</label>
            <input className='w-[250px] px-2 py-1 rounded-full'/>
            </div>
            <button className='w-[100%] bg-[#214344] text-[#fff] rounded-full py-1 '>SignIn</button>
            </div>
</div>
    )
}
export default SignIn;