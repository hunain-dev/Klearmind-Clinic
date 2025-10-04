import React from 'react'
import Button from './../../Components/Button'
import fish from "../../assets/images/fish.png"
const Neuroplasticity = () => {
  return (
    <div className=" grid grid-cols-1 w-full bg-gradient-to-b from-[#FFCB48] to-white mt-24">
    <div className='h-full w-full  flex items-center justify-start flex-col py-7 gap-6 text-center'>
      <h2 className='figee text-[2.5vw]'>Rewiring Hope Through Neuroplasticity</h2>
      <h3 className='figee text-[1vw] text-[#4E3F22] leading-6'>Discover how ketamine therapy fuels neuroplasticity   <br />
      - it's already within you, waiting to bloom.</h3>
      <Button btn="Watch the Explainer video" padding="py-3" border="border-gray-700" hoverEffect={false} />
      </div>
    <div className='h-full   flex items-center justify-center'>
      <img src={fish} alt="" className='h-[35vw]  object-cover' />
    </div>
    </div>
  )
}

export default Neuroplasticity
