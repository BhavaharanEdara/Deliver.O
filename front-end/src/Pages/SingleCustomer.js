import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
    const getCustomerDetails= async()=>{
        const response = await axios.get(`${base_url}/auth/profile/${id}`,config);
        setData(response.data);

    }
    const deleteCustomer = async()=>{
        const response = await axios.delete(`${base_url}/auth/deleteUser/${data._id}`,config);

      }
    
    useEffect(()=>{
        getCustomerDetails();
    },[])
    return (
        <div className='mt-12 p-5'>
            <h1 className='p-1 bg-gray-200 text-sm font-semibold w-fit'><span className='text-blue-500 '>Admin / Customer</span> / Profile</h1>
            <div className='flex w-full justify-center gap-5'>
                <div className='items-center flex flex-col w-1/3 bg-blue-200 p-5 m-5'>
                    <img className="w-[40%] h-[80%] "src={Avatar} alt='avatar'/>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>{data.firstname} {data.lastname}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>Role: {data.role}</h1>
                    <h1 className='w ml-2  overflow-hidden text-center font-bold text-lg'>{data.email}</h1>
                </div>
                <div className='w-1/2 mt-5'>
                <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>Last Name: {data.firstname}</h1></div>
                <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>First Name: {data.lastname}</h1></div>
                <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>Email: {data.email}</h1></div>
                <div className='flex text-xl font-semibold items-center justify-between bg-blue-100 m-1 p-2'><h1>Role: {data.role}</h1></div>
                </div>
            </div>
        </div>
  )
}

export default SingleCustomer
