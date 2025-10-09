import React from 'react'
import joruney from "../../assets/images/journey.png"
import Button from '../../Components/Button'
const Journey = () => {
  return (
    <div className='h-full m-auto w-full  px-45 mt-15'>
        <div className="back relative h-full w-full  m-auto">
            <img src={joruney} alt=""  className='h-full p-5 w-full object-contain'/>

            <div className="absolute flex items-center mt-25  gap-5  justify-center flex-col text-center top-0 left-0 h-full w-full  ">
                <h3 className='figee text-[2.1vh]'>The Experience</h3>
                <h1 className='fontspring text-[#32140C] mb-11 leading-14 text-[3.3vw]'>It’s not just an <br /> appointment, it’s <br /> a Journey</h1>

                <Button btn="Book an appointment" bgcolor="#FD8124" padding="px-3 py-3" border="" textcolor="white" /> 


            </div>
            </div>

      
    </div>
  )
}

export default Journey
