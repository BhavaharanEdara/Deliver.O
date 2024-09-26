import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Customers() {
  const [allCustomers, setAllCustomers] = useState([]);

  const deleteCustomer = async(ele)=>{
    
    try{
      const response = await axios.delete(`${base_url}/auth/profile/${ele._id}`,config);
      setAllCustomers(allCustomers.filter(customer=>customer._id!=ele._id));
    }
    catch(error){
      alert("Failed to delete")
    }
  }
  const getCustomers = async()=>{
    const response = await axios.get(`${base_url}/auth/allUsers`,config);
    setAllCustomers(response.data);

  }
  useEffect(()=>{
    getCustomers();
  },[])

  return(
    <div className='px-5 bg-white'>
      <div className='flex bg-white p-5 items-center font-semibold text-lg mt-10' >
            <h1 className='w-1/6 ml-2 text-center'>First Name</h1>
            <h1 className='w-1/6 ml-2 text-center'>Last Name</h1>
            <h1 className='w-1/6 ml-2 text-center'>Email</h1>
            <h1 className='w-1/6 ml-2 text-center'>Role</h1>
            <h1 className='w-1/6 ml-2 text-center'>Delete</h1>
            <h1 className='w-1/6 ml-2 text-center'>Edit</h1>
      </div>
      {
        allCustomers.map((ele)=>{
          return<div className='flex bg-white p-5 items-center justify-between' key ={ele._id}>
            <h1 className='w-1/6 ml-2  overflow-hidden text-center'>{ele.firstname} </h1>
            <h1 className='w-1/6 ml-2  overflow-hidden text-center'>{ele.lastname}</h1>
            <h1 className='w-1/6 ml-2  overflow-hidden text-center'>{ele.email}</h1>
            <h1 className='w-1/6 ml-2  overflow-hidden text-center'>{ele.role}</h1>
            <RiDeleteBinLine className='w-1/6 ml-2 text-red-600 hover:cursor-pointer' onClick={(e)=>{deleteCustomer(ele)}}/>
            <Link to={`${ele._id}`} className='w-1/6'>
              <FaEdit className='w-full'/>
            </Link>
          </div>
        })
      }
    </div>
  )
}

export default Customers
