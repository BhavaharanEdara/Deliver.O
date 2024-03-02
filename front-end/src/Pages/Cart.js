import React, { useEffect, useState } from 'react'
import CartItem from '../Components/CartItem'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Features/cart/CartSlice';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
function Cart() {
  const dispatch = useDispatch();
  const [products,SetProducts] =useState([]);
  const [total, setTotal] = useState(0);
  const cartState = useSelector((store)=>{
    return store.cart.cart})
  const getAllProducts = async()=>{
    const cart =await dispatch(getCart());

    if(cart.payload===null || !cart.payload.Products){
      return;
    }
    const promises = cart.payload.Products.map(async(ele)=>{
      const response = await axios.get(`${base_url}/product/getProduct/${ele.Product}`);
      response.data.count = ele.count;
      response.data.chosen = ele.color;
      
      return response.data;
    })
    setTotal(cart.payload.cartTotal);
    const prod = await Promise.all(promises);
    SetProducts(prod);
  }
  useEffect(()=>{
     getAllProducts();
  },[])
  return (
    <div className='bg-green-100'>
      {products.length!==0 ? <><div className='bg-white rounded-lg'>
        <h1 className='font-medium text-lg pl-[2.5%]'>Products</h1>
            {products.map((ele)=>{
              return <CartItem data={ele} change={SetProducts}/>
            })}
      </div>
      <div className='bg-green-100 p-[3%]'>
          <div className='flex items-start mt-5 justify-between'>
            <Link to="/products"className='text-white rounded-full text-center font-semibold bg-gray-800 px-5 py-2 my-3 ml-[2%] border-2 border-gray-600 hover:bg-white hover:text-gray-800 ' >Continue Shopping</Link>
            <div className='flex flex-col justify-end mr-[2%] '>
              <h1 className='font-medium text-xl text-gray-700 text-end p-2'>Sub Total: ${total}</h1>
              <h1 className='font-medium w-56 text-lg text-gray-500 text-end p-2'>*Including all Taxes </h1>
              <Link to={`/Checkout/${total}`}className='text-white rounded-full text-center font-semibold bg-gray-800 px-5 py-2 my-3  border-2 border-gray-600 hover:bg-white hover:text-gray-800 ' >Check Out</Link>
            </div>
          </div>
      </div></> : <div className='bg-green-100 h-[500px] my-5 flex items-center w-[100%] justify-center flex-col'>
        <h1 className='font-medium text-lg pl-[2.5%]'>Cart is Empty</h1>
        <Link to="/products"className='text-white rounded-full text-center font-semibold bg-gray-800 px-5 py-2 my-3 ml-[2%] border-2 border-gray-600 hover:bg-white hover:text-gray-800 ' >Continue Shopping</Link>
        </div>}
    </div>
  )
}

export default Cart
