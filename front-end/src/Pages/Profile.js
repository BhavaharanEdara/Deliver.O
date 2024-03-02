import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../images/avatar.png'
import axios from 'axios';
import { config } from '../Utils/headerConfig';
import { base_url } from '../Utils/base_url';

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [isLogged,setIsLogged] = useState(true);
    const getUser = async()=>{
      try {
        const res = await axios.get(`${base_url}/auth/getAuser/${user._id}`, config);
      } catch (error) {
        setIsLogged(false);
      }
    };
    
    
    useEffect(()=>{
      if(user){
      getUser();}
    },[])
  return (
    <div>
      <div className='mt-12 p-5 h-screen'>
            <div className='flex w-full justify-center gap-5'>
                <div className='items-center flex flex-col w-1/3 bg-blue-200 p-5 m-5'>
                    <img className="w-[40%] h-[80%] "src={Avatar} alt='avatar'/>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>{user?.findUser?.firstname} {user?.findUser?.lastname}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>Role: {user?.findUser?.role}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>{user?.findUser?.email}</h1>
                </div>
                <div className='w-1/2 mt-5'>
                  <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>Last Name: {user?.findUser?.firstname}</h1></div>
                  <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>First Name: {user?.findUser?.lastname}</h1></div>
                  <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>Email: {user?.findUser?.email}</h1></div>
                  <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2 mb-3'><h1>Role: {user?.findUser?.role}</h1></div>
                  {user?.findUser?.role==='admin'? <Link to='/admin' className='text-white rounded-full text-center font-semibold bg-green-600 px-2 py-1 mt-10 w-32 border-2 border-green-600 hover:bg-white hover:text-green-600 '>Admin Panel</Link>: <></>}
                  {!isLogged? <Link to='/login' className='ml-2 text-white rounded-full text-center font-semibold bg-green-600 px-2 py-1 mt-10 w-32 border-2 border-green-600 hover:bg-white hover:text-green-600 '> Please Login Again</Link>: <Link to='/login' className='ml-2 text-white rounded-full text-center font-semibold bg-green-600 px-2 py-1 mt-10 w-32 border-2 border-green-600 hover:bg-white hover:text-green-600 '>Login Out</Link>}
                  
                </div>
            </div>
            {!isLogged? <h1 className='text-red-500'>Session Expired Please Login</h1>:<></>}

      </div>
    
    </div>
  )
}

export default Profile



