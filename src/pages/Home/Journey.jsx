import React from 'react'
import joruney from "../../assets/images/journey.png"
import Button from '../../Components/Button'
const Journey = () => {
  return (
    <div className='h-full m-auto w-full lg:pb-0 pb-6  lg:px-45 px-0 lg:mt-15 md:mt-25 mt-15'>
        <div className="back relative h-full w-full  m-auto">
            <img src={joruney} alt=""  className='lg:h-full lg:p-4 h-[78vw] md:h-[55vw]  w-full md:p-8  p-0 lg:w-full lg:object-contain object-cover'/>

            <div className="absolute flex items-center lg:mt-25 mt-23  lg:gap-5 gap-2  justify-center flex-col text-center top-0 left-0 h-full w-full  ">
            <div className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] md:text-[3vw] text-[3vw] text-gray-600 tracking-wide">
              The experience
            </span>
            </div>           
                 <h1 className='fontspring text-[#32140C] md:text-[4.3vw] lg:mb-11 mb-9 lg:leading-14 leading-9 lg:text-[3.3vw] text-[10vw]'>It’s not just an <br /> appointment, it’s <br /> a Journey</h1>

                <Button btn="Book an appointment" bgcolor="#FD8124" padding="lg:px-7 py-3 lg:py-3 md:px-5 md:py-3" border="" textcolor="white" to="https://calendly.com/admin-klearmindclinics/30min?month=2025-10" /> 


            </div>
            </div>

      
    </div>
  )
}

export default Journey
