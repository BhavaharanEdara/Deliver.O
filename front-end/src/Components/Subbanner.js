import React from 'react'
function Subbanner({
    id,img, title, tagline, discription,color
}
  ) {
  return (
    <div className='mx-[1%]' >
      <div className= {`relative rounded-lg shadow-xl shadow-green-400 text-${color}`} >
        <img className = "rounded-lg" src ={img} alt={title}/>
        <div className='absolute top-0 left-0 pl-[5%] pt-[10%]'>
            <p className='font-sans font-normal text-sm'>{tagline}</p>
            <h1 className='md:text-[95%] lg:text-xl font-sans font-medium xl:text-[150%] pt-[2%]'>{title}</h1>
            <p className='md:text-xs lg:text-sm xl:text-md font-normal font-sans mt-[2%] pr-2'>{discription}</p>
        </div>
      </div>
    </div>
  )
}

export default Subbanner
