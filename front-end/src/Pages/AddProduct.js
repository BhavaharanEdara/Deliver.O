import React from 'react'
import { useEffect ,useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Dropzone from 'react-dropzone'
import { IoMdAdd } from "react-icons/io";
import { ImCross } from "react-icons/im";
import axios from 'axios';
import { base_url } from "../Utils/base_url";
import { config } from '../Utils/headerConfig'; 
import { uploadImg , delImg, clearImgs} from '../Features/uploadImg/UploadSlice';
import { Select } from "antd";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("description is required"),
  price: Yup.string().required("price is required"),
  brand: Yup.string().required("brand is required"),
  category: Yup.string().required("category is required"),
  quantity: Yup.string().required("quantity is required"),
});



function AddProduct() {

  const dispatch = useDispatch();
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);
  const [coloropt,setColoropt] = useState([]);
  const [addProductMsg, setAddProductMsg] = useState("");
  const imgState = useSelector((state)=>{
    return state.upload.images})
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category:"",
      quantity: "",
    },
    validationSchema: schema,
    onSubmit: async(values) => {
      const response = await axios.post(`${base_url}/product/create`,{...values,images:imgState, colour:color}, config);
      await axios.post(`${base_url}/brand`,{name:values.brand}, config);
      await axios.post(`${base_url}/category`, {name:values.category}, config);
      if(response.status===200){
        formik.resetForm({
          title: "",
          description: "",
          price: "",
          brand: "",
          category:"",
          quantity: "",
          });
        dispatch(clearImgs());
        alert("Product Added Sucessfullt");
      }
      else{
        
        alert("Somethig went wrong");
      }
    }
  });
  const handleColors = (e) => {
    setColor(e);
  };
  const getAllColors = async()=>{
    const response = await axios.get(`${base_url}/color`);
    await setColoropt(response.data);
    return;

  }
  useEffect(()=>{
    getAllColors();
  },[])
  return (
    <div className='m-10'>
      <h1 className='p-1 font-semibold text-2xl'>Add Product</h1>

      <form onSubmit={formik.handleSubmit}>
        <h1 className='p-1 font-semibold'>Upload images</h1>
        <div className='bg-white border-2 border-blue-500 rounded-md p-5 text-center hover:cursor-pointer'>
          <Dropzone onDrop={async(acceptedFiles) => {
              dispatch( uploadImg(acceptedFiles));
              setImages(imgState);
            }}>
            {({getRootProps, getInputProps}) => (
            <section >
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='text-4xl text-blue-500 p-3 text-center flex justify-center items-center '><IoMdAdd/></p>
                <p> Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
            )}
          </Dropzone>
        </div>
        <div className='flex w-[90%] gap-2'>
          {imgState?.map((i,j)=>{
            return(<div className='bg-yellow-100 p-1 mt-1 flex flex-col items-end justify-end' key={i.public_id}><ImCross className='font-thin' onClick={()=>{
              dispatch(delImg(i.public_id))
            }}/><img className="w-28 h-16 object-scale-down" src ={i.url} alt="uplaod img1"/></div>)
          })}

        </div>
        <input className='border-2 border-gray-400 p-2 mt-5 w-full  rounded-md placeholder:text-gray-600' placeholder='Title' onChange={formik.handleChange("title")} value={formik.values.title}/>
        {<div className="text-red-600  text-sm mb-5">{formik.touched.title && formik.errors.title}</div>}
        <ReactQuill className="border-2 border-gray-400  rounded-md bg-white placeholder:not-italic	placeholder:text-gray-600" placeholder="description" theme="snow" value={formik.values.description} onChange={formik.handleChange('description')}/>
        {<div className="text-red-600  text-sm mb-5">{formik.touched.description && formik.errors.description}</div>}
        <input className='border-2 border-gray-400 p-2  w-full  rounded-md placeholder:text-gray-600' placeholder='Price' value={formik.values.price} onChange={formik.handleChange('price')}/>
        {<div className="text-red-600  text-sm  mb-5">{formik.touched.price && formik.errors.price}</div>}
        <Select
        className='w-[100%] h-10 rounded-lg border-2 border-blue-200 '
        mode="multiple"
        allowClear
        options={coloropt.map((ele)=>{
          return ({
            label: ele.title,
            value: ele.color
          })})}
        placeholder="Select colour"
        name="color"
        onChange={(e)=>handleColors(e)}
        />
        {<div className="text-red-600  text-sm  mb-5">{formik.touched.color && formik.errors.color}</div>}
        <input className='border-2 border-gray-400 p-2  w-full  rounded-md placeholder:text-gray-600' placeholder='Brand' value={formik.values.brand} onChange={formik.handleChange('brand')}/>
        {<div className="text-red-600  text-sm  mb-5">{formik.touched.brand && formik.errors.brand}</div>}
        <input className='border-2 border-gray-400 p-2  w-full  rounded-md placeholder:text-gray-600' placeholder='Category' value={formik.values.category} onChange={formik.handleChange('category')}/>
        {<div className="text-red-600  text-sm  mb-5">{formik.touched.category && formik.errors.category}</div>}
        <input className='border-2 border-gray-400 p-2  w-full  rounded-md placeholder:text-gray-600' placeholder='Quantity' value={formik.values.quantity} onChange={formik.handleChange('quantity')}/>
        {<div className="text-red-600  text-sm  mb-5">{formik.touched.quantity && formik.errors.quantity}</div>}
        <input className='text-white rounded-full text-center font-semibold bg-green-600 px-5 py-2 my-3  border-2 border-green-600 hover:bg-white hover:cursor-pointer hover:text-green-600 w-[95%] ml-[2.5%]' type="submit" value="Add product" onClick={()=>{console.log("hello")}}/>	
      </form>
    </div>
  )
}

export default AddProduct
