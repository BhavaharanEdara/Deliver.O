import { Select } from 'antd'
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { getCart } from '../Features/cart/CartSlice';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig';

let schema = Yup.object().shape({
  address: Yup.string().required("address is required"),
  phoneNumber: Yup.string().required("phoneNumber is required"),

});

function Checkout() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [placed, setPlaced] = useState(false);
  const dispatch = useDispatch();
  const [products,setProducts] = useState();
  const {amount} = useParams();
  const [paymentIntent,setPaymentIntent] = useState({label:"Cash On Deleviry", value:"cash on delevery"});
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      address: "",
      phoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: async(values) => {
      const response = await axios.post(`${base_url}/auth/order`, {cod:true,address:values.address,phoneNumber:values.phoneNumber},config);
      if(response.status===200){
        const clearCart = await axios.delete(`${base_url}/auth/cart`,config);
        setPlaced(true);
      }

    }
  });
  const getProducts = async()=>{
    const resp = await dispatch(getCart());
    setProducts(resp.payload.Products);

  }


  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div className='bg-green-100 py-5'>
      <div className={`${placed ? "":`hidden`} z-50 bg-black bg-opacity-50 w-screen h-screen fixed top-0 flex justify-center items-center`}>
        <div className='bg-white z-50  w-[25%] border-2 rounded-md'>
          <h1 className='px-5 py-2 text-center w-full border-b-2 font-semibold text text-green-500'>Notification</h1>
          <h1 className='px-3 pb-3 border-b-2'>Your order has been placed sucessfully</h1>
          <div className='w-full flex items-end justify-end px-3 pb-2 mt-2'><h1 className='p-1 bg-gray-900 text-xs text-white rounded-md' onClick={()=>{navigate("/cart")}}>OK</h1></div>
        </div>
      </div>
      <div className='bg-white mx-10'>
        <div className='px-5 py-5'>
          <h1 className='text-3xl font-semibold'>Please fill the details</h1>
          <input className='border-2 border-gray-400 mb-5 mt-3 p-2  w-full  rounded-md placeholder:text-gray-600' placeholder='Address' value={formik.values.address} onChange={formik.handleChange('address')}/>
          <Select
            className='w-[100%] h-10 rounded-lg border-2 border-blue-200 '
            
          options={[{label:"Cash On Deleviry", value:"cash on delevery"}]}
          placeholder="Select Payment Method"
          name="color"
          onChange={()=>{setPaymentIntent({label:"Cash On Deleviry", value:"cash on delevery"})}}
          />
          <input className='border-2 border-gray-400 p-2 mt-5 w-full rounded-md placeholder:text-gray-600' placeholder='Phone Number' value={formik.values.phoneNumber} onChange={formik.handleChange('phoneNumber')}/>
        </div>
      </div>
      <div className='mx-10 flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Total : <span>₹{amount}</span></h1>
        <div className='text-white rounded-full text-center font-semibold bg-gray-800 px-5 py-2 my-3  border-2 border-gray-600 hover:bg-white hover:text-gray-800 ' onClick={formik.handleSubmit}>Place Order</div>
      </div>
    </div>

  )
}

export default Checkout
