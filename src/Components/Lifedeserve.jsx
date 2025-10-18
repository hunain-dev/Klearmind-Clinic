import React from 'react'
import Button from './Button'

const Lifedeserve = ({ videoSrc, imageSrc,heading,paragh,classname }) => {

  
  return (
<div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-0 lg:px-40">
{/* LEFT SIDE */}
      <div className='h-full overflow-hidden lg:p-3 md:p-4'>
        {videoSrc ? (
          <video
            src={videoSrc}
            className='h-full w-full rounded-4xl object-cover'
            autoPlay
            loop
            muted
          ></video>
        ) : (
          <img
            src={imageSrc}
            alt="Klearmind"
            className='h-full w-full rounded-4xl object-cover'
          />
        )}
      </div>

      <div className='h-full flex overflow-hidden items-center justify-between  flex-col '>
        <div className='w-full flex items-center justify-between   '>
        <h3 className={` text-[#32140C]  text-[8vw] md:text-[4.3vw] ${classname}`}>

        {heading}
          </h3>
        </div>
        <div className='w-full py-1 text-center gap-8 flex items-center justify-center flex-col lg:px-9 px-0 '>
          <h3 className='figee lg:leading-6 lg:text-[1vw] md:text-[1.3vw] lg:mt-0 mt-2 text-[3.2vw] leading-7 text-center text-[#413f3f]'>
            {paragh}
          </h3>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3'>
            <Button 
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'
              padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3" 
              border="border" 
              hoverEffect={true}
              to="https://calendly.com/klearmindclinics"
              
            />
            <Button 
              btn="Am I a candidate?" 
              padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3   " 
              fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'

              border="border-gray-700" 
              hoverEffect={false}
              to=""
              
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lifedeserve
