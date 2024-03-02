import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig'; 


function ProductCard(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [pleaseLogin, setPleaseLogin]  = useState(false);
  const [present,setPresent] = useState(false);
  const handleWish = async()=>{
    const response = await axios.put(`${base_url}/product/addWishlist`,{productId:props?.data?._id},config);
    console.log(response);
    if(!response.status || response?.status!==200){
      setPleaseLogin(true);

      setTimeout(()=>{
        setPleaseLogin(false);
      },500);

    }
    else{
      if(props.wishlist?.some(item=>item===props.data._id)){
        setPresent(false);
      }
      else{
        setPresent(true);
      }
      localStorage.setItem("user", JSON.stringify({findUser:response.data}));
      props.setWishlist(response.data.wishlist);
    }

  }

  return (
    <div key={props.data?._id} className='mb-2 md:w-40 xl:w-52 md:h-[300px] md:max-h-[500px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg border-2 bg-white group'>
        <div className={`fixed p-1 px-4 top-10 ${pleaseLogin ? "": "hidden"} left-[50%] font-semibold bg-green-300 rounded-md text-white transition-all ease-out duration-300`}>
            <p>Please Login <span className='text-red-400 font-bold '>!</span></p>
        </div>
      <div className=' max-[500px]:px-2 sm:px-4 rounded-xl  flex md:flex-col md:justify-between items-center md:items-stretch relative max-[768px]:gap-x-2'>
        <div className='flex flex-col items-center py-[5%]'>
          <Link to={`/product/${props.data._id}`}><img src={props.data?.images[0]?.url} alt='product Iamge' className='pt-[5%] w-32 h-[125px] object-scale-down'/></Link>
          <div className='absolute top-0 right-0 pr-[10%] text-3xl'>
            <IoIosHeartEmpty className={`${present || props.wishlist?.some(item=>item===props.data._id)? 'bg-red-400 text-white hover:bg-white hover:text-black': 'hover:bg-red-500 hover:text-white'} my-[50%]  p-[10%] rounded-lg hover:cursor-pointer`} onClick={()=>{handleWish()}}/>
            <Link to={`/product/${props.data._id}`}>
              <IoBagOutline className='hidden group-hover:block my-[50%] hover:text-white hover:bg-red-500 group-hover:p-[10%] rounded-lg hover:cursor-pointer'/>
              <IoEyeOutline className='hidden group-hover:block my-[50%]  hover:text-white hover:bg-red-500 group-hover:p-[10%] rounded-lg hover:cursor-pointer'/>
            </Link>
          </div>
        </div>
        <Link to={`/product/${props.data._id}`} className='md:pt-[15%] max-[768px]:w-1/2'>
          <p className='text-red-500'>{props.data.brand}</p>
          <h3 className='font-bold h-10 text-[85%] pt-1 max-[500px]:text-[75%] overflow-hidden min-[501px]:h-12 '>{props.data?.title} </h3>
          <p className='font-semibold text-[90%] pt-1'>₹{props.data.price}</p>
          <ReactStars
          count={5}
          size={20}
          edit ={false}
          value={props.data?.totalRating}
          activeColor="#ffd700" />
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
