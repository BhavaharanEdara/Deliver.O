import React from 'react'
import { Link } from 'react-router-dom'
function ForgotPassword() {
  return (
    <div>
      <div className='flex items-center justify-center py-10 bg-green-100'>
      <div className='p-5 m-5 rounded-md w-[35%] shadow-md bg-white'>
        <h1 className='text-3xl text-center font-semibold pb-2'>Reset Password</h1>
        <p className='text-center'>We will send you an email to reset password</p>
        <form action="" className='flex flex-col items-center justify-center'>
          <input className='border-2 border-gray-400 p-2 my-5 w-full  rounded-md placeholder:text-gray-600' placeholder='Email'/>
          <div className='py-2 items-center flex flex-col'>
          <Link to="" className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-2 my-3 w-24 border-2 border-green-600 hover:bg-white hover:text-green-600 ' >Send</Link>
          <Link to="/Login"className='text-base text-black text-center font-semibold   w-24 hover:text-green-600 ' >Cancel</Link>
          </div>
        </form> 
      </div>
    </div>
  
    </div>
  )
}

export default ForgotPassword
