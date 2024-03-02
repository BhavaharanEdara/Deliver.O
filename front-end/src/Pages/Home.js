import React, { useRef } from 'react'
import MainBanner from '../images/main-banner-1.jpg'
import categoryBanner1 from '../images/catbanner-01.jpg'
import categoryBanner2 from '../images/catbanner-02.jpg'
import categoryBanner3 from '../images/catbanner-03.jpg'
import categoryBanner4 from '../images/catbanner-04.jpg'
import Tv from '../images/tv.jpg'
import Camera from '../images/camera.jpg'
import Watch from '../images/watch.jpg'
import Headphone from '../images/headphone.jpg'
import Homeapp from '../images/homeapp.jpg'
import Laptop from '../images/laptop.jpg'
import Accesories from '../images/acc.jpg'
import Speaker from '../images/speaker.jpg'
import Acer from '../images/acer.webp'
import Apple from '../images/Apple.jpg'
import Puma from '../images/Puma.jpg'
import Noise from '../images/Noise.webp'
import watch from '../images/Watch.webp'
import Brand1 from '../images/brand-01.png'
import Brand2 from '../images/brand-02.png'
import Brand3 from '../images/brand-03.png'
import Brand4 from '../images/brand-04.png'
import Brand5 from '../images/brand-05.png'
import Brand6 from '../images/brand-06.png'
import Brand7 from '../images/brand-07.png'
import Brand8 from '../images/brand-08.png'
import Marquee from "react-fast-marquee";


import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import { LiaHeadsetSolid } from "react-icons/lia";
import { TbDiscount2 } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa";

import { Link } from 'react-router-dom';
import DisplayProductCard from '../Components/DisplayProductCard'
import Subbanner from '../Components/Subbanner'
import {data} from '../Data/Sub-data'
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {
  const items = data;
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
    <div className='hidden md:block'>
      <div className='hidden md:flex w-full'>
        <div className='my-5 ml-[5%] relative w-[46%] border-2 border-zinc-800 rounded-md '>
            <img className=' rounded-md' src={MainBanner} alt="Main Banner"/>
            <div className='absolute top-5 left-[3%] ml-[2%] mt-[2%]'>
              <h4 className='md:text-md lg:text-lg  text-orange-600 font-semibold p-1'>SUPER CHARGED FOR PROS</h4>
              <h1 className='md:text-2xl lg:text-3xl xl:text-5xl font-bold p-1'>iPhone 14 Pro.</h1>
              <p className='lg:text-md xl:text-lg p-1 text-gray-900 font-bold'>From ₹89,999.00 or ₹4,999.00/mo.</p>
              <Link to="/product/65c39d688230661e54f15a78" className='text-blue-500 p-1 font-bold hover:text-white'>BUY NOW</Link>
            </div>
        </div>
        <div className='flex flex-wrap justify-between items-center pr-[5%] pl-4 md:ml-[1%] lg:ml-[2%] mt-5 w-1/2 h-[5%] '>
          <Link to="/products/laptop" className='w-[48%] hover:cursor-pointer h-auto border-2 border-zinc-800 rounded-md relative'>
            <img className=' rounded-md' src={categoryBanner1} alt="category banner "/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className=' md:text-md lg:text-lg md:p-0 text-orange-600 font-semibold lg:p-1'>Best Sale</h4>
              <h1 className='md:text-xl lg:text-2xl font-bold lg:p-1'>Laptops</h1>
              <p className='md:text-[75%] lg:text-[80%] pt-1 lg:p-1 text-gray-900 font-medium '>From ₹29,999 <br/>or ₹899.25/mo</p>
            </div>
          </Link>
          <Link to="/products/watch" className='w-[48%] hover:cursor-pointer h-auto border-2 border-zinc-800 rounded-md relative'>
            <img className=' rounded-md' src={categoryBanner2} alt="category banner"/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className='md:text-md lg:text-lg text-orange-600 font-semibold lg:p-1'>15% OFF</h4>
              <h1 className='md:text-xl lg:text-2xl font-bold  lg:p-1'>Smart Watch</h1>
              <p className='md:text-[75%] lg:text-[80%]  lg:p-1 text-gray-900 font-medium '>From ₹599 <br/>or ₹29.25/mo</p>
            </div>
          </Link>
          <Link to="/products/IPad" className='w-[48%] h-auto mt-[6%] border-2 border-zinc-800 rounded-md relative'>
            <img className=' rounded-md' src={categoryBanner3} alt="category banner"/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className='md:text-md lg:text-lg text-orange-600 font-semibold lg:p-1'>New Arival</h4>
              <h1 className='md:text-xl lg:text-2xl font-bold  lg:p-1'>Buy IPad Air</h1>
              <p className='md:text-[75%] lg:text-[80%]  lg:p-1 text-gray-900 font-medium '>From ₹19,999 <br/> or ₹199.72/mo</p>
            </div>
          </Link>
          <Link to="/products/AirPods" className='w-[48%] h-auto mt-[6%] border-2 border-zinc-800 rounded-md relative'>
            <img className=' rounded-md'  src={categoryBanner4} alt="category banner"/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className='md:text-md lg:text-lg text-orange-600 font-semibold lg:p-1'>Hot Deals</h4>
              <h1 className='md:text-xl lg:text-2xl font-bold lg:p-1'>AirPods Max</h1>
              <p className='md:text-[75%] lg:text-[80%] lg:p-1 text-gray-900 font-medium '>From ₹9,999 <br/>or ₹99.25/mo</p>
            </div>
          </Link>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-around px-[5%] pt-5 text-gray-700'>
        <div className='flex items-center '>
            <LiaShippingFastSolid className='text-4xl m-1'/>
            <div className='px-5'>
              <h3 className='text-base font-bold'>Free Shipping</h3>
              <p className='text-xs font-medium'>From orders over ₹499</p>
            </div>
          </div>
          <div className='flex items-center '>
            <LiaGiftSolid className='text-4xl m-1'/>
            <div className='px-5'>
              <h3 className='text-base font-bold'>Daily Surprise Offers</h3>
              <p className='text-xs font-medium'>Save upto 25% off</p>
            </div>
          </div>
          <div className='flex items-center '>
            <LiaHeadsetSolid className='text-4xl m-1'/>
            <div className='px-5'>
              <h3 className='text-base font-bold'>Support 24/7</h3>
              <p className='text-xs font-medium'>Shop with an expert</p>
            </div>
          </div>
          <div className='flex items-center md:hidden lg:flex'>
            <TbDiscount2 className='text-4xl m-1'/>
            <div className='px-5'>
              <h3 className='text-base font-bold'>Affordable Price</h3>
              <p className='text-xs font-medium'>Get Factory Direct Price</p>
            </div>
          </div>
          <div className='flex items-center '>
            <FaRegCreditCard className='text-4xl m-1'/>
            <div className='px-5'>
              <h3 className='text-base font-bold'>Secure Payments</h3>
              <p className='text-xs font-medium'>100% protected payments</p>
            </div>
          </div>

        </div>
      </div>
      <div className='flex flex-wrap items-center justify-around mx-[5%] border-2 border-zinc-800 mt-[2%] rounded-lg'>
      <Link to="/products/TV" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40  mx-[0.5%] my-[2%] rounded-lg '>
          <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[110%] text-[120%] font-bold'>Smart Tv</h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Tv} alt="Tv" className='w-1/2 object-scale-down '/>
        </Link>
        <Link to="/products/camera" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[110%] text-[120%] font-bold'>Camera</h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Camera} alt = 'camera' className='w-1/2 object-scale-down ' />
        </Link>
        <Link to="/products/watch" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[110%] text-[120%] font-bold '>Smart watch</h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Watch} alt="watches"  className='w-1/2 h-28 object-scale-down '/>
        </Link>
        <Link to="/products/Home%20appliances" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[108%] text-[120%] font-bold'>Home appliances</h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Homeapp} alt='Home Appliances' className='w-1/2 object-scale-down '/>
        </Link>
        <Link to="/products/music" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[110%] text-[120%] font-bold'>Music </h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Headphone} alt="Headphones" className='w-1/2 object-scale-down'/>
        </Link>
        <Link to="/products/laptop" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[110%] text-[120%] font-bold'> Laptops</h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Laptop} alt = "Laptop" className='w-1/2 object-scale-down '/>
        </Link>
        <Link to="/products/speaker" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[110%] text-[120%] font-bold'>Portable Speakers</h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Speaker} alt="Speaker" className='w-1/2 object-scale-down '/>
        </Link>
        <Link to="/products/buds" className='flex flex-wrap items-center w-1/5 hover:cursor-pointer border-2 border-zinc-600 md:h-28 lg:h-36 xl:h-40 mx-[0.5%] my-[2%] rounded-lg '>
          <div className='md:pl-2 lg:pl-3 xl:px-5 w-1/2'>
            <h3 className='md:text-[90%] lg:text-[110%] text-[120%] font-bold'>Accesories</h3>
            <p className='md:text-sm lg:text-[100%] font-normal'>10 Items</p>
          </div>
          <img src={Accesories} alt="Accesories" className='w-1/2 object-scale-down '/>
        </Link>

      </div>
      <div className='my-[2%]'>
        <div className='ml-[5%] mr-[5%] '>
        <Marquee className='flex  justify-between items-center'>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand1} alt="Brand1"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand2} alt="Brand2"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand3} alt="Brand3"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand4} alt="Brand4"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand5} alt="Brand5"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand6} alt="Brand6"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand7} alt="Brand7"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand8} alt="Brand8"/></div>
        </Marquee>
        </div>
      </div>
      <div className='flex flex-wrap mx-[5%] justify-around p-[2%] border-2 border-zinc-800 rounded-lg'>
        <DisplayProductCard data={{img:Acer, title:"Acer Aspire Lite AMD Ryzen 5 5500U Premium Thin and Light Laptop", price:36990, brand:"Acer" ,link:"65ccb601baf8563acf673c55",key:1}}/>
        <DisplayProductCard data={{img:Apple, title:"Apple iPhone 14 (256 GB) - (Product) RED", price:65998, brand:"Apple", link:"65c39d688230661e54f15a78",key:2}}/>
        <DisplayProductCard data={{img:Noise, title:"Noise Buds VS402 in-Ear Truly Wireless Earbuds with 50H of Playtime, Low Latency, Quad Mic with ENC, Instacharge(10 min=120 min),10mm Driver, BT v5.3, Breathing LED Lights (Neon Black", price:999, brand:"Noise", link:"65c357abba88ad5e1966bc42",key:5}}/>
        <DisplayProductCard data={{img:Puma, title:"Puma Womens Ultimate Ease WNS Walking Shoe", price:1652 , brand:"Puma", link:"65c3992b057551db4b49c439",key:3}}/>
        <DisplayProductCard data={{img:watch, title:"Noise Force Rugged & Sporty 1.32 'Bluetooth Calling Smart Watch", price:1499, brand:"Noise", link:"65c39b4c8230661e54f15a5d",key:4}}/>
      </div>
      <div className='flex mx-[4%] my-[2%] justify-evenly items-center'>
          {items.map((e)=>{
            return (<Subbanner {...e} key={e.id}/>)})
          }
      </div>
      <div className='flex flex-wrap justify items-center mx-[4%]'>
      </div>
    </div>
    <div className='md:hidden '>
      <div className='min-[500px]:mx-14 mx-5 relative'>
        <Slider ref={slider} {...settings}>
          <div className='relative '>
            <img className=' rounded-md h-1/2 object-fill' src={MainBanner} alt="Main Banner"/>
            <div className='absolute top-5 left-[3%] ml-[2%] mt-[2%]'>
              <h4 className='text-[100%]  text-orange-600 font-semibold p-1'>SUPER CHARGED FOR PROS</h4>
              <h1 className='text-[180%] lg:text-3xl xl:text-5xl font-bold p-1'>iPhone 14 Pro.</h1>
              <p className='text-[100%] xl:text-lg p-1 text-gray-900 font-bold'>From ₹89,999.00 or ₹4,999.00/mo.</p>
              <Link to="/product/65c39d688230661e54f15a78" className='text-blue-500 p-1 font-bold hover:text-white'>BUY NOW</Link>
            </div>

          </div>  
          <Link to="/products/laptop" className='w-[48%] hover:cursor-pointer h-auto border-2  rounded-md relative'>
            <img className=' rounded-md w-full' src={categoryBanner1} alt="category banner "/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className='text-[100%]  md:p-0 text-orange-600 font-semibold lg:p-1'>Best Sale</h4>
              <h1 className='text-[180%]  lg:text-2xl font-bold lg:p-1'>Laptops</h1>
              <p className='text-[100%]  pt-1  text-gray-900 font-medium '>From ₹29,999 or ₹899.25/mo</p>
            </div>
          </Link>
          <Link to="/products/watch" className='w-[48%] hover:cursor-pointer h-auto border-2  rounded-md relative'>
            <img className=' rounded-md w-full' src={categoryBanner2} alt="category banner"/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className='text-[100%] text-orange-600 font-semibold lg:p-1'>15% OFF</h4>
              <h1 className='text-[180%] font-bold  lg:p-1'>Smart Watch</h1>
              <p className='text-[100%]  text-gray-900 font-medium '>From ₹599 or ₹29.25/mo</p>
            </div>
          </Link>
          <Link to="/products/IPad" className='w-[48%] h-auto border-2  rounded-md relative'>
            <img className=' rounded-md w-full' src={categoryBanner3} alt="category banner"/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className='text-[100%]  text-orange-600 font-semibold lg:p-1'>New Arival</h4>
              <h1 className='text-[180%]  font-bold  lg:p-1'>Buy IPad Air</h1>
              <p className='text-[100%]  text-gray-900 font-medium '>From ₹19,999  or ₹199.72/mo</p>
            </div>
          </Link>
          <Link to="/products/AirPods" className='w-[48%] h-auto rounded-md relative'>
            <img className=' rounded-md w-full'  src={categoryBanner4} alt="category banner"/>
            <div className='absolute top-0 left-1 ml-[5%] mt-[5%]'>
              <h4 className='text-[100%] text-orange-600 font-semibold lg:p-1'>Hot Deals</h4>
              <h1 className='text-[180%]  font-bold '>AirPods Max</h1>
              <p className='text-[100%]  text-gray-900 font-medium '>From ₹9,999 or ₹99.25/mo</p>
            </div>
          </Link>

        </Slider>
        <FaArrowLeft className="arrow left text-2xl absolute top-1/2 p-1 bg-white" onClick={() => slider.current.slickPrev()} />
        <FaArrowRight className="arrow right absolute text-2xl  top-1/2 right-0 p-1 bg-white" onClick={() => slider.current.slickNext()} />
      </div>
      <div >
        <div className='max-[400px]:hidden flex max-[500px]:flex-wrap gap-y-2 justify-around px-[5%] pt-5 text-gray-700'>
        <div className='flex  items-center max-[500px]:w-[45%] '>
            <LiaShippingFastSolid className='text-3xl m-1'/>
            <div className='px-5'>
              <h3 className='text-sm font-bold '>Free Shipping</h3>
              <p className='text-xs font-medium'>From orders over ₹499</p>
            </div>
          </div>
          <div className='flex items-center max-[500px]:w-[45%]'>
            <LiaGiftSolid className='text-3xl m-1'/>
            <div className='px-5'>
              <h3 className='text-sm font-bold'>Daily Surprise Offers</h3>
              <p className='text-xs font-medium'>Save upto 25% off</p>
            </div>
          </div>
          <div className='flex items-center max-[500px]:w-[45%]'>
            <LiaHeadsetSolid className='text-3xl m-1'/>
            <div className='px-5'>
              <h3 className='text-sm font-bold'>Support 24/7</h3>
              <p className='text-xs font-medium'>Shop with an expert</p>
            </div>
          </div>
          <div className='flex items-center max-[500px]:w-[45%]'>
            <FaRegCreditCard className='text-3xl m-1'/>
            <div className='px-5'>
              <h3 className='text-sm font-bold'>Secure Payments</h3>
              <p className='text-xs font-medium'>100% protected payments</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-around mx-[2%] border-2 border-zinc-800 mt-[2%] rounded-lg'>
      <Link to="/products/TV" className='flex flex-wrap max-[400px]:w-28 justify-between items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28  mx-[0.5%] my-[2%] rounded-lg ' >
          <div className='pl-2  w-1/2'>
            <h3 className='max-[400px]:text-[3vw] text-[2vw]  font-bold' >Smart Tv</h3>
            <p className='max-[400px]:text-[3vw] text-[2vw]  font-normal' >10 Items</p>
          </div>
          <img src={Tv} alt="Tv" className='w-[45%] object-scale-down '/>
        </Link>
        <Link to="/products/camera" className='flex flex-wrap max-[400px]:w-28 justify-between items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='pl-2  w-1/2'>
            <h3 className='max-[400px]:text-[3vw] text-[2vw]  font-bold' >Camera</h3>
            <p className='max-[400px]:text-[3vw] text-[2vw]  font-normal' >10 Items</p>
          </div>
          <img src={Camera} alt = 'camera' className='w-[45%] object-scale-down ' />
        </Link>
        <Link to="/products/watch" className='flex flex-wrap max-[400px]:w-28 justify-between items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='pl-2  w-1/2'>
            <h3 className='max-[400px]:text-[3vw] text-[2vw]  font-bold ' >Smart watch</h3>
            <p className='text-sm max-[400px]:text-[3vw] text-[2vw]  font-normal' >10 Items</p>
          </div>
          <img src={Watch} alt="watches"  className='w-[45%] h-20 object-cover '/>
        </Link>
        <Link to="/products/Home%20appliances" className='flex max-[400px]:w-28 flex-wrap justify-between items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='pl-2  w-1/2'>
            <h3 className='max-[400px]:text-[3vw] text-[2vw]  font-bold' >Home appliances</h3>
            <p className=' max-[400px]:text-[3vw] text-[2vw]  font-normal' >10 Items</p>
          </div>
          <img src={Homeapp} alt='Home Appliances' className='w-[45%] object-scale-down '/>
        </Link>
        <Link to="/products/music" className='flex flex-wrap max-[400px]:w-28 justify-between items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='pl-2  w-1/2'>
            <h3 className='max-[400px]:text-[3vw] text-[2vw]  font-bold'>Music </h3>
            <p className=' max-[400px]:text-[3vw] text-[2vw]  font-normal' >10 Items</p>
          </div>
          <img src={Headphone} alt="Headphones" className='w-[45%] object-scale-down'/>
        </Link>
        <Link to="/products/laptop" className='flex flex-wrap max-[400px]:w-28 justify-between items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='pl-2  w-1/2'>
            <h3 className='max-[400px]:text-[3vw] text-[2vw]  font-bold'> Laptops</h3>
            <p className=' max-[400px]:text-[3vw] text-[2vw]  font-normal' >10 Items</p>
          </div>
          <img src={Laptop} alt = "Laptop" className='w-[45%] object-scale-down '/>
        </Link>
        <Link to="/products/speaker" className='flex flex-wrap max-[400px]:hidden items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28 mx-[0.5%] my-[2%] rounded-lg '>
        <div className='pl-2  w-1/2'>
            <h3 className=' max-[400px]:text-[3vw] text-[2vw] font-bold'>Portable Speakers</h3>
            <p className='  max-[400px]:text-[3vw] text-[2vw] font-normal' >10 Items</p>
          </div>
          <img src={Speaker} alt="Speaker" className='w-[45%] h-full object-scale-down '/>
        </Link>
        <Link to="/products/buds" className='flex flex-wrap max-[400px]:hidden justify-between items-center w-[22%] hover:cursor-pointer border-2 border-zinc-600 h-28 mx-[0.5%] my-[2%] rounded-lg '>
          <div className='pl-2 w-1/2'>
            <h3 className='max-[400px]:text-[3vw] text-[2vw]  font-bold'>Accesories</h3>
            <p className=' max-[400px]:text-[3vw] text-[2vw]  font-normal' >10 Items</p>
          </div>
          <img src={Accesories} alt="Accesories" className='w-[45%] object-scale-down '/>
        </Link>

      </div>
      <div className='my-[2%]'>
        <div className='ml-[2%] mr-[2%] '>
        <Marquee className='flex  justify-between items-center'>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand1} alt="Brand1"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand2} alt="Brand2"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand3} alt="Brand3"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand4} alt="Brand4"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand5} alt="Brand5"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand6} alt="Brand6"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand7} alt="Brand7"/></div>
        <div className=' w-2/3 ml-[2%] mr-[2%] '><img className='object-scale-down'src={Brand8} alt="Brand8"/></div>
        </Marquee>
        </div>
      </div>
      <div className='flex gap-6 mx-[2%] justify-start p-[1%] mb-[2%] border-2 border-zinc-800 rounded-lg overflow-hidden overflow-x-scroll object-fill no-scrollbar'>
        <DisplayProductCard data={{img:Acer, title:"Acer Aspire Lite AMD Ryzen 5 5500U Premium Thin and Light Laptop", price:36990, brand:"Acer" ,link:"65ccb601baf8563acf673c55",key:1}}/>
        <DisplayProductCard data={{img:Apple, title:"Apple iPhone 14 (256 GB) - (Product) RED", price:65998, brand:"Apple", link:"65c39d688230661e54f15a78",key:2}}/>
        <DisplayProductCard data={{img:Noise, title:"Noise Buds VS402 in-Ear Truly Wireless Earbuds with 50H of Playtime, Low Latency, Quad Mic with ENC, Instacharge(10 min=120 min),10mm Driver, BT v5.3, Breathing LED Lights (Neon Black", price:999, brand:"Noise", link:"65c357abba88ad5e1966bc42",key:5}}/>
        <DisplayProductCard data={{img:Puma, title:"Puma Womens Ultimate Ease WNS Walking Shoe", price:1652 , brand:"Puma", link:"65c3992b057551db4b49c439",key:3}}/>
        <DisplayProductCard data={{img:watch, title:"Noise Force Rugged & Sporty 1.32 'Bluetooth Calling Smart Watch", price:1499, brand:"Noise", link:"65c39b4c8230661e54f15a5d",key:4}}/>
      </div>

    </div>
    </>

  )
}
