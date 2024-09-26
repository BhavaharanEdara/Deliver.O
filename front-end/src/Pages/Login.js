import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {login} from "../Features/auth/AuthSlice"
import { useDispatch, useSelector } from "react-redux";


let schema = Yup.object().shape({
  email: Yup.string().email("Email should be valid").required("Email is reuired"),
  password: Yup.string().required("Password is reuired"),
});

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: "",
        password : ""
      },
      validationSchema: schema,
      onSubmit: (values) => {
        dispatch(login(values));
      },
    });
const {user, isLoading ,isError ,isSucess, message } = useSelector((state)=>state.auth);
useEffect(()=>{
  if(user!==null && isSucess && user?.findUser){
    navigate("/profile")
  }
  else{
    return;
  }
},[user, isLoading ,isError ,isSucess, message])
return (
    <div className='flex items-center justify-center py-5 md:py-10 bg-green-100'>
      <div className='w-[80%] sm:w-[50%] md:w-[35%] p-5 md:m-5 rounded-md shadow-md bg-white'>
        <h1 className='text-xl md:text-3xl text-center font-semibold pb-2'>Login</h1>
        <form action="" className='flex flex-col items-center justify-center' onSubmit={formik.handleSubmit}>
          <input className={`border-2  ${formik.touched.email && formik.errors.email ? "border-red-500" :"border-gray-400"} p-2 my-3 w-full  rounded-md placeholder:text-gray-600`} placeholder='Email' name="email" onChange={formik.handleChange("email")} value={formik.values.email}/>
          <div className="text-red-600  text-base">
            {formik.touched.email && formik.errors.email}
          </div>
          <input className={`border-2 ${formik.touched.password && formik.errors.password ? "border-red-500" :"border-gray-400" } p-2 my-3 w-full  rounded-md placeholder:text-gray-600`} placeholder='Password' name="password" onChange={formik.handleChange("password")} value={formik.values.password}/>
          <div className="text-red-600 mb-2 text-base">
            {formik.touched.password && formik.errors.password}
          </div>
          <div className="text-blue-600 text-end w-full" ><Link className='hover:text-green-600' to="/forgotpassword">Forgot Password?</Link></div>
          <div className='flex gap-5 py-2'>
          <input className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-2 my-3 w-24 border-2 border-green-600 hover:bg-white hover:text-green-600 ' type="submit" value="Login"/>	
          <Link to="/signup"className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-2 my-3 w-24 border-2 border-green-600 hover:bg-white hover:text-green-600 ' >SignUp</Link>
          </div>
        </form> 

      </div>
    </div>
  )
}

export default Login
