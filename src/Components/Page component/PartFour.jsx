import React from 'react'
import { MdNavigateNext } from 'react-icons/md'
import CardPropx from '../Small Component/CardPropx'

const PartFour = () => {
  return (
    <>

    <section className='container mb-[200px]'>
        <div className=" mt-[80px] flex justify-between items-end ">
           <div className="">
           <h2 className='text-[32px] font-bold mb-[16px] '>Wissenswertes</h2>
           <p className='text-[#929A9F] text-[16px] font-medium w-[488px] '>Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condimentum nisl non gravida in. </p>
           </div>

           <div className=" gap-2 w-[160px] h-[40px] bg-[#FF9900] text-[16px] font-bold text-white flex justify-center items-center  ">
            <button>Unser Blog</button> 
            <span className=''> <MdNavigateNext className='text-[24px] '/> </span>
           </div>
        </div>
        <div className="">
            <h2 className=' mt-[80px] mb-[32px] text-[#929A9F] text-[14px] font-bold uppercase '>Unsere Letzten Beiträge</h2>

            <div className=" flex justify-between">

            <CardPropx taitel1="Sed eget morbi cursus elit ipsum pellentesque" taitel2={'Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...'} CardButton={'Lesen Sie weiter'} />
            
           
            <CardPropx taitel1="Sed eget morbi cursus elit ipsum pellentesque" taitel2={'Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...'} CardButton={'Lesen Sie weiter'} />
           
           
            <CardPropx taitel1="Sed eget morbi cursus elit ipsum pellentesque" taitel2={'Pellentesque mauris arcu nec gravida amet nec. Duis senectus cras semper cursus bibendum phasellus vehicula porttitor...'} CardButton={'Lesen Sie weiter'} />

            </div>
        </div>


    </section>
      
    </>
  )
}

export default PartFour
