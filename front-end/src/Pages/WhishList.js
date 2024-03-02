import React, { useState } from 'react'
import WishListProduct from '../Components/WishListProduct'
function WhishList() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [wishlist,setWishlist] = useState(user?.findUser?.wishlist);
  

  return (
    <div className='bg-green-100 py-[4%] '>
      <div className='mx-[5%] p-3 bg-white rounded-md'>
        <h1 className='text-3xl pt-5 pl-5 pb-3 font-semibold'> Your Favourite Products</h1>
        <div className='px-10 pb-5 pt-4 flex flex-wrap gap-12'>
          {wishlist?.map((ele)=>{
            return(<WishListProduct key={ele._id} id={ele} wishlist={wishlist} setWishlist={setWishlist}/>)})}
        </div>
      </div>
    </div>
  )
}

export default WhishList
