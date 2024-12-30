import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

const CardPropx = ({taitel1 , taitel2 , CardButton }) => {
  return (
    <>
    <div className="w-[361px] h-[212px] ">
        <h2 className='text-[20px] font-medium font-poppins '> {taitel1} </h2>
        <p className=' text-[16px] font-poppins font-medium text-[#929A9F] my-[20px] '> {taitel2} </p>
        <button className='flex items-center justify-center text-[16px] font-poppins font-medium text-[#FF9900] '> {CardButton}  <MdNavigateNext className='text-[24px] '/> </button>
    </div>
      
    </>
  )
}

export default CardPropx
