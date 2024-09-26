import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams, Link, useNavigate} from "react-router-dom"
import { base_url } from "../Utils/base_url";
const UpdatePassword = ()=> {
    const {token} = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState();
    const navigate = useNavigate();
    const handleUpdate = async()=>{
        if(password==""){
            setMessage("Password is required")
        }
        else if(password!==confirmPassword){
            setMessage("Password and Confirm Password should match")
        }
        else{
            try{
            const resposne = await axios.post(`${base_url}/auth/reset-password/${token}`, {password:password})
            alert('Updated Sucessfull')
            navigate('/login');  
            }
            catch(error){
                alert('Please try again')
            }
        }
    }
  return (
    <div className="flex items-center justify-center py-10 bg-green-100">
      <div className='p-3 md:p-5 md:m-5 rounded-md w-[90%] sm:w-[50%] md:w-[35%] shadow-md bg-white'>
      <h1 className="text-xl md:text-3xl text-center font-semibold pb-2">Change Password</h1>
        <label>New Password</label>
            <input className='border-2 border-gray-400 block p-2 mb-5 w-full  rounded-md' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <label>Confirm Password</label>

          <input className='border-2 border-gray-400 block p-2  mb-5 w-full  rounded-md'  value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>

          {message && (!password || password!==confirmPassword) && <h1 className='text-sm font-light text-red-600 text-center mx-auto'>{message}</h1>}
          <div className='flex gap-5 py-2 justify-center'>
            <Link className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-1 md:py-2 my-3  border-2 border-green-600 hover:bg-white hover:text-green-600 ' onClick={handleUpdate}>Change Password</Link>
          </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default UpdatePassword
