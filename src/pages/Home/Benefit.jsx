import React from 'react'
import Button from '../../Components/Button'
import VA from "../../assets/images/VA.png"
const Benefit = () => {
  return (
    <div className=' w-full m-auto mt-23 p-10 px-38'>
        <div className='h-full  rounded-3xl grid grid-cols-2 overflow-hidden bg-[#F8EEEC] m-auto'>
            <div className='h-full px-7 py-7'>
                <h3 className='figee text-[1.9vh] mb-5'>Benefit for Veterans Affairs</h3>
                <h2 className='figee text-[2.3vw] mb-12 leading-10'>VA-approved Community <br /> Care Provider</h2>
                  <div className='mt-5 flex items-start justify-start gap-3'>
                  <Button 
  padding="py-3 px-4" 
  bgcolor="#FD8124" 
  textcolor="white" 
  hoverEffect={false}   
  mousehover="hover:bg-[#32140C]" 
  border="" 
  btn="Book an appointmnt"
/>
                  <Button padding="py-3 px-4" bgcolor="" textcolor="black" hoverEffect={false} border="border-black" btn="Learn more"/>

                  </div>
            </div>
            <div className='h-full px-9 flex items-center justify-end'>
                <img src={VA} alt="" className='h-[5vw] object-contain' />
            </div>
        </div>
      
    </div>
  )
}

export default Benefit
