import React from 'react'
import { GrSend } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className='border-2 border-black m-1 rounded-md'>
        <div className='w-full text-gray-800 flex p-1 md:p-5 items-center justify-around text-xl font-semibold'>
          <div className='flex items-center'>
            <GrSend className='m-2 sm:m-5'/>
            <p className='hidden sm:block  text-sm md:text-xl'>Sign Up For Newsletter</p>
          </div>
          <div className='sm:w-[50%] md:w-1/3 flex items-center p-1 bg-white rounded border-2 border-black'>
            <input className='w-full text-black  outline-none pl-2 md:ml-3 md:pl-2 placeholder:italic placeholder:text-sm md:placeholder:text-md placeholder:text-slate-400' placeholder='Your Email . . .'/>
            <p className="text-sm md:text-md bg-indigo-950 p-1  rounded-md text-white">subscribe</p>
          </div>
        </div>
      </footer>
      <footer className='border-2 border-black m-1 rounded-md text-gray-800 flex justify-around pt-5'>
        <div className='w-1/6'>
          <h5 className=' font-semibold'>
            Contact Us
          </h5>
          <div className='text-sm font-normal'>
            <p className='py-2 leading-9'>Demo Store No 1425 Larry Street New York, 14141 United States</p>
            <p className='py-2'>+91 9440001237</p>
            <p className='py-2'>demo@delivero.com</p>
            <div className='flex p-2 text-lg'>
              <FaTwitter className="my-2 mr-2" />
              <FaInstagram className="m-2"/>
              <FaFacebook className="m-2"/>
              <FaYoutube className="m-2"/>
            </div>
          </div>
        </div>
        <div>
          <h5 className=' font-semibold'>
            Information
          </h5>
          <div className='text-sm font-normal'>
            <p className='py-2'>Privacy Policy</p>
            <p className='py-2'>Refund Policy</p>
            <p className='py-2'>Shipping Policy</p>
            <p className='py-2'>Terms and Service</p>
            <p className='py-2'>Blogs</p>
          </div>
        </div>
        <div>
          <h5 className=' font-semibold'>
            Account
          </h5>
          <div className='text-sm font-normal'>
            <p className='py-2'>Search</p>
            <p className='py-2'>About Us</p>
            <p className='py-2'>FAQ </p>
            <p className='py-2'>Contact</p>
            <p className='py-2'>Size chart</p>
          </div>
        </div>
        <div>
        <h5 className=' font-semibold'>
            Quick Links
          </h5>
          <div className='text-sm font-normal'>
            <p className='py-2'>Accesories</p>
            <p className='py-2'>Laptops</p>
            <p className='py-2'>Headphones</p>
            <p className='py-2'>Smart Watches</p>
            <p className='py-2'>Tablets</p>
          </div>

        </div>
      </footer>
      <footer className='border-2 font-medium border-black m-1 rounded-md text-gray-800 font-sm p-5 text-center items-center'>© 2024 All rights reserved by Deliver.o</footer>
    </>
  )
}
