import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url } from '../Utils/base_url'
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { config } from '../Utils/headerConfig';

function ProductList() {
    const [Products,setProducts] = useState([]);
    const getProducts = async()=>{
        const productResponse = await axios.get(`${base_url}/product/allProducts`);
        setProducts(productResponse.data.products);
        
    }
    const deleteProduct = async(id)=>{
        const res = await axios.delete(`${base_url}/product/getProduct/${id}`,config);
        getProducts();
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
      <div className='flex bg-white p-5 items-center font-semibold text-lg mt-10' >
            <h1 className='w-1/6 ml-2 text-center'>Title</h1>
            <h1 className='w-1/6 ml-2 text-center'>Price</h1>
            <h1 className='w-1/6 ml-2 text-center'>Quantity</h1>
            <h1 className='w-1/6 ml-2 text-center'>Sold</h1>
            <h1 className='w-1/6 ml-2 text-center'>Delete</h1>
            <h1 className='w-1/6 ml-2 text-center'>Edit</h1>
      </div>
      {Array.isArray(Products) &&
        Products.map((ele)=>{
          return<div className='flex bg-white p-5 items-center justify-between' key ={ele?._id}>
            <h1 className='w-1/6 ml-2 font-semibold h-16 overflow-hidden text-center'>{ele?.title} </h1>
            <h1 className='w-1/6 ml-2 font-semibold overflow-hidden text-center'>{ele?.price}</h1>
            <h1 className='w-1/6 ml-2 font-semibold overflow-hidden text-center'>{ele?.quantity}</h1>
            <h1 className='w-1/6 ml-2 font-semibold overflow-hidden text-center'>{ele?.sold}</h1>
            <RiDeleteBinLine className='w-1/6 ml-2 text-red-600 hover:cursor-pointer' onClick={(e)=>{deleteProduct(ele?._id)}}/>
            <Link to={`${ele?._id}`} className='w-1/6'>
              <FaEdit className='w-full'/>
            </Link>
          </div>
        })
      }

    </div>
  )
}

export default ProductList
