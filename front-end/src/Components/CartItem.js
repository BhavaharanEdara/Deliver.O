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
    console.log(cart);
    const promises = cart.payload.Products.map(async(ele)=>{
      const response = await axios.get(`${base_url}/product/getProduct/${ele.Product}`);
      response.data.count = ele.count;
      response.data.chosen = ele.color;
      
      return response.data;
    })
    const prod = await Promise.all(promises);
    console.log("hello");
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
    <div key={props?.data?._id} className='flex justify-between items-start  px-[4%] py-[2%] gap-5'>
      <div className='mr-[2%]'>
        <div className='flex'>
            <img src={props?.data?.images[0]?.url} className='h-[150px] w-[180px] mr-10 object-scale-down'/>
            <div className=''>
                <h1 className='text-[100%] font-[550] text-gray-500 py-1'>{props?.data?.title}</h1>
                <h1 className='text-[100%] font-[550] text-gray-500 my-2'>Colour : <Color data={props?.data?.chosen}/></h1>

            </div>
        </div>
      </div>
      <div className='flex gap-14'>
      <div className=''>
        <h1 className='font-medium text-lg'>Price</h1>
        <h1 className='font-medium text-lg pt-2 pl-[1%]'>{props?.data?.price}</h1>
      </div>
      <div>
        <h1 className='font-medium text-lg'>Quantity</h1>
        <div className='flex items-center mt-2 '>
            <div className='p-0.5 px-2 hover:text-white hover:bg-green-600 bg-green-200 rounded-l-md' onClick={()=>{handleRemove()}}>-</div>
            <div className='p-0.5 px-2  bg-green-200 '>{props?.data?.count}</div>
            <div className='p-0.5 px-2 hover:text-white hover:bg-green-600 bg-green-200 rounded-r-md' onClick={()=>{handleAdd()}}>+</div>
        </div>
      </div>
      <div>
          <h1 className='font-medium text-lg'>Total</h1>
          <h1 className='font-medium text-lg pt-2'>{props?.data?.price*props?.data?.count}</h1>
        <div >
            <RiDeleteBin6Line className='text-4xl mt-[50%] text-center ml-[10%] p-2 bg-gray-800 text-white rounded-full hover:bg-white hover:text-gray-800 hover:border-2 hover:border-200-gray' onClick={()=>handleDelete()}/>
        </div>
      </div>

      </div>
    </div>
  )
}

export default CartItem
