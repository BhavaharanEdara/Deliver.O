import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Avatar from '../images/avatar.png'
import axios from 'axios';
import { config } from '../Utils/headerConfig';
import { base_url } from '../Utils/base_url';
import { logout } from '../Features/auth/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    //const user = useSelector(state=>state.auth.user)
    const [isLogged,setIsLogged] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const getUser = async()=>{
      try {
        console.log(user)
        const res = await axios.get(`${base_url}/auth/getAuser/${user?.findUser?._id}`, config);
      } catch (error) {
        setIsLogged(false);
      }
    };
    const handleLogOut = ()=>{
      dispatch(logout());
    }
    
    
    useEffect(()=>{
      if(user){
      getUser();}
    },[])
    useEffect(()=>{
      if(user===null){
        navigate("/login")
      }
      else{
        return;
      }
    },[user])
    
  return (
    <div>
      <div className='mt-6 md:mt-12 md:p-5 h-screen'>
            <div className='flex md:flex-row flex-col w-full align-center justify-center	 gap-5 mx-auto'>
                <div className='items-center flex flex-col w-[80%] md:w-1/3 bg-blue-200 p-3 m-3 md:p-5 md:m-5 mx-auto'>
                    <img className="w-[40%] h-[80%] "src={Avatar} alt='avatar'/>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>{user?.findUser?.firstname} {user?.findUser?.lastname}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>Role: {user?.findUser?.role}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>{user?.findUser?.email}</h1>
                </div>
                <div className='w-[80%] md:w-1/2 md:mt-5 mx-auto'>
                  <div className='flex text-base sm:text-lg md:text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>Last Name: {user?.findUser?.firstname}</h1></div>
                  <div className='flex text-base sm:text-lg md:text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>First Name: {user?.findUser?.lastname}</h1></div>
                  <div className='flex text-base sm:text-lg md:text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>Email: {user?.findUser?.email}</h1></div>
                  <div className='flex text-base sm:text-lg md:text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2 mb-3'><h1>Role: {user?.findUser?.role}</h1></div>
                  <div className='flex justify-center'>
                  {user?.findUser?.role==='admin'? <Link to='/admin' className='text-white rounded-full text-center font-semibold bg-green-600 px-2 py-1 mt-3 h-9 w-32 border-2 border-green-600 hover:bg-white hover:text-green-600 '>Admin Panel</Link>: <></>}
                  {!isLogged? <Link to='/login' className='ml-2 text-white rounded-full text-center font-semibold bg-green-600 px-2 py-1 mt-3 w-48 border-2 border-green-600 hover:bg-white hover:text-green-600 h-9'> Please Login Again</Link>: <Link  className='ml-2 text-white rounded-full text-center font-semibold bg-green-600 px-2 py-1 mt-3 w-32 h-9 border-2 border-green-600 hover:bg-white hover:text-green-600 ' onClick={handleLogOut}>Login Out</Link>}
                  </div>
                </div>
            </div>
            {!isLogged? <h1 className='text-red-500'>Session Expired Please Login</h1>:<></>}

      </div>
    
    </div>
  )
}

export default Profile



