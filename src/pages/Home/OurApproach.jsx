import React from 'react'
import aproach from "../../assets/images/aporach.png"
import Button from '../../Components/Button'

const OurApproach = () => {
  return (
    <div className='w-full bg-[#F8EEEC] mt-15 overflow-hidden relative'>
      <div className='h-full w-full relative'>
        
        {/* Background Image */}
        <img src={aproach} alt="" className='h-full w-full object-cover' />

        {/* Overlay */}
        <div className='absolute inset-0 flex items-center justify-center '>
            <div className='py-8 px-16 rounded-4xl bg-[#FDF9E9] gap-8 flex text-center items-center justify-center flex-col'>
                <h2 className='figee text-[2.5vw] text-[#32140C] '>Our Approach
                </h2>

                <h3 className='figee text-[1vw] leading-6'>Discover how ketamine therapy works at Kleamind - <br /> it's already within you, waiting to bloom.

</h3>
<Button btn="Watch the explainer video" padding="py-3 px-5" hoverEffect={false}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
