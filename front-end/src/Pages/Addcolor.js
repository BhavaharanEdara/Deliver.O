import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { base_url } from '../Utils/base_url'
import { config } from '../Utils/headerConfig'
import axios from 'axios'


const schema = Yup.object().shape({
  title:Yup.string().required("title is required")
})


function Addcolor() {

  const formik = useFormik({
    initialValues:{
      title:"",
      color: "#ff0000"
    },
    validationSchema: schema,
    onSubmit:async(values)=>{
      const response = await axios.post(`${base_url}/color`,values, config);
      console.log(response);
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1 className='ml-10 mt-16 mb-5 text-xl font-bold '>Add your colour</h1>
        <div className='flex'>
          <h1 className='text-xl font-medium ml-10'>Select Colour :</h1>
          <input className='border-2 border-gray-400  ml-2 box-border rounded-md placeholder:text-gray-600' value={formik.values.color} type='color' onChange={formik.handleChange("color")} />
        </div>
        <input className='border-2 border-gray-400 p-2 mt-5  rounded-md placeholder:text-gray-600 ml-10 w-[95%]' placeholder='Title' onChange={formik.handleChange("title")} value={formik.values.title}/>
        {<div className="text-red-600  text-sm mb-5 ml-10">{formik.touched.title && formik.errors.title}</div>}
        <input className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-2 ml-10 my-3 w-auto border-2 border-green-600 hover:bg-white hover:text-green-600 ' type="submit" value="Add color"/>	
      </form>
    </div>
  )
}

export default Addcolor

