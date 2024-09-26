import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { base_url } from '../Utils/base_url';
import { useEffect } from 'react';
import { config } from '../Utils/headerConfig';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Avatar from '../images/avatar.png'
import WishListProduct from '../Components/WishListProduct';

function SingleCustomer() {
    const [data,setData] = useState({});
    const [wishList,setwishList] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const getCustomerDetails= async()=>{
        const response = await axios.get(`${base_url}/auth/profile/${id}`,config);
        setData(response.data);

    }
    const deleteCustomer = async(ele)=>{
    
        try{
          const response = await axios.delete(`${base_url}/auth/profile/${id}`,config);
          alert("Deleted sucessfully")
          navigate("/admin/customers")
        }
        catch(error){
            alert("Failed to delete")

        }
      }    

    const handleUpdate = async()=>{
        try{
        const response = await axios.patch(`${base_url}/auth/profile/${id}`,  data, config)
        alert("Updated Sucessfully")
        }
        catch(error){
            alert("Failed to update");
        }
    }
    
    useEffect(()=>{
        getCustomerDetails();
    },[])
    return (
        <div className='mt-12 p-5'>
            <h1 className='p-1 bg-gray-200 text-sm font-semibold w-fit'><span className='text-blue-500 '>Admin / Customer</span> / Profile</h1>
            <div className='flex w-full justify-center gap-5'>
                <div className='items-center justify-between flex flex-col w-1/3 bg-blue-200 p-5 m-5'>
                    <img className="object-scale-down h-[60%] "src={Avatar} alt='avatar'/>
                    <div>
                    <h1 className='w ml-2  overflow-hidden text-center font-semibold text-lg'>{data.firstname} {data.lastname}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-semibold text-lg'>Role: {data.role}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-semibold text-lg'>{data.email}</h1>
                    </div>
                </div>
                <div className='w-1/2 mt-5'>
                <label className=' text-base'>First Name:</label>
                <input className='border-2 border-gray-400 block p-2 mb-5 w-full  rounded-md' placeholder='First name' value={data.firstname} onChange={(e)=>{setData({...data, firstname:e.target.value})}}/>
                <label className=' text-base'>Last Name:</label>
                <input className='border-2 border-gray-400 block p-2 mb-5 w-full  rounded-md' placeholder='First name' value={data.lastname} onChange={(e)=>{setData({...data, lastname:e.target.value})}}/>
                <label className=' text-base'>Email:</label>
                <input className='border-2 border-gray-400 block p-2 mb-5 w-full  rounded-md' placeholder='First name' value={data.email} onChange={(e)=>{setData({...data, email:e.target.value})}}/>
                <label className=' text-base'>Role:</label>
                <input className='border-2 border-gray-400 block p-2 mb-5 w-full  rounded-md' placeholder='First name' value={data.role} onChange={(e)=>{setData({...data, role:e.target.value})}}/>
                <input type='submit' value='Update' className='border-white rounded-full hover:cursor-pointer bg-yellow-500 px-4 py-1 text-lg text-white' onClick={handleUpdate}/>
                <button  value='Update' className='border-white rounded-full hover:cursor-pointer bg-red-500 px-4 py-1 text-lg text-white ms-4' onClick={deleteCustomer}>Delete</button>
                </div>
            </div>
        </div>
  )
}

export default SingleCustomer
