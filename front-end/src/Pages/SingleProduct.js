import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import Color from '../Components/Color';
import { Link, useParams } from 'react-router-dom';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../Features/cart/CartSlice';
import * as Yup from 'yup';
let schema = Yup.object().shape({
    star: Yup.string().required("Star is required"),
    comment: Yup.string().required("comment is required"),
  });
  

function SingleProduct() {
    const {id} = useParams();
    const [orderedProduct, setOrderedProduct] = useState(true);
    const [productDetails, setProductDetails] = useState(false);
    const [reviewOpen , setReviewOpen] = useState(false); 
    const [displayImage, setDisplayImage] = useState(false);
    const [quantity, SetQuantity] = useState(1);
    const [color, SetColor] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const [wishlist,setWishlist] = useState(user?.findUser?.wishlist);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            star: 1,
            comment : "",
            productId:id
        },
        validationSchema: schema,
        onSubmit: async(values) => {
            try {
                const response = await axios.put(
                  `${base_url}/product/rate`,
                  { ...values },
                  config
                );
          
                if (response.status === 201) {
                  alert("Review Added Successfully");
                } else {
                  alert("Something went wrong");
                }
              } catch (error) {
                alert("An error occurred while submitting the review");
              }
    }});
        
    const handleWishlist = async()=>{
        const response = await axios.put(`${base_url}/product/addWishlist`,{productId:id},config);
        setWishlist(response?.data?.wishlist);
        const user = {findUser:response.data};
        localStorage.setItem("user", JSON.stringify(user));
    }
    const getProduct = async()=>{
        const response = await axios.get(`${base_url}/product/getProduct/${id}`);
        setProductDetails(response?.data);
        setDisplayImage(response?.data?.images[0]?.url);
        SetColor(response?.data?.colour[0]);
    }
    useEffect(()=>{
        getProduct();

    },[]);
    
  return (
    <div className=' md:px-[2%] lg:px-[5%] py-[2%] bg-green-300'>
        <div className=''>
            <div className='mx-2 md:flex bg-white mb-[2%] rounded-lg shadow-xl'>
                <div className='md:w-1/2 pl-4 py-4 justify-center gap-x-5 flex border-r-2 border-gray-300'>
                    <div className='md:w-10/12  items-center align-middle justify-center flex'>
                        {displayImage && <img className='w-52 sm:w-72 md:w-[80%] object-cover' src={displayImage} alt="product"/>}
                    </div>
                    <div className='w-2/12 '>
                    {productDetails && productDetails?.images?.map((element)=>{
                        return(
                            <img key={element?.public_id} className='min-w-6 w-[30%] md:w-[50%] border-2 border-gray-400 my-1 rounded-lg' src={element.url} alt="product"onClick={()=>{setDisplayImage(element.url)}}/>
                        );
                    })}
                    </div>
                </div>
                <div className='md:w-1/2 px-5 lg:pl-10 lg:pr-10 py-3 lg:py-5'>
                    <h1 className='text-[80%] sm:text-[90%] lg:text-[100%] font-[650] text-gray-800 py-1'>{productDetails?.title}</h1>
                    <h1 className='text-[80%] sm:text-[90%] lg:text-[100%] font-[650] text-gray-800 py-1 lg:py-2 border-y-2 border-gray-300'>₹{productDetails?.price}</h1>
                    <div className='max-sm:py-1 flex items-center py-2'>
                        <ReactStars className=""
                        count={5}
                        size={18}
                        edit ={false}
                        value={productDetails?.totalRating}
                        activeColor="#ffd700" />
                        <span> ({productDetails?.ratings?.length} reviews)</span>
                    </div>
                    <a className="text-[85%] font-[550] underline text-gray-500 py-2" href="#review" onClick={()=>{setReviewOpen(true)}}>Write a review</a>
                    <h1 className='text-[80%] sm:text-[100%] font-[650] text-gray-800  my-2'>Brand : <span className='text-gray-700 font-[550] text-[90%] sm:text-base'>{productDetails?.brand}</span></h1>
                    <h1 className='text-[80%] sm:text-[100%] font-[650] text-gray-800 pb-2 sm:pb-4 my-2 border-b-2 border-gray-300'>Availability : <span className='text-gray-700 font-[550] text-[90%] sm:text-base'>{productDetails?.quantity}</span></h1>
                    <div className='w-full'>
                        <h1 className='text-[80%] sm:text-[100%] font-[650] text-gray-800 my-2'>Size :</h1>
                        <div className='w-full pt-2'>
                            <span className='text-center  px-3 sm:px-5 mx-1 rounded-md text-[80%] sm:text-[90%] font-medium border-2 border-zinc-600 mx-'>S</span>
                            <span className='text-center  px-3 sm:px-5 mx-1 rounded-md text-[80%] sm:text-[90%] font-medium border-2 border-zinc-600 mx-'>M</span>
                            <span className='text-center  px-3 sm:px-5 mx-1 rounded-md text-[80%] sm:text-[90%] font-medium border-2 border-zinc-600 mx-'>L</span>
                            <span className='text-center  px-3 sm:px-5 mx-1 rounded-md text-[80%] sm:text-[90%] font-medium border-2 border-zinc-600 mx-'>XL</span>
                            <span className='text-center  px-3 sm:px-5 mx-1 rounded-md text-[80%] sm:text-[90%] font-medium border-2 border-zinc-600 mx-'>XXL</span>
                        </div>
                    </div>
                    <h1 className='text-[80%] sm:text-[100%] font-[650] text-gray-800 my-1 pt-1 sm:pt-2'>Colour :</h1>
                    <div className='flex pt-1 sm:pt-2 items-center'>
                        {productDetails?.colour?.map((ele)=>{
                            
                            return(
                                <div className='my-1 mx-2' key={ele}>
                                    {color===ele ? <div className='w-8 h-8 p-2 rounded-full border-gray-400 border-2' style={{backgroundColor:ele}} onClickCapture={()=>{SetColor(ele)}}></div> :<div className='w-6 h-6 p-2 rounded-full border-gray-400 border-2' style={{backgroundColor:ele}} onClickCapture={()=>{SetColor(ele)}}></div>}
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full flex items-center pt-1 sm:pt-2 gap-2'>
                        <h1 className='text-[80%] sm:text-[100%] font-[650] w-1/3 text-gray-800 my-1 mr-3'>Quantity :</h1>
                        <div className='w-full pt-1 sm:pt-2'>
                            <input type='number' min={1} max={10} className='w-12 p-1 ml-1 border-2 border-gray-500 rounded-md' value={quantity} onChange={(e)=>{SetQuantity(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='flex gap-5 py-2'>
                        <Link className='text-white rounded-full text-center font-semibold bg-green-600 px-5 text-[80%] sm:text-[100%] sm:px-5 py-2 my-3 w-fill border-2 border-green-600 hover:bg-white hover:text-green-600 ' onClick={()=>{const res = dispatch(addProductToCart({Product:id, count:quantity, color:color, price:productDetails?.price}));}}>Add to Cart</Link>
                    </div>
                    <div className='font-semibold text-gray-600 flex gap-1 items-center mb-4 py-2 border-y-2 border-gray-300'>
                        <div className='w-full'>
                            { wishlist?.some(item=>item===id) ? 
                                <div className='flex gap-2'>
                                    <IoIosHeart className='text-xl text-red-500 hover:cursor-pointer' onClick={()=>{handleWishlist()}}/>
                                    <h3 className='text-[80%] sm:text-sm font-medium ' >Remove from Wishlist</h3>
                                </div> :
                                <div className='flex gap-2'>
                                    <IoIosHeartEmpty className='text-xl hover:cursor-pointer ' onClick={()=>{handleWishlist()}}/>
                                    <h3 className='text-[80%] sm:text-sm font-medium ' >Add to Wishlist</h3>
                                </div>
                            }
                        </div>
                    </div>
                    <h1 className='text-[80%] sm:text-[100%] font-[650] text-gray-800 my-2'>Shipping & Returns : <span className='text-gray-700 font-[550] text-[80%] sm:text-sm'>Free Shipping is available on all orders above 499. We ship all domestic order in 5-10 Business days</span></h1>

                </div>
            </div>
            <div className='bg-white mx-2 p-[2.5%] rounded-lg shadow-xl'>
                <h1 className='text-[90%] sm:text-lg font-semibold'>Discription</h1>
                <ul className='text-[80%] sm:text-sm font-medium text-gray-700' dangerouslySetInnerHTML={{__html: productDetails?.description}}></ul>
            </div>
            <h1 id="review"className='text-[100%] sm:text-lg mx-2 font-semibold py-5'> Reviews</h1>
            <div className='bg-white p-[2.5%] mx-2 rounded-lg shadow-xl'>
                <div className='pb-3 '>
                    <h3 className='text-[80%] sm:text-lg font-semibold'>Customer Reviews</h3>
                    <div className='flex items-center'>
                        <ReactStars className=""
                        count={5}
                        size={24}
                        edit ={false}
                        value={productDetails?.totalRating}
                        activeColor="#ffd700" />
                        <span className='text-[80%] sm:text-md'>By {productDetails?.ratings?.length} customers</span>
                    </div>
                </div>
                
                {orderedProduct && <div className='py-3 underline text-center text-green-400 underline-offset-1	 font-bold 'onClick={()=>{setReviewOpen(!reviewOpen)}} >Write a review</div>}
                {reviewOpen && <div>
                    <form  onSubmit={formik.handleSubmit} className=''>
                        <div className='py-1'>
                            <h1 className='italic text-md font-medium text-gray-700 pb-1'>Rating</h1>
                            <ReactStars className="pl-2"
                                count={5}
                                size={20}
                                edit ={true}
                                value={Number(formik.values.star)}
                                onChange={(newRating) => formik.setFieldValue('star', newRating)}
                                activeColor="#ffd700" />

                        </div>
                        {<div className="text-red-600  text-sm mb-5">{formik.touched.star && formik.errors.star}</div>}

                        <div className='py-1'>
                            <h1 className='italic text-md font-medium text-gray-700 pb-2 '>Comment</h1>
                            <textarea className='bg-gray-300 block p-2 border-2 border-gray-600 w-full  rounded-md placeholder:text-sm placeholder:text-gray-600 placeholder:italic' value={formik.values.comment} rows="5" cols="30" placeholder='Comment' onChange={formik.handleChange('comment')}/>
                        </div>
                        <input className='text-white rounded-full text- bg-slate-800 px-5 py-2 my-3' type="submit" vlaue=""/>
                        {<div className="text-red-600  text-sm mb-5">{formik.touched.comment && formik.errors.comment}</div>}

                    </form> 
                    </div>}
                {productDetails?.ratings?.map((ele)=>{
                    return(
                        <div className='pt-3' key={ele._id}>
                            <ReactStars className=""
                                count={5}
                                size={20}
                                edit ={false}
                                value={ele?.star}
                                activeColor="#ffd700" />
                            <p className='text-sm font-bold ita'>{ele?.firstname} {ele?.lastname}<span className='text-sm font-semibold text-gray-700 italic'>on</span>{ele?.postedOn}</p>
                            <p className='italic text-sm py-1 font-semibold text-gray-500'>{ele?.comment}</p>
                            <p className='italic text-end underline text-sm py-1 font-semibold text-gray-500'>Report as inapropriate</p>
                        </div>)})
                }
            </div>

        </div>
    </div>
  )
}

export default SingleProduct
