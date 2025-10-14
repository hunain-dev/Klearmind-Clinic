import React from 'react'
import sunrise from "../../assets/images/sunrise.svg"
import Button from '../../Components/Button'
  const Therapydelivered = () => {
  return (
    <div className='m-auto lg:mt-4 mt-0 lg:pb-25 pb-10'>
      <div className='relative h-full  lg:p-10 p-0 m-auto overflow-hidden flex items-center justify-center '>
        <img src={sunrise} className='lg:h-[32vw]  h-[80vw] object-contain' alt="" />
        

        <div className='absolute h-full lg:mt-53 mt-30   flex items-center flex-col justify-center text-center lg:gap-2 gap-2'>
          <h3 className='figee lg:text-[1vw] text-[3vw]'>What Is Klearmind?</h3>
          <h2 className='fontspring lg:text-[3.1vw] lg:leading-14 text-2xl text-[#361911]'>Ketamine therapy delivered <br /> in a calm and compassionate <br /> environment</h2>
          <Button 
  btn="Learn more" 
  padding="lg:py-3 lg:px-9  py-2" 
  border="border-gray-700" 
  hoverEffect={false} 
  to="/Ketaminetherapy" 
/>          </div>
      </div>

  
      
      
    </div>
  )
}

export default Therapydelivered
