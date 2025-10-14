import React from 'react'
import joruney from "../../assets/images/journey.png"
import Button from '../../Components/Button'
const Journey = () => {
  return (
    <div className='h-full m-auto w-full lg:pb-0 pb-6  lg:px-45 px-0 lg:mt-15 mt-10'>
        <div className="back relative h-full w-full  m-auto">
            <img src={joruney} alt=""  className='lg:h-full lg:p-4 h-[78vw] w-full p-0 lg:w-full lg:object-contain object-cover'/>

            <div className="absolute flex items-center lg:mt-25 mt-23  lg:gap-5 gap-3  justify-center flex-col text-center top-0 left-0 h-full w-full  ">
                <h3 className='figee lg:text-[2.1vh] text-1xl'>The Experience</h3>
                <h1 className='fontspring text-[#32140C] lg:mb-11 mb-9 lg:leading-14 leading-10 lg:text-[3.3vw] text-4xl'>It’s not just an <br /> appointment, it’s <br /> a Journey</h1>

                <Button btn="Book an appointment" bgcolor="#FD8124" padding="px-3 py-3" border="" textcolor="white" to="https://calendly.com/admin-klearmindclinics/30min?month=2025-10" /> 


            </div>
            </div>

      
    </div>
  )
}

export default Journey
