import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishList } from '../Features/auth/AuthSlice';


function ProductCard(props) {
  const user = useSelector(state=>state?.auth?.user?.findUser);
  const [pleaseLogin, setPleaseLogin]  = useState(false);
  const [present,setPresent] = useState(false);
  const dispatch = useDispatch();

  const handleWish = async()=>{
    try{
      dispatch(removeFromWishList(props.data));
    }
    catch(error){
    setPleaseLogin(true);
    setTimeout(()=>{
      setPleaseLogin(false);
    },2000);

    }
  }

  

  return (
    <div key={props.data?._id} className='md:w-[28%] lg:w-[22%] xl:w-[15%] mb-2 md:h-[300px] md:max-h-[500px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg border-2 bg-white group'>
        <div className={`fixed p-2 px-4 top-10 z-20 ${pleaseLogin ? "": "hidden"} left-[50%] font-semibold bg-red-700 rounded-md text-white transition-all ease-out duration-300`}>
            <p>Please Login <span className='text-blue-400 font-bold '>!</span></p>
        </div>
      <div className=' max-[500px]:px-1 sm:px-4 rounded-xl  flex md:flex-col md:justify-between items-center md:items-stretch relative gap-4 md:gap-0'>
        <div className='flex flex-col items-center py-[5%]'>
          <Link to={`/product/${props.data._id}`}><img src={props.data?.images[0]?.url} alt='product Iamge' className='pt-[5%] w-32 md:h-[100px] lg:h-[125px] object-scale-down'/></Link>
          <div className='absolute top-0 right-0 pr-[10%] text-3xl'>
            {user?.wishlist?.some(item=>item===props.data._id) ? <IoIosHeart className="hover:cursor-pointer hover:text-red-600 text-red-400 my-[50%]  p-[10%]" onClick={handleWish}/> : <IoIosHeartEmpty className='hover:text-red-600 my-[50%]  p-[10%] hover:cursor-pointer'onClick={handleWish}/>}
            <Link to={`/product/${props.data._id}`} className='hidden md:block'>
              <IoBagOutline className='hidden group-hover:block my-[50%] hover:text-white hover:bg-red-500 group-hover:p-[10%] rounded-lg hover:cursor-pointer'/>
              <IoEyeOutline className='hidden group-hover:block my-[50%]  hover:text-white hover:bg-red-500 group-hover:p-[10%] rounded-lg hover:cursor-pointer'/>
            </Link>
          </div>
        </div>
        <Link to={`/product/${props.data._id}`} className='md:pt-[15%] max-[767px]:w-1/2'>
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
