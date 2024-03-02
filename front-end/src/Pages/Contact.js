import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";


function Contact() {

  return (
    <div className='bg-green-100 w-full pb-10'>

    <div className='flex justify-center items-center w-full '>
      <iframe 
      className='w-[75%] h-[500px]'
        title='gmaps'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15372.535299097666!2d79.85420408510421!3d15.584497200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ae2573ef2a75f%3A0xaae5b35ae31b07ef!2sAmazon%20Store!5e0!3m2!1sen!2sin!4v1704371788233!5m2!1sen!2sin"
        width="" 
        height="" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    <div className='flex w-full'>
      <div className='p-10 w-1/2 ml-[6%] bg-white rounded-l-md'>
        <h1 className='text-3xl font-semibold'>Contact</h1>
        <form action="" className=''>
          <input className='bg-gray-200 block p-2 my-5 w-full  rounded-md placeholder:text-gray-600' placeholder='Name'/>
          <input className='bg-gray-200 block p-2 my-5 w-full  rounded-md placeholder:text-gray-600' placeholder='Email'/>
          <input className='bg-gray-200 block p-2 my-5 w-full  rounded-md placeholder:text-gray-600' placeholder='Phone Number'/>
          <textarea className='bg-gray-200 block p-2 my-5 w-full  rounded-md placeholder:text-gray-600' rows="5" cols="30" placeholder='Comment'/>
          <input className='text-white rounded-full text- bg-slate-800 px-5 py-2 my-3' type="submit" vlaue=""/>

        </form> 
      </div>
      <div className='p-10 w-1/2 mr-[6%] bg-white rounded-r-md'>
          <h1 className='text-3xl font-semibold'>Get in touch with Us</h1>
          <p className='py-2 pl-2 font-sans font-medium text-base text-gray-600 leading-9'><FaHome className='inline mr-5'/>Demo Store No 1425 Larry Street New York, 14141 United States</p>
          <p className='py-2 pl-2 font-sans font-medium text-base text-gray-600'><FaPhoneAlt className='inline mr-5'/>+91 9440001237</p>
          <p className='py-2 pl-2 font-sans font-medium text-base text-gray-600'><IoMail className='inline mr-5'/>demo@delivero.com</p>
          <p className='py-2 pl-2 font-sans font-medium text-base text-gray-600'><BsFillInfoCircleFill className='inline mr-5'/>Monday - Friday 10am - 8pm</p>

      </div>
    </div>

  </div>
  )
}

export default Contact
