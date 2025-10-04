import React from 'react'
import sunrise from "../../assets/images/sunrise.svg"
import Button from '../../Components/Button'
  const Therapydelivered = () => {
  return (
    <div className='m-auto mt-20 '>
      <div className='relative h-full  p-10 m-auto overflow-hidden flex items-center justify-center'>
        <img src={sunrise} className='h-[32vw]  object-contain' alt="" />
        

        <div className='absolute h-full mt-53 flex items-center flex-col justify-center text-center gap-4'>
          <h3 className='figee text-[1vw]'>What Is Klearmind?</h3>
          <h2 className='fontspring text-[3.1vw] leading-14 text-[#361911]'>Ketamine therapy delivered <br /> in a calm and compassionate <br /> environment</h2>
          <Button btn="Learn more" padding="py-3 px-10" border="border-gray-700" hoverEffect={false} />
          </div>
      </div>

  
      
      
    </div>
  )
}

export default Therapydelivered
