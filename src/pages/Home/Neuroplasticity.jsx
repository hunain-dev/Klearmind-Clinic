import React from 'react'
import Button from './../../Components/Button'
import fish from "../../assets/images/fish.png"
const Neuroplasticity = () => {
  return (
    <div className=" grid grid-cols-1 w-full bg-gradient-to-b from-[#FFCB48] to-white lg:mt-24 md:mt-20 mt-5">
    <div className='h-full w-full  flex items-center justify-start flex-col py-7 gap-6 text-center'>
      <h2 className='figee lg:text-[2.5vw] md:text-[3.6vw] text-3xl'>Rewiring Hope Through Neuroplasticity</h2>
      <h3 className='figee lg:text-[1vw] text-[4vw] md:text-[2vw] text-[#4E3F22] lg:leading-6'>Discover how ketamine therapy fuels neuroplasticity   <br />
      - it's already within you, waiting to bloom.</h3>
      <Button btn="Watch the Explainer video" padding="lg:py-3 md:py-3 py-1" fontSize='lg:text-[0.9vw] md:text-[1.3vw] ' border="border-gray-700" hoverEffect={false} />
      </div>
    <div className='h-full   flex items-center justify-center'>
      <img src={fish} alt="" className='lg:h-[35vw] md:h-[45vw]  object-cover' />
    </div>
    </div>
  )
}

export default Neuroplasticity
