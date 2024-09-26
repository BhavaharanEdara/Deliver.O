import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../Utils/base_url';
import { useState } from 'react';
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const handleSendEmail = async () => {
    try {
        const response = await axios.post(`${base_url}/auth/forgot-password-token`, { email: email });
        alert("Email Sent.");
    } catch (error) {
        alert("User not Found");
    }
};
return (
    <div>
      <div className='flex items-center justify-center py-10 bg-green-100'>
      <div className='p-3 md:p-5 md:m-5 rounded-md w-[90%] sm:w-[50%] md:w-[35%] shadow-md bg-white'>
        <h1 className='text-xl md:text-3xl text-center font-semibold pb-2'>Reset Password</h1>
        <p className='text-center'>We will send you an email to reset password</p>
        <form action="" className='flex flex-col items-center justify-center'>
          <input className='border-2 border-gray-400 p-2 my-5 w-full  rounded-md placeholder:text-gray-600' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <div className='py-2 items-center flex flex-col'>
          <Link  className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-1 md:py-2 my-3 w-24 border-2 border-green-600 hover:bg-white hover:text-green-600 ' onClick={handleSendEmail}>Send</Link>
          <Link to="/Login"className='text-base text-black text-center font-semibold   w-24 hover:text-green-600 ' >Cancel</Link>
          </div>
        </form> 
      </div>
    </div>
  
    </div>
  )
}

export default ForgotPassword
