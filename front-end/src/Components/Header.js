import React, { useState } from 'react'
import { NavLink, Link, useNavigate, useParams } from 'react-router-dom'
import Logo from '../images/logo1.png' 
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { CiUser , CiChat1, CiShoppingCart} from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const {searchKey} = useParams();
  const [searchWord, setSearchWord] = useState(searchKey);
  const [viewSide, setViewSide] = useState(false);

  const searchClick = ()=>{
    navigate(`/`);
    navigate(`/products/${searchWord}`);
  }
  return (
    <>
      <header>
        <div className='w-full h-8 bg-green-400 text-xs md:text-sm text-white font-bold text-center items-center font-sans z-50 flex justify-around'>
          <div className='align-middle'>
            <p>Free Shipping over Rs.499</p>
          </div>
          <div>
            <p>Hotline :<a href='"tel:+91 944000127'>+91 9440001237</a></p>
          </div>
        </div>

      </header>
      <header>
        <div className='hidden w-auto max-w-full box-border h-20 md:flex justify-around items-center rounded-md border-2 m-1 border-zinc-800	'>
          <Link to="/" className='flex items-center text-4xl font-semibold text-gray-700'>
            <img className='md:w-14 lg:w-20 object-cover' src ={Logo} alt="Logo"/>
            <h1 className=' md:pb-1 md:text-3xl lg:text-5xl lg:pb-3'>Deliver.o</h1>
          </Link>
          <div className='flex w-1/3 items-center border-2 rounded-xl border-zinc-800'>
            <input className='md:m-1.5 lg:m-2 w-full outline-none ml-2 pl-2 placeholder:italic md:placeholder:text-md lg:placeholder:text-lg placeholder:text-slate-400' value={searchWord} onChange={(ele)=>{setSearchWord(ele.target.value)}} placeholder='Search Products Here . . .' id='search-bar'/>
            <IoSearchOutline className='text-2xl mr-2 p-[0.1] rounded-md hover:text-green-600 hover:cursor-pointer' onClick={()=>{searchClick()}}/>
          </div>
          <Link to="/products" className='flex flex-col justify-center items-center hover:text-green-400	'>
            <CiShop className='md:text-2xl lg:text-3xl '/>
            <h3 className='md:text-xs lg:text-sm font-medium' >Products</h3>
          </Link>

          <Link to="/wishlist"className='flex flex-col justify-center items-center hover:text-green-400	'>
            <IoIosHeartEmpty className='md:text-2xl lg:text-3xl '/>
            <h3 className='md:text-xs lg:text-sm font-medium' >Wishlist</h3>
          </Link>
          <Link to="/contact" className='flex flex-col justify-center items-center hover:text-green-400'>
            <CiChat1 className='md:text-2xl lg:text-3xl '/>
            <h3 className='md:text-xs lg:text-sm font-medium' >Contact</h3>
          </Link>
          <Link to={`${user ? "/profile" : "/login"}`} className='flex flex-col justify-center items-center hover:text-green-400' >
            <CiUser className='md:text-2xl lg:text-3xl ' />
            {user ? <h3 className='md:text-xs lg:text-sm font-medium' >Profile</h3> : <h3 className='text-sm font-medium' >SignIn</h3>}
          </Link>
          <Link to="cart"className='flex flex-col justify-center items-center hover:text-green-400'>
            <CiShoppingCart className='md:text-2xl lg:text-3xl'/>
            <h3 className='md:text-xs lg:text-sm font-medium' >Cart</h3>
          </Link>
          <div></div>
        </div>
        <div className={`md:hidden flex justify-between items-center`}>
          <div className='flex pl-2 items-center'>
            <VscThreeBars className='text-2xl mr-3' onClick={()=>{setViewSide(true)}}/>
            <Link to="/"><img className='w-12  object-cover' src ={Logo} alt="Logo"/></Link>
            <Link to="/"><h1 className='text-xl max-[500px]:hidden'>Deliver.o</h1></Link>
          </div>
          <div className='flex mr-4'>
            <Link to={`${user ? "/profile" : "/login"}`} className='flex pr-2 justify-center items-center hover:text-green-400' >
              {user ? <h3 className='md:text-xs lg:text-sm font-medium' >{user?.findUser?.firstname}</h3> : <h3 className='text-sm font-medium' >SignIn</h3>}
              <CiUser className='text-3xl ' />
            </Link>
            <Link to="cart"className='flex flex-col justify-center items-center hover:text-green-400'>
              <CiShoppingCart className='text-3xl lg:text-3xl'/>
            </Link>
          </div>
        </div>
        <div className='md:hidden'>
        <div className='flex items-center border-2 rounded-md border-zinc-800 mx-4 my-2'>
            <input className='m-1 w-full outline-none ml-2 pl-2 placeholder:italic placeholder:text-md  placeholder:text-slate-400' value={searchWord} onChange={(ele)=>{setSearchWord(ele.target.value)}} placeholder='Search Products Here . . .' id='search-bar'/>
            <IoSearchOutline className='text-2xl mr-2 p-[0.1] rounded-md hover:text-green-600 hover:cursor-pointer' onClick={()=>{searchClick()}}/>
          </div>
        </div>
        <div className={`${viewSide ? "": "hidden"}`}>
        <div className='md:hidden fixed top-0 z-50'>
          <div className= "z-50 bg-black bg-opacity-50 w-screen h-screen fixed top-0">
            <div className="w-1/2 sm:w-1/3 h-full bg-white">
              <div className='bg-green-500 pt-[10%]'>
                <div className='flex pr-2 justify-between items-center  border-b-2 pb-2 border-white' >
                <VscThreeBars className='text-2xl mr-3 pl-2 hover:text-white' onClick={()=>{setViewSide(false)}}/>
                <Link to={`${user ? "/profile" : "/login"}`}  className='flex items-end hover:text-white'>
                  {user ? <h3 className='min-[500px]:text-xs text-sm font-medium' onClick={()=>setViewSide(false)}>Profile</h3> : <h3 className='text-sm font-medium' onClick={()=>setViewSide(false)}>SignIn</h3>}
                  <CiUser className='text-xl ' />
                  </Link>
                </div>
                <div className='flex justify-center w-full border-b-2 border-white py-2'>
                  <h1>Deliver.O</h1>
                </div>
                <div className='bg-white' onClick={()=>{setViewSide(false)}}>
                  <Link to="/" className='flex py-2 justify-start gap-2 px-3 items-center 	'>
                    <IoHomeOutline className='min-[500px]:text-xl text-lg  '/>
                    <h3 className='text-xs md:text-xs lg:text-sm font-medium' >Home</h3>
                  </Link>

                  <Link to="/products" className='flex py-2 justify-start gap-2 px-3 items-center hover:text-green-400	'>
                    <CiShop className='min-[500px]:text-xl text-lg '/>
                    <h3 className='text-xs md:text-xs lg:text-sm font-medium' >Products</h3>
                  </Link>

                  <Link to="/wishlist"className='flex py-2 justify-start gap-2 px-3 items-center hover:text-green-400	'>
                    <IoIosHeartEmpty className='min-[500px]:text-xl text-lg '/>
                    <h3 className='text-xs md:text-xs lg:text-sm font-medium' >Wishlist</h3>
                  </Link>
                  <Link to="/contact" className='flex py-2 justify-start gap-2 px-3 items-center hover:text-green-400'>
                    <CiChat1 className='min-[500px]:text-xl text-lg '/>
                    <h3 className='text-xs md:text-xs lg:text-sm font-medium' >Contact</h3>
                  </Link>
                  <Link to={`${user ? "/profile" : "/login"}`} className='flex py-2 justify-start gap-2 px-3 items-center hover:text-green-400' >
                    <CiUser className=' min-[500px]:text-xl text-lg ' />
                    {user ? <h3 className='text-xs md:text-xs lg:text-sm font-medium' >Profile</h3> : <h3 className='text-sm font-medium' >SignIn</h3>}
                  </Link>
                  <Link to="cart"className='flex py-2 justify-start gap-2 px-3 items-center hover:text-green-400'>
                    <CiShoppingCart className='min-[500px]:text-xl text-lg'/>
                    <h3 className='text-xs md:text-xs lg:text-sm font-medium' >Cart</h3>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>

    </>
  )
}
