import React from 'react'
import Headphone from '../images/headphone.jpg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteProductFromCart, getCart } from '../Features/cart/CartSlice';
import { addProductToCart } from '../Features/cart/CartSlice';
import { base_url } from '../Utils/base_url';
import axios from 'axios';
import Color from './Color';

function CartItem(props) {
  const dispatch = useDispatch();
  const getAllProducts = async()=>{
    const cart =await dispatch(getCart());
    const promises = cart.payload.Products.map(async(ele)=>{
      const response = await axios.get(`${base_url}/product/getProduct/${ele.Product}`);
      response.data.count = ele.count;
      response.data.chosen = ele.color;
      
      return response.data;
    })
    const prod = await Promise.all(promises);
    props.change(prod);
  }
  const handleRemove = async()=>{
    const data = {Product:props.data._id, color:props.data.chosen, price:props.data.price, count:1}
    await dispatch(deleteProductFromCart(data));
    await getAllProducts()
  }
  const handleAdd = async()=>{
    const data = {Product:props.data._id, color:props.data.chosen, price:props.data.price, count:1}
    await dispatch(addProductToCart(data));
    await getAllProducts()
  }

  const handleDelete = async()=>{
    const data = {Product:props.data._id, color:props.data.chosen, price:props.data.price, count:props?.data?.count}
    await dispatch(deleteProductFromCart(data));
    await getAllProducts();
  }
  return (
    <div>
    <div key={props?.data?._id} className='flex sm:justify-between items-start p-4 md:px-[4%] md:py-[2%] gap-5'>
      <div className='mr-[2%]'>
        <div className='flex'>
            <img src={props?.data?.images[0]?.url} className='h-[150px] w-[180px] mr-10 object-scale-down'/>
            <div className=''>
                <h1 className='hidden md:block text-[70%] lg:text-base font-[550] text-gray-500 py-1'>{props?.data?.title}</h1>
                <h1 className='hidden sm:block text-[80%] lg:text-base font-[550] text-gray-500 my-2'>Colour : <Color data={props?.data?.chosen}/></h1>
            </div>
        </div>
      </div>
      <div className='sm:flex gap-14'>
      <div className='sm:block flex items-center gap-2 pt-2 sm:pt-0'>
        <div className='font-medium text-base lg:text-lg'>Price:</div>
        <span className='font-medium text-base lg:text-lg sm:pt-2 pl-[1%]'>${props?.data?.price}</span>
      </div>
      <div className='sm:block flex items-center gap-2 pt-2 sm:pt-0'>
        <h1 className='font-medium text-base lg:text-lg'>Quantity:</h1>
        <div className='flex items-center mt-2 '>
            <div className='p-0.5 px-2 hover:text-white hover:bg-green-600 bg-green-200 rounded-l-md' onClick={()=>{handleRemove()}}>-</div>
            <div className='p-0.5 px-2  bg-green-200 text-base'>{props?.data?.count}</div>
            <div className='p-0.5 px-2 hover:text-white hover:bg-green-600 bg-green-200 rounded-r-md' onClick={()=>{handleAdd()}}>+</div>
        </div>
      </div>
      <div className='sm:block flex items-center gap-2 pt-2 sm:pt-0'>
          <h1 className='font-medium text-base lg:text-lg'>Total:</h1>
          <h1 className='font-medium text-base lg:text-lg sm:pt-2'>${props?.data?.price*props?.data?.count}</h1>
          <div >
            <RiDeleteBin6Line className='text-4xl mt-[50%] text-center ml-[10%] p-2 bg-gray-800 text-white rounded-full hover:bg-white hover:text-gray-800 hover:border-2 hover:border-200-gray' onClick={()=>handleDelete()}/>
        </div>
      </div>

      </div>
    </div>
    <div className='flex '>
          <h1 className='mx-4 block md:hidden text-[70%] lg:text-base font-[550] text-gray-500 py-1'>{props?.data?.title}</h1>

          </div>
    </div>
  )
}

export default CartItem
