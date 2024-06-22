import React from 'react'

function Mcard({data,handleClick,index}) {
  const {image,Artist,name,added} = data ;
  return (
    <div className='w-60 flex gap-4 bg-zinc-100 p-4 rounded-md relative mt-30 pb-8'>
      <div className='w-12 h-12  bg-orange-600 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt=""></img>
      </div>
      <div className=''>
      <h4 className='font-semibold leading-none text-xl'>{name}</h4>
      <h6 className='text-sm '>{Artist}</h6>
      </div>
      <button onClick={()=>{handleClick(index)}} className={`px-2 py-1 ${added === false ? "bg-orange-600":"bg-teal-500"} rounded-full text-xm text-white absolute bottom-0 translate-y-[50%] -translate-x-[-50%] whitespace-nowrap`}>{added === false ? "Add to favourites":"Added"}</button>
    </div>
  )
}

export default Mcard
