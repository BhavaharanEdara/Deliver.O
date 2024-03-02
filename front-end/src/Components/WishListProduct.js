import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig';


function WishListProduct(props) {
  const [data, setData] = useState({});

  const getProductDetails = async()=>{
    const response = await axios.get(`${base_url}/product/getProduct/${props.id}`);
    setData(response.data);
  }
  const handleRemove = async()=>{
    const response = await axios.put(`${base_url}/product/addWishlist`,{productId:data?._id},config);
    localStorage.setItem("user", JSON.stringify({findUser:response.data}));
    props.setWishlist(response?.data?.wishlist); 
  }
  useEffect(()=>{
    getProductDetails();
  },[])
  return (
    <div key={props.id} className='w-52 h-[250px] max-h-[500px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg border-2 bg-white group'>
      <div className=' px-4 rounded-xl  flex flex-col justify-between items-stretch relative '>
        <div className='flex flex-col items-center py-[5%] h-1/2 '>
          <img src={data.images ? data?.images[0]?.url : null} alt='product Image' className='pt-[5%] w-32 h-[125px] object-scale-down'/>
          <div className='absolute top-0 right-0 pr-[5%] text-3xl'>
            <RxCross1 className='my-[50%] hover:text-white hover:bg-red-500 p-[10%] rounded-lg' onClick={()=>{handleRemove()}}/>
          </div>
        </div>
        <div className='py-[10%]'>
          <h3 className='font-bold text-[85%] pt-1 h-11 overflow-hidden'>{data?.title} </h3>
          <p className='font-semibold text-[90%] pt-1'>₹{data?.price}</p>
        </div>
      </div>
    </div>
  )
}

export default WishListProduct;
