import React from 'react'
import aproach from "../../assets/images/aporach.png"
import Button from '../../Components/Button'

const OurApproach = () => {
  return (
    <div className='w-full bg-[#F8EEEC] mt-15 overflow-hidden relative'>
      <div className='lg:h-full lg:w-full relative'>
        
        {/* Background Image */}
        <img src={aproach} alt="" className='lg:h-full h-150  lg:w-full object-cover' />

        {/* Overlay */}
        <div className='absolute inset-0 flex items-center justify-center '>
            <div className='lg:py-8 py-10 lg:px-16  lg:p-0 p-1  rounded-4xl bg-[#FDF9E9] gap-8 flex text-center items-center justify-center flex-col'>
                <h2 className='figee lg:text-[2.5vw] text-3xl text-[#32140C] '>Our Approach
                </h2>

                <h3 className='figee lg:text-[1vw] text-[3.7vw] lg:leading-6'>Discover how ketamine therapy works at Kleamind - <br /> it's already within you, waiting to bloom.

</h3>
<Button btn="Watch the explainer video" padding="lg:py-3 lg:px-5 py-3" hoverEffect={false}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
