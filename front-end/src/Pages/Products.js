import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import Color from '../Components/Color'
import axios from 'axios'
import { base_url } from '../Utils/base_url';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";

function Products() {
    const [products, setProducts] = useState([]);
    const [colors, setColors] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [inStock, setInstock] = useState(true);
    const [outStock, setOutStock] = useState(true);
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [sortBy,setSortBy] = useState("date");
    const {searchKey} = useParams();
    const [applied, setApplied] = useState(false);
    const [page, setPage] = useState(1);
    const [selected, setSelected] = useState(1);
    const [items,setItems] = useState([]);
    const [selectColor, setSelectColor] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const [viewFilter, setViewFilter] = useState(false);

    const getProducts = async()=>{
        let title = "";
        if(!searchKey){
            title = undefined
        }
        else{
            title = searchKey
        }
        const productResponse = await axios.get(`${base_url}/product/allProducts`, {params:{title:title}});
        const colorResponse = await axios.get(`${base_url}/color`);
        const brandResponse = await axios.get(`${base_url}/brand`);
        const categoryResponse = await axios.get(`${base_url}/category`);
        
        setColors(colorResponse.data);
        setProducts(productResponse.data.products);
        setBrands(brandResponse.data);
        setCategories(categoryResponse.data);
    }

    const handeApplied = ()=>{
        setApplied(true);

        setTimeout(()=>{
            setApplied(false);
        },500);
    }

    const manipulateProducts = async()=>{
        let sort = sortBy;
        if(sort==="price-asc" || sort==="price-desc"){
            sort = "price";
        }
        let quantity={};
        if(inStock && outStock){
            quantity = undefined;
        }
        else if(inStock){
            quantity = {$ne: 0}
        }
        else if(outStock){
            quantity= {$eq:0}
        }
        let price = {};
        if(priceFrom==="" || priceTo===""){
            price = undefined;
        }
        else{
            price = {$gt : Number(priceFrom), $lt :Number(priceTo)}
        }
        let title = "";
        if(!searchKey){
            title = undefined;
        }
        else {
            title = searchKey;
        }
        let color = "";
        if(selectColor===""){
            color = undefined
        }
        else{
            color = {$in:[selectColor]}
        }
        const productResponse = await axios.get(`${base_url}/product/allProducts`, {params:{sort:sort, quantity:quantity,price:price, title:title,page:page, limit:20, colour:color }});
        if(sortBy==="price-desc"){
            setProducts(productResponse?.data?.products?.reverse());
            handeApplied();
        }
        else{
            setProducts(productResponse?.data?.products);
            handeApplied();
        }
        
    }
    const handleSort= async(ele)=>{
        setPage(1);
        setSortBy(ele.target.value);
    }

    const handleInStock = (ele)=>{
        setPage(1);
        setInstock(!inStock);
    }
    const handleOutStock = (ele)=>{
        setPage(1);
        setOutStock(!outStock);
    }
    const handlePriceFromChange = async(ele)=>{
        setPage(1);
        setPriceFrom(ele.target.value)
    }
    const handlePriceToChange = async(ele)=>{
        setPage(1);
        setPriceTo(ele.target.value)
    }
    

    useEffect(()=>{
        if(products.length===0){
            getProducts()
        }
    },[searchKey]);    
  return (

    <div className='flex bg-green-100 pb-10 relative'>
        <div className={`fixed p-1 px-4 top-10 ${applied ? "": "hidden"}  left-[50%] font-semibold bg-green-300 rounded-md text-white transition-all ease-out duration-300`}>
            <p>Applied <span className='text-yellow-300 font-bold '>!</span></p>
        </div>
        
        <div className='mx-[1%] lg:mx-[2%] ml-[2%] pt-[3%] bg-green-100 w-1/5 hidden md:block'>
            <div className='p-5 bg-white  leading-6 rounded-lg'>
                <h3 className="text-[120%] font-semibold leading-6">Shop by category</h3>
                <div>
                    <ul className='text-[90%] font-medium font-sans pt-1 leading-7 pl-[2%] text-gray-600'>
                        {categories?.map((ele)=>{return(<Link key={ele._id} to={`/products/${encodeURI(ele.name)}`} onClick={()=>{setPage(1);}}><li className={`${searchKey===ele.name ? 'text-black px-1 bg-gray-100 w-fit rounded-md':''}`} key={ele._id}>{ele.name}</li></Link>)})}
                    </ul>

                    <div className='flex gap-2'><div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>{navigate('/products')}}>Reset</div>
                    <div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>manipulateProducts()} >Apply</div>
                    </div>
                </div>
            </div>
            <div className='p-5 bg-white mt-[10%] rounded-lg' >
                <h3 className="text-[120%] font-semibold leading-6">Filter by </h3>
                <div>
                    <h5 className='text-[90%] font-semibold pt-5 pl-1'>Availability</h5>
                    <div className='text-[85%] font-medium leading-8 pt-2 pl-0.5 '>
                        <div >
                            <input className='accent-green-400' type='checkbox' value="" checked={inStock} id='checked' onChange={()=>{handleInStock()}}/>
                            <label className='ml-2' >In Stock</label>
                        </div>
                        <div></div>
                            <input className='accent-green-400 ' type='checkbox' value="" checked={outStock} id='checked' onChange={()=>{handleOutStock()}}/>
                            <label className='ml-2'>Out of stock</label>
                        <div/>
                    </div>
                    <h5 className='text-[90%] font-semibold pt-3 pl-1'>Price</h5>
                    <div className='flex pt-4 ml-1 justify-between items-end'>
                        <div className='border-2 border-zinc-400 w-1/2 rounded-sm'>
                            <input className='w-full text-black  outline-none p-1 placeholder:italic placeholder:text-sm placeholder:font-medium placeholder:text-gray-700' type="number" value={priceFrom} onChange={(ele)=>{handlePriceFromChange(ele)}} placeholder='From'/>
                        </div>
                        <div className='border-2 border-zinc-400 w-1/2 ml-2 rounded-sm'>
                            <input className='w-full text-black  outline-none p-1 placeholder:italic placeholder:text-sm placeholder:font-medium placeholder:text-gray-700' type="number" value={priceTo} onChange={(ele)=>{handlePriceToChange(ele)}} placeholder='To'/>
                        </div>
                    </div>
                    <h5 className='text-[90%] font-semibold pt-5 pl-1'>Colours</h5>
                    <div className=''>
                        <div className='flex flex-wrap mt-2 gap-1'>
                        {colors?.map((ele)=>{
                            return(
                                <div key={ele._id} className={`${selectColor===ele.color ?"border-black":""} hover:cursor-pointer border-2 rounded-full my-1`} onClick={()=>{setSelectColor(ele.color);manipulateProducts()}}>
                                <Color data={ele.color}  />
                                </div>
                            )
                        })}
                        </div>
                    </div>

                    <div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>manipulateProducts()} >Apply</div>

                </div>
            </div>
            <div className='p-5 bg-white  mt-[10%] rounded-lg'>
                <h3 className="text-[16px] font-semibold leading-6">Brands</h3>
                <div className='pt-2 flex flex-wrap items-start gap-1 '>
                    {brands?.map((ele)=>{
                        return(<Link key={ele._id} to={`/products/${encodeURI(ele.name)}`} onClick={()=>{setPage(1)}}><p className={`${searchKey===ele.name ? 'bg-green-500 text-white': ""} bg-green-100 text-green-700 font-semibold rounded-md p-1 text-sm hover:bg-green-500 hover:text-white`} key={ele?._id}>{ele.name}</p></Link>)
                    })}
                </div>
                <div className='flex gap-2'><div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>{navigate('/products')}}>Reset</div>
                <div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>manipulateProducts()} >Apply</div>
                </div>

            </div>
        </div>
        <div className='w-full mx-[2%] md:w-4/5  md:mr-[2%] my-[1%] overflow-x-auto no-scrollbar'>
            <div className='bg-white max-[500px]:p-1 p-2 rounded-md flex justify-between items-center mr-[1%]'>
                <div className='flex items-center'>
                    <p className='max-[500px]:text-sm font-semibold text-base'>Sort By: </p>
                    <select className='max-[500px]:p-1 p-2 w-36 text-xs font-semibold ml-2 border-none outline-none bg-green-200 rounded-md ' onChange={(ele)=>{handleSort(ele)}}>
                        <option className='max-[500px]:p-3 p-5 rounded-md white' value="date">Posted Date</option>
                        <option className='max-[500px]:p-3 p-5' value="sold">Best Selling</option>
                        <option className='max-[500px]:p-3 p-5' value="price-asc" >Price : Low to High</option>
                        <option className='max-[500px]:p-3 p-5' value="price-desc">Price : High to Low</option>
                        <option className='max-[500px]:p-3 p-5' value="totalRating" >Ratings</option>
                    </select>
                    <div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>{manipulateProducts()}}>Apply</div>
                </div>
                <div className='md:hidden p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>{setViewFilter(true)}}>Filters</div>
            </div>
            <div className=''>
                <div className=' md:flex md:flex-wrap items-start md:gap-x-[4%] lg:gap-x-[3%] xl:gap-x-[1.5%] gap-y-8 mt-[1%] mx-[1%] page-list'>
                    {products.map((element)=>{
                        return <ProductCard data={element} key={element._id} />
                    })}
                </div>
            </div>
            <div className='flex justify-center gap-4 items-center'>
                {items.length<11 && items.map((ele)=>{
                    if(ele==selected){
                        return (                    
                        <div key={ele+120} className='p-2 w-10 bg-green-300 border-2 border-green-300 rounded-md text-center'>
                            <p>{ele}</p>
                        </div>)
                    }
                    return(
                        <div key={ele+120} className='p-2 w-10 bg-white border-2 border-green-300 rounded-md text-center'>
                            <p>{ele}</p>
                        </div>
                    )})
                }
                
            </div>
        </div>
        {viewFilter && 
            <div className='z-50 bg-black bg-opacity-50 w-screen h-screen fixed top-0'>
                <div className=' w-full fixed bottom-0 overflow-y-scroll max-h-screen'>
                <div className='flex rounded-t-lg justify-end bg-white p-1 pr-3 pt-2'><RxCross1 onClick={()=>{setViewFilter(false)}}/></div>
                <div className=' p-2 bg-white  leading-6 '>
                    <h3 className=" py-1 text-[100%] font-semibold leading-6">Shop by category</h3>
                <div>
                    <ul className='text-[80%] flex gap-2 font-medium font-sans pt-1 leading-7 pl-[1%] text-gray-600'>
                        {categories?.map((ele)=>{return(<Link key={ele._id} to={`/products/${encodeURI(ele.name)}`} onClick={()=>{setPage(1);}}><li className={`${searchKey===ele.name ? 'text-black px-1 bg-gray-200 w-fit rounded-md':''} px-1 border-[1px] border-gray-400 rounded-2xl`} key={ele._id}>{ele.name}</li></Link>)})}
                    </ul>
                    <div className='flex gap-2'><div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>{navigate('/products')}}>Reset</div>
                <div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>manipulateProducts()} >Apply</div>

                    </div>
                </div>
            </div>
            <div className='p-2 bg-white ' >
                <h3 className="text-[100%] font-semibold leading-6">Filter by </h3>
                <div>
                    <h5 className='text-[90%] font-semibold pt-3 pl-1'>Availability</h5>
                    <div className='text-[85%] font-medium leading-8 pt-2 pl-0.5 flex items-center gap-3'>
                        <div className=''>
                            <input className='accent-green-400' type='checkbox' value="" checked={inStock} id='checked' onChange={()=>{handleInStock()}}/>
                            <label className='ml-2' >In Stock</label>
                        </div>
                        <div></div>
                            <input className='accent-green-400 ' type='checkbox' value="" checked={outStock} id='checked' onChange={()=>{handleOutStock()}}/>
                            <label className='ml-2'>Out of stock</label>
                        <div/>
                    </div>
                    <h5 className='text-[90%] font-semibold pt-2 pl-1'>Price</h5>
                    <div className='flex pt-4 ml-1 justify-between items-end'>
                        <div className='border-2 border-zinc-400 w-1/2 rounded-sm'>
                            <input className='w-full text-black  outline-none p-1 placeholder:italic placeholder:text-sm placeholder:font-medium placeholder:text-gray-700' type="number" value={priceFrom} onChange={(ele)=>{handlePriceFromChange(ele)}} placeholder='From'/>
                        </div>
                        <div className='border-2 border-zinc-400 w-1/2 ml-2 rounded-sm'>
                            <input className='w-full text-black  outline-none p-1 placeholder:italic placeholder:text-sm placeholder:font-medium placeholder:text-gray-700' type="number" value={priceTo} onChange={(ele)=>{handlePriceToChange(ele)}} placeholder='To'/>
                        </div>
                    </div>
                    <h5 className='text-[90%] font-semibold pt-2 pl-1'>Colours</h5>
                    <div className=''>
                        <div className='flex flex-wrap gap-1'>
                        {colors?.map((ele)=>{
                            return(
                                <div key={ele._id} className={`${selectColor===ele.color ?"border-black":""} hover:cursor-pointer border-2 rounded-full my-1`} onClick={()=>{setSelectColor(ele.color);manipulateProducts()}}>
                                <Color data={ele.color}  />
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className='flex gap-2'><div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>{navigate('/products')}}>Reset</div>
                <div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>manipulateProducts()} >Apply</div>

                    </div>
                </div>
            </div>
            <div className='p-2 bg-white'>
                <h3 className="text-[16px] font-semibold leading-6">Brands</h3>
                <div className='pt-2 flex flex-wrap items-start gap-1 '>
                    {brands?.map((ele)=>{
                        return(<Link key={ele._id} to={`/products/${encodeURI(ele.name)}`} onClick={()=>{setPage(1)}}><p className={`${searchKey===ele.name ? 'bg-green-500 text-white': ""} bg-green-100 text-green-700 font-semibold rounded-md p-1 text-sm hover:bg-green-500 hover:text-white`} key={ele?._id}>{ele.name}</p></Link>)
                    })}
                </div>
                <div className='flex gap-2'><div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>{navigate('/products')}}>Reset</div>
                <div className='p-1 mx-1 w-fit my-2 text-xs font-semibold bg-blue-600 text-white rounded-sm hover:cursor-pointer' onClick={()=>manipulateProducts()} >Apply</div>

                    </div>            </div>
            </div>
            </div>}
    </div>
  )
}

export default Products
