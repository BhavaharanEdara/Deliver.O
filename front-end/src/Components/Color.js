import React from 'react'

export default function Color(props) {
  const color = props.data;
  return (
        <div className='w-7 h-7  rounded-full border-gray-400 border-2' style={{backgroundColor:color}}></div>
  )
}
