import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function SignUp() {
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })
    const [filled,setFilled] = useState(true);
    const singUpUser = async (e)=>{
        if(data.firstname==="" || data.lastname==="" || data.email==="" || data.password==="" ){
          setFilled(false);
          e.preventDefault();
        }
        else{
          setFilled(true);
        }
        axios.post("http://localhost:5000/auth/signup",data).then((res)=>
        console.log(res)).catch(err=>console.log(err));
        e.preventDefault();
    }

  return (
    <div className='flex items-center justify-center py-10 bg-green-100'>
      <div className='p-5 m-5 rounded-md w-[35%] shadow-md bg-white'>
        <h1 className='text-3xl text-center font-semibold pb-2'>SignUp</h1>

        {!filled && <h1 className='text-sm font-light text-red-600'> All fields must be filled</h1>}
      <form action="" className='flex flex-col items-center justify-center' onSubmit={singUpUser}>
          <input className='border-2 border-gray-400 block p-2 my-5 w-full  rounded-md' placeholder='First name' value={data.firstname} onChange={(e)=>{setData({...data, firstname:e.target.value})}}/>
          <input className='border-2 border-gray-400 block p-2 my-5 w-full  rounded-md' placeholder='Last name' value={data.lastname} onChange={(e)=>{setData({...data, lastname:e.target.value})}}/>
          <input className='border-2 border-gray-400 block p-2 my-5 w-full  rounded-md' placeholder='Email' value={data.email} onChange={(e)=>{setData({...data, email:e.target.value})}}/>
          <input type="" className='border-2 border-gray-400 block p-2 my-5 w-full  rounded-md' placeholder='Password' value={data.password} onChange={(e)=>{setData({...data, password:e.target.value})}}/>
          <div className='flex gap-5 py-2'>
            <input className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-2 my-3 w-24 border-2 border-green-600 hover:bg-white hover:text-green-600 ' type="submit" value="SignUp"/>	
            <Link to="/login" className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-2 my-3 w-24 border-2 border-green-600 hover:bg-white hover:text-green-600 ' >Login</Link>
          </div>
        </form> 

      </div>
    </div>
  )
}

export default SignUp
