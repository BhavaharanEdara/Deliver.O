import React from 'react'
import speaker from '../images/speaker.jpg'
import ReactStars from "react-rating-stars-component";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function DisplayProductCard(props) {
  return (
    <Link to={`/product/${props?.data?.link}`}key={props.data.key} className='w-[18%] min-w-32 h-[200px] md:w-[18%] lg:w-[17%] md:h-[240px] lg:h-[280px] xl:h-[280px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg border-2 border-zinc-800  bg-white'>
      <div className=' px-2 rounded-xl  flex flex-col justify-between items-stretch relative '>
        <div className='flex flex-col items-center py-[2%] h-1/2 group'>
          <img src={props?.data?.img} alt='product Iamge' className=' object-scale-down w-32 h-24'/>
        </div>
        <div className='md:pt-[5%] lg:pt-[15%]'>
          <p className='text-red-500'>{props?.data?.brand}</p>
          <h3 className=' font-bold max-md:text-xs h-8 md:h-12 overflow-hidden'>{props.data?.title} </h3>
          <p className='font-semibold max-md:text-xs pt-1 '>₹{props.data?.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default DisplayProductCard
